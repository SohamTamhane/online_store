import { useContext } from 'react';
import { Context } from '../Context';
import './ProductPage.css';
import { AiOutlineHeart } from 'react-icons/ai';

function Product({url, name, price}){

    const {cart, setCart} = useContext(Context);

    function addToCartFunc(){
        setCart([...cart, {name: name, url: url, price: price}])
    }

    return(
        <div id="item-card">
            <div id="card-top">
                {/* <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i> */}
            </div>
            <img src={url} alt='product-img'/>
            <p id="item-name">{name}</p>
            <p id="item-price">Price :  {price}</p>
            <div className='add-to-cart-div'>
                <button onClick={addToCartFunc} className='add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;