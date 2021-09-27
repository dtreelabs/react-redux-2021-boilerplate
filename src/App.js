import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import Home from './screens/home';
import Profile from './screens/profile';
import Exam from './screens/exam';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Demo react app</p>
        <QueryClientProvider client={queryClient}>
          <Home />
          <Profile />
          <Exam />
        </QueryClientProvider>  
      </header>
    </div>
  );
}

export default App;
