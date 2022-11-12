import '../App.css';
import logo from '../assets/ps-logo.png'
import userPhoto from '../assets/user-photo.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-info'>
        <img className='logo-img' src={logo} alt='ps logo'/>
        <p className='logo-text'>Личный кабинет</p>
      </div>
      <div className='customer-info'>
        <div className='customer-block'>
          <img src={userPhoto} alt='user'/>
          <div>
            <p>Константин П.</p>
            <p>ID 441485</p>
          </div>
        </div>
        <div className='customer-block'>
          <div className='circle'></div>
          <div >
            <p>Финансы и счета</p>
            <p>1 050 280 тг</p>
          </div>
        </div>
        <div className='circle customer-block'></div>
      </div>
    </div>

  );
}

export default Header;
