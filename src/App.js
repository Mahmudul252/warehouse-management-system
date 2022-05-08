import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>

      <ToastContainer />
    </div>
  );
}

export default App;
