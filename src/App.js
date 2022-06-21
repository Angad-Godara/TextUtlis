import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <div className="App">
      <Navbar mode={mode} changeMode={changeMode} />
      <TextForm title={"Enter the text to analyze below"} />
      {/* <About /> */}
    </div>
  );
}

export default App;
