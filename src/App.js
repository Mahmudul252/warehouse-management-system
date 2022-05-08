import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <ToastContainer />
    </div>
  );
}

export default App;
