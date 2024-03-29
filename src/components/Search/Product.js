import React from 'react';
import {formatPrice} from '../../untils'


function Product(props) {
    const { product, index } = props;
    function AddToCart(product) {
        // const action = AddProduct(product);
        // dispatch(action);
    }

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p id={index} className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </a>
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            {
                product.amount == 0 ? (<div className="buy">
                    <a href="" > Hết Hàng</a>
                </div>) : (
                     <div className="buy">
                     <a href="/cart" onClick={() => AddToCart(product)}> Mua Ngay</a>
                 </div>)
            }
           
        </div>
    );
}

export default Product;