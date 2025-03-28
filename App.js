import logo from './logo.svg';
import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import "./index.css"
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <diV>

      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>


      </Routes>


    </diV>
  );
}

export default App;
