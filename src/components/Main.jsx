import food_1 from '../assets/images/greek salad.jpg';
import food_2 from '../assets/icons_assets/bruchetta.svg';
import food_3 from '../assets/images/lemon dessert.jpg';
import delivery_icon from '../assets/icons_assets/Dish icon.svg';

export const Main = () => {
  return (
    <main>
      <div className="highlights">
        <div className="head_highlights">
          <h2>This weeks specials!</h2>
          <button className="button">
            Online Menu
          </button>
        </div>
        <div className="body_highlights">
          <div className="card">
            <img src={food_1} alt="greek_salad" />
            <div className='content-card'>
              <div className="description_card">
                <h4>Greek salad</h4>
                <span>$12.99</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut quo, obcaecati aut earum maiores.</p>
              <div className="action_card">
                <a href="https://google.com">Order a delivery</a>
                <img src={delivery_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={food_2} alt="bruchetta" />
            <div className='content-card'>
              <div className="description_card">
                <h4>Bruchetta</h4>
                <span>$5.99</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut quo, obcaecati aut earum maiores.</p>
              <div className="action_card">
                <a href="https://google.com">Order a delivery</a>
                <img src={delivery_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={food_3} alt="lemon_dessert" />
            <div className='content-card'>
              <div className="description_card">
                <h4>Lemon Dessert</h4>
                <span>$5.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut quo, obcaecati aut earum maiores.</p>
              <div className="action_card">
                <a href="https://google.com">Order a delivery</a>
                <img src={delivery_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
