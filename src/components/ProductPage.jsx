import './ProductPage.css';
import { db } from '../config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import Product from './Product';
import { Link } from "react-router-dom";
import { Context } from '../Context';
import LogoImg from '../assests/th.jpg';
import p1 from '../assests/biryani.jpg';
import p2 from '../assests/Murgh-Musallam.jpg';
import p3 from '../assests/shahi-paneer.jpg';
import p4 from '../assests/vegetable-pakora.jpg';
import p5 from '../assests/veg-fried-rice.jpg';
import p6 from '../assests/sambhar-vada.jpg';

function ProductPage() {

    const { cart, setCart } = useContext(Context)

    const [products, setProducts] = useState([]);
    const [biryani, setBiryani] = useState([]);
    const [chicken, setChicken] = useState([]);
    const [paneer, setPaneer] = useState([]);
    const [vegetable, setVegetable] = useState([]);
    const [chinese, setChinese] = useState([]);
    const [southIndian, setSouthIndian] = useState([]);

    const productCollectionRef = collection(db, 'products');

    async function getProducts() {
        try {
            const data = await getDocs(productCollectionRef);
            const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(mainData);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        setBiryani(products?.filter((product) => {
            return product?.category === "biryani";
        }))
        setChicken(products?.filter((product) => {
            return product?.category === "chicken";
        }))
        setPaneer(products?.filter((product) => {
            return product?.category === "paneer";
        }))
        setVegetable(products?.filter((product) => {
            return product?.category === "vegetable";
        }))
        setChinese(products?.filter((product) => {
            return product?.category === "chinese";
        }))
        setSouthIndian(products?.filter((product) => {
            return product?.category === "south indian";
        }))
    }, [products])

    return (
        <div>
            <div class="container" id="container">
                <div id="menu">
                    <div class="title">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div class="menu-item">
                        <Link to="/products">All Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/orders">View Orders</Link>
                    </div>
                </div>

                <div id="food-container">
                    <div id="header">
                        <div class="add-box">
                        </div>
                    </div>
                    <div id="food-items" class="d-food-items">
                        <div id="biryani" class="d-biryani">
                            <p id="category-name">Biryani</p>
                            {
                                biryani.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />
                                ))
                            }
                        </div>

                        <div id="chicken" class="d-chicken">
                            <p id="category-name">Chicken Delicious</p>
                            {
                                chicken.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />
                                ))
                            }
                        </div>

                        <div id="paneer" class="d-paneer">
                            <p id="category-name">Paneer Mania</p>
                            {
                                paneer.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />

                                ))
                            }
                        </div>

                        <div id="vegetable" class="d-vegetable">
                            <p id="category-name">Pure Veg Dishes</p>
                            {
                                vegetable.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />

                                ))
                            }
                        </div>

                        <div id="chinese" class="d-chinese">
                            <p id="category-name">Chinese Corner</p>
                            {
                                chinese.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />

                                ))
                            }
                        </div>

                        <div id="south-indian" class="d-south-indian">
                            <p id="category-name">South Indian</p>
                            {
                                southIndian.map((elm) => (
                                    <Product url={elm.url} name={elm.name} price={elm.price} />

                                ))
                            }
                        </div>
                    </div>
                </div>

                <div id="cart">
                    <div class="taste-header">
                        <div class="user">
                            <i class="fa fa-user-circle" id="circle"> Account</i>
                        </div>
                    </div>
                    <div id="category-list">
                        <p class="item-menu">Menu List</p>
                        <div class="border">
                            <div className="list-card">
                                <img src={p1}/>
                                <a className="list-name" href="#biryani">biryani</a>
                            </div>
                            <div className="list-card">
                                <img src={p2}/>
                                <a className="list-name" href="#biryani">Chicken</a>
                            </div>
                            <div className="list-card">
                                <img src={p3}/>
                                <a className="list-name" href="#biryani">Paneer</a>
                            </div>
                            <div className="list-card">
                                <img src={p4}/>
                                <a className="list-name" href="#biryani">Vegetable</a>
                            </div>
                            <div className="list-card">
                                <img src={p5}/>
                                <a className="list-name" href="#biryani">Chinese</a>
                            </div>
                            <div className="list-card">
                                <img src={p6}/>
                                <a className="list-name" href="#biryani">South Indian</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;