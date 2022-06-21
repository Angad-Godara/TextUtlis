import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typ) => {
    setAlert({
      msg: message,
      type: typ
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#121212"
      document.body.style.color = "white"
      showAlert("Dark mode is been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode is been enabled", "success");
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar mode={mode} changeMode={changeMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}> </Route>
          <Route exact path="/TextUtlis" element={<TextForm title={"Enter the text to analyze below"} mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;