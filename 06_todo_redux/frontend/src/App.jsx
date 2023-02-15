import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Todo from './pages/Todo';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Routes>

          <Route path='/' element={<Todo />}/>

          <Route path='/about' element={<About />}/>

          <Route path="*" element={<Navigate to='/' />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
