import '../App.css';
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'
import language from '../assets/language.svg'
import home from '../assets/home.svg'


const Header = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-upper'>
        <img src={icon1} alt='icon1'/>
        <img src={icon2} alt='icon2'/>
        <img src={icon3} alt='icon3'/>
        <img src={icon4} alt='icon4'/>
        <img src={icon5} alt='icon5'/>
        <img src={icon6} alt='icon6'/>
      </div>
      <div className='sidebar-lower'>
        <img src={language} alt='language'/>
        <img src={home} alt='home'/>
      </div>
    </div>
  );
}

export default Header;
