import './App.css';
import Interval from './components/Interval';
import Middle from './components/Middle';
import Sort from './components/Sort';
import Sum from './components/Sum';

function App() {

  return (
    <div className="App">

      <h1>React Redux</h1>

      <div className='line'>
        <Interval></Interval>
      </div>

      <div className='line'>
        <Middle></Middle>
        <Sum></Sum>
        <Sort></Sort>
      </div>
      
    </div>
  );
}

export default App;
