
import './App.css';
import Cures from './CurseComponent';
import User from './UserComponent';
import CounterFunc from './CounterComponent';
import About from './components/pages/about/About';
function App() {
  return (
    <div>
     <CounterFunc  num={0} />
     <User/>
     <Cures/>
     <About/>
    </div>
  );
}

export default App;
