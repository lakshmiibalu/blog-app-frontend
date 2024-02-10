import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import ViewMyblog from './components/ViewMyblog';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<AddBlog/>}/>
        <Route path='/view' element={<ViewBlog/>}/>
        <Route path='/myblog' element={<ViewMyblog/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
