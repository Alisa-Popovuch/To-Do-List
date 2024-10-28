import './App.css';
import { Plans } from './Plans';
import plans from './plans.jpg';
import Time from './Time';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <img src={ plans } width={200} alt='plans' />
        <h1 className='List'>To Do List</h1>
        <Time />
      </div>
      <div className='Assistant'>
        <p className='assistantText'>Hello! I'm your virtual assistant! Let's get together your to do list!</p>
      </div>
      <Plans />
    </div>
  );
}

export default App;
