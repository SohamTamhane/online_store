import './ProductPage.css';
import { db } from '../config/firebase';
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';

function ProductPage() {

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
            console.log(mainData);
            setProducts(mainData);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(()=>{
        setBiryani(products?.filter((product)=>{
            return product?.category==="biryani";
        }))
        setChicken(products?.filter((product)=>{
            return product?.category==="chicken";
        }))
        setPaneer(products?.filter((product)=>{
            return product?.category==="paneer";
        }))
        setVegetable(products?.filter((product)=>{
            return product?.category==="vegetable";
        }))
        setChinese(products?.filter((product)=>{
            return product?.category==="chinese";
        }))
        setSouthIndian(products?.filter((product)=>{
            return product?.category==="south indian";
        }))
    }, [products])

    return (
        <div>
            {console.log(products)}
            <div class="container" id="container">
                <div id="menu">
                    <div class="title">
                        <img src="./images/foodie hunter.png" alt="" />
                    </div>
                    <div class="menu-item">
                        <a href="#">Your Orders</a>
                        <a href="#">Wishlists</a>
                        <a href="#">Cart</a>
                    </div>
                </div>

                <div id="food-container">
                    <div id="header">
                        <div class="add-box">
                        </div>
                        <div class="util">
                            <i class="fa fa-search"> Search</i>
                            <i class="fa fa-cart-plus" id="cart-plus"> 0 Items</i>
                        </div>
                    </div>
                    <div id="food-items" class="d-food-items">
                        <div id="biryani" class="d-biryani">
                            <p id="category-name">Biryani</p>
                            {
                                biryani.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div id="chicken" class="d-chicken">
                            <p id="category-name">Chicken Delicious</p>
                            {
                                chicken.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div id="paneer" class="d-paneer">
                            <p id="category-name">Paneer Mania</p>
                            {
                                paneer.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div id="vegetable" class="d-vegetable">
                            <p id="category-name">Pure Veg Dishes</p>
                            {
                                vegetable.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div id="chinese" class="d-chinese">
                            <p id="category-name">Chinese Corner</p>
                            {
                                chinese.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div id="south-indian" class="d-south-indian">
                            <p id="category-name">South Indian</p>
                            {
                                southIndian.map((elm)=>(
                                    <div id="item-card">
                                        <div id="card-top">
                                            <i class="fa fa-star" id="rating"><AiFillStar/>5</i>
                                            <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i>
                                        </div>
                                        <img src={elm.url}/>
                                        <p id="item-name">{elm.name}</p>
                                        <p id="item-price">Price :  {elm.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div id="cart-page" class="cart-toggle">
                        <p id="cart-title">Cart Items</p>
                        <p id="m-total-amount">Total Amout : 100</p>
                        <table>
                            <thead>
                                <td>Item</td>
                                <td>Name</td>
                                <td>Quantity</td>
                                <td>Price</td>
                            </thead>
                            <tbody id="table-body">

                            </tbody>
                        </table>
                        <div class="btn-box">
                            <button class="cart-btn">Checkout</button>
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
                        <div class="border"></div>
                    </div>
                    <div id="checkout" class="cart-toggle">
                        <p id="total-item">Total Item : 5</p>
                        <p id="total-price"></p>
                        <p id="delievery">Free delievery on $ 40</p>
                        <button class="cart-btn">Checkout</button>
                    </div>
                </div>
            </div>



            <div id="mobile-view" class="mobile-view">
                <div class="mobile-top">
                    <div class="logo-box">
                        <img src="./images/foodielogo.png" alt="" id="logo" />

                    </div>
                    <div class="top-menu">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-tag"></i>
                        <i class="fa fa-heart-o"></i>
                        <i class="fa fa-cart-plus" id="m-cart-plus"> 0</i>
                    </div>
                </div>

                <div class="item-container">
                    <div class="category-header" id="category-header">
                    </div>

                    <div id="food-items" class="food-items">
                        <div id="biryani" class="m-biryani">
                            <p id="category-name">Biryani</p>
                        </div>
                        <div id="chicken" class="m-chicken">
                            <p id="category-name">Chicken Delicious</p>
                        </div>
                        <div id="paneer" class="m-paneer">
                            <p id="category-name">Paneer Mania</p>
                        </div>
                        <div id="vegetable" class="m-vegetable">
                            <p id="category-name">Pure Veg Dishes</p>
                        </div>
                        <div id="chinese" class="m-chinese">
                            <p id="category-name">Chinese Corner</p>
                        </div>
                        <div id="south-indian" class="m-south-indian">
                            <p id="category-name">South Indian</p>
                        </div>
                    </div>
                </div>

                <div class="mobile-footer">
                    <p>Home</p>
                    <p>Cart</p>
                    <p>offers</p>
                    <p>orders</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;