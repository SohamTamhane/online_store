import { Link } from 'react-router-dom';
import './ProductPage.css';
import { Context } from '../Context';
import { useContext, useEffect } from 'react';
import CartItem from './CartItem';
import LogoImg from '../assests/th.jpg';

import { addDoc, collection } from "firebase/firestore";
import { db } from '../config/firebase';

function CartPage(){
    const {cart, user} = useContext(Context);

    const orderCollectionRef = collection(db, "orders");

    async function createOrder(){
        try{
            await addDoc(orderCollectionRef, {user: user, order: cart});
            alert("Order Placed Successfully!!");
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <div className="container" id="container">
                <div id="menu">
                    <div className="title">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div className="menu-item">
                        <Link to="/products">All Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/orders">View Orders</Link>
                    </div>
                </div>

                <div id="food-container">
                    <div id="header">
                        <div className="add-box">
                        </div>
                    </div>

                    {/* Cart Page */}
                    <div id="cart-page" className="cart-toggle">
                        <p id="cart-title">Cart Items</p>
                        {
                            cart.map((elm)=>(
                                <CartItem name={elm.name} url={elm.url} price={elm.price}/>
                            ))
                        }
                        <div className="btn-box">
                            <button onClick={createOrder} className="cart-btn">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartPage;