import '../App.css';
import Tabs from './Tabs'


const Mainpage = () => {
  return (
    <div className='mainpage'>
      <div className='mp-path'>
      Кабинет / Крошки облако и тп /
      </div>
      <h1>Создать новый сервер</h1>
      <p className='mp-text'>
        Лид с кратким пояснением того, что здесь происходит. Ну или с объяснением возможностей. Лид с кратким пояснением того, что здесь происходит. Ну или с объяснением возможностей.
      </p>
      <h2>Название сервера и зона</h2>
      <form className='input-form'>

        <label className='input-block'>
            <input className='input' type='text' required='required'></input>
            <span className='input-label'>Введите название сервера</span>
        </label>
        <label className='input-block'>
            <input className='input' type='text' required='required'></input>
            <span className='input-label'>Зона </span>
        </label>
      </form>
      <h2>Ресурсы</h2>
      <Tabs />
    </div>
  );
}

export default Mainpage;
