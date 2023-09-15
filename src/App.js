
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Login from './component/login';

function App() {
  return (
    <>
      <div style={{marginBottom : '150px'}}><Header/></div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>




    </>);
}

export default App;
