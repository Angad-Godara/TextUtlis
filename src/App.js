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
      // document.title = 'TextUtils - Darkmode'

      // chamakane waale titles
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'TextUtils is an amazing website'
      // }, 2000);

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode is been enabled", "success");
      // document.title = 'TextUtils - Lightmode'
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar mode={mode} changeMode={changeMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm title={"Enter the text to analyze below"} mode={mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About mode={mode} />}> </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;


// exact --> react does partial matching if we don't use exact then
// /user --> component 1
// /user/home --> component 2 but react without exact ---> component 1