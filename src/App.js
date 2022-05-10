import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Pricing from './pages/Pricing/Pricing';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Reviews from './pages/Reviews/Reviews';
import Header from './pages/shared/Header/Header';
import Update from './pages/Update/Update';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='mt-5 pt-2'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Items></Items>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
