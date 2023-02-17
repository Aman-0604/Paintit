import { inject } from '@vercel/analytics';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  inject();
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
