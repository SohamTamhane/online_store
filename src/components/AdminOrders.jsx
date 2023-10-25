import { Link } from 'react-router-dom';
import './ProductPage.css';
import { Context } from '../Context';
import { useContext, useEffect, useState } from 'react';
import LogoImg from '../assests/th.jpg';

import { getDocs, collection } from "firebase/firestore";
import { db } from '../config/firebase';
import AdminCartItem from './AdminCartItem';

function AdminOrders() {
    const { cart, user } = useContext(Context);
    const [orders, setOrders] = useState([]);

    const orderCollectionRef = collection(db, "orders");

    async function getOrder() {
        try {
            const data = await getDocs(orderCollectionRef);
				// Filter Data
            const mainData = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
            setOrders(mainData);
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
                        <Link to="/admin">Admin Panel</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/admin/orders">View Orders</Link>
                    </div>
                </div>

                <div id="food-container">
                    <div id="header">
                        <div className="add-box">
                        </div>
                    </div>

                    {/* Cart Page */}
                    <div id="cart-page" className="cart-toggle">
                        <p id="cart-title">All Orders</p>
                        {
                            orders.map((elm) => (
                                elm.order.map((o1)=>(
                                    <AdminCartItem name={o1.name} url={o1.url} price={o1.price} userName={elm.user}/>
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
export default AdminOrders;