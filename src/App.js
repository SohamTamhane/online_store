import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import ProductPage from './components/ProductPage';
import AddProduct from './components/AddProduct';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/add' element={<AddProduct/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
