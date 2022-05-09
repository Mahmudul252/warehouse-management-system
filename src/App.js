import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
