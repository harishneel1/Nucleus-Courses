import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons/Buttons';


function App() {
  return (
    <Routes>
      <Route path="/exercises/buttons" component={Buttons} />
    </Routes>
  );
}

export default App;
