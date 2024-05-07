import { images,data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits you palatte' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, i) => (
            <MenuItem 
              key={wine.title+i} 
              title={wine.title}
              price={wine.price}
              tags={wine.tags} /> 
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>

        <div className="app__specialMenu-menu_cocteils flex__center">
          <p className='app__specialMenu-menu_heading'>Cocteils</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocteil, i) => (
              <MenuItem 
              key={cocteil.title+i} 
              title={cocteil.title}
              price={cocteil.price}
              tags={cocteil.tags} /> 
            ))}
          </div>
        </div>
      </div>


      <div>
        <button type='button' className='custom__button'>View More</button>
      </div>
  </div>
);

export default SpecialMenu;
