import './App.css';
import Home from './screens/home';
import Profile from './screens/profile';
import Exam from './screens/exam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Demo react app</p>
        <Home />
        <Profile />
        <Exam />
      </header>
    </div>
  );
}

export default App;
