import { Link } from 'react-router-dom';
import './ProductPage.css';
import LogoImg from '../assests/th.jpg';

function AdminPage() {
    return (
        <div>
            <div class="container" id="container">
                <div id="menu">
                    <div class="title">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div class="menu-item">
                        <Link to="/admin">Admin Panel</Link>
                        <Link to="/add">Add Product</Link>
                        <Link to="/admin/orders">View Orders</Link>
                    </div>
                </div>

                <div id="food-container">
                    <div id="header">
                        <div class="add-box">
                        </div>
                    </div>
                    <div id="food-items" class="d-food-items">
                        <div id="biryani" class="d-biryani">
                            <p id="category-name">Admin Panel</p>
                            <Link to="/add" className="add-to-cart1-btn" >Add Product</Link>
                            <Link to="/admin/orders" className="add-to-cart1-btn" >View Orders</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;