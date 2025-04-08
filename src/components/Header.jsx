import imageHeader from '../assets/images/restauranfood.jpg';

export const Header = () => {
  return (
    <header>
      <div className="content-left">
        <div className="content-text">
          <h1>Little Lemon</h1>
          <h5>Chicago</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem illo nemo saepe necessitatibus velit aliquam fuga non sint possimus neque blanditiis quasi sequi vitae accusamus mollitia nobis unde, quibusdam praesentium!</p>
        </div>
        <button className="button">
          Reserve a table
        </button>
      </div>
      <div className="content-right">
        <img src={imageHeader} alt="restauranfood" />
      </div>
    </header>
  )
}
