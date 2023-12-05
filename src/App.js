import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import ProductPage from './components/ProductPage';
import AddProduct from './components/AddProduct';
import CartPage from './components/CartPage';
import AppContext from './Context';
import OrdersPage from './components/OrdersPage';
import AdminPage from './components/AdminPage';
import AdminOrders from './components/AdminOrders';
import AdminLogin from './components/AdminLogin';

function App() {
    return (
    <BrowserRouter>
        <AppContext>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/orders' element={<OrdersPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path='/admin/orders' element={<AdminOrders/>}/>
        </Routes>
        </AppContext>
    </BrowserRouter>
    );
}

export default App;
