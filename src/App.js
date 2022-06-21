import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextForm title={"Enter the text to analyze below"} />
    </div>
  );
}

export default App;
