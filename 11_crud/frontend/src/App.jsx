import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/template/Footer';
import Logo from './components/template/Logo';
import Nav from './components/template/Nav';
import Routers from './Routers';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />

        <Nav />

        <Routers />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;