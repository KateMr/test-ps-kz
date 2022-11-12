import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Mainpage from './components/Mainpage.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;
