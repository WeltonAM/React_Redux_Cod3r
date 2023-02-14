import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Menu from './components/Menu';
import About from './pages/About';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <Menu />

      <Todo />

      <About/>
    </div>
  );
}

export default App;
