import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import { ReservationContext } from '../../../context/ReservationContext';

beforeAll(() => {
  // Evita errores de scroll en JSDOM
  window.scrollTo = jest.fn();
});

// Mock del contexto
const mockContextValue = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  dispatch: jest.fn()
};

const MockedReservationProvider = ({ children }) => (
  <ReservationContext.Provider value={mockContextValue}>
    {children}
  </ReservationContext.Provider>
);

const renderWithContext = () => {
  return render(
    <MockedReservationProvider>
      <BookingForm />
    </MockedReservationProvider>
  );
};

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all form fields', () => {
    renderWithContext();

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('shows validation errors when required fields are empty', async () => {
    renderWithContext();

    const dateInput = screen.getByLabelText(/choose date/i);
    await userEvent.clear(dateInput); // Borra la fecha predeterminada

    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
  });

  test('validates number of guests field', async () => {
    renderWithContext();

    const guestsInput = screen.getByLabelText(/number of guests/i);

    // Valor inválido: 0
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, '0');
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(await screen.findByText(/please enter a number between 1 and 12/i)).toBeInTheDocument();

    // Vacío
    await userEvent.clear(guestsInput);
    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(await screen.findByText(/please enter a number between 1 and 12/i)).toBeInTheDocument();

    // Valor válido: 4
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, '4');
    expect(screen.queryByText(/please enter a number between 1 and 12/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.queryByText(/please enter a number between 1 and 12/i)).not.toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    renderWithContext();

    // Fecha futura válida
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const validDate = futureDate.toISOString().split('T')[0];

    await userEvent.clear(screen.getByLabelText(/choose date/i));
    await userEvent.type(screen.getByLabelText(/choose date/i), validDate);
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), '18:00');
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');

    await userEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(consoleSpy).toHaveBeenCalledWith(
      "Reservation submitted:",
      expect.objectContaining({
        date: validDate,
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      })
    );

    consoleSpy.mockRestore();
  });

  test('renders available time options from context', () => {
    renderWithContext();

    mockContextValue.availableTimes.forEach((time) => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });

    expect(screen.getByRole('option', { name: 'Select a time' }).selected).toBe(true);
  });
});
