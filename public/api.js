// public/api.js

window.fetchAPI = function (date) {
  const result = [];
  const random = seedRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

window.submitAPI = function (formData) {
  return true; // Simula que la reserva fue exitosa
};

// Pseudo-generador de números aleatorios
function seedRandom(seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
}
