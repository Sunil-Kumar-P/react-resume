import './App.css';
import { useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

function App() {
  const heroRef = useRef(null);

  return (
    <ThemeProvider>
      <div className='all'>
        <Navbar heroRef={heroRef} />
        <Hero ref={heroRef} />
      </div>
    </ThemeProvider>
  );
}

export default App;
