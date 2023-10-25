import { Link } from 'react-router-dom';
import './ProductPage.css';
import { Context } from '../Context';
import { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import LogoImg from '../assests/th.jpg';

import { getDocs, collection } from "firebase/firestore";
import { db } from '../config/firebase';

function OrdersPage() {
    const { cart, user } = useContext(Context);
    const [orders, setOrders] = useState([]);

    const orderCollectionRef = collection(db, "orders");

    async function getOrder() {
        try {
            const data = await getDocs(orderCollectionRef);
				// Filter Data
            const mainData = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
            const filteredData = mainData.filter(elm=>{
                if(elm.user == user){
                    return elm
                }
            });
            setOrders(filteredData);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getOrder();
    }, [])

    return (
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
                        <p id="cart-title">Your Orders</p>
                        {
                            orders.map((elm) => (
                                elm.order.map((o1)=>(
                                    <CartItem name={o1.name} url={o1.url} price={o1.price}/>
                                ))
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrdersPage;