
import './App.css';
import NavMenu from './Pages/Main/Components/NavMenu/NavMenu'
import Header from './Pages/Main/Components/Header/Header'
import Teams from './Pages/Main/Components/Teams/Teams'
import About from './Pages/Main/Components/About/About';

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Header></Header>
      <Teams></Teams>
      <About></About>
    </div>
  );
}

export default App;
