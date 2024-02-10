import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
