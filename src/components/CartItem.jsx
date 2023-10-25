import './ProductPage.css';

function CartItem({url, name, price}){

    return(
        <div id="item-card">
            <div id="card-top">
                {/* <i class="fa fa-heart-o add-to-cart"><AiOutlineHeart/></i> */}
            </div>
            <img src={url} alt='product-img'/>
            <p id="item-name">{name}</p>
            <p id="item-price">Price :  {price}</p>
        </div>
    )
}
export default CartItem;