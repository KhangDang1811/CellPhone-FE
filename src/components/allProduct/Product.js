import React from 'react';
import {formatPrice} from '../../untils/index'

import { useDispatch, useSelector } from 'react-redux';
import {AddToCart} from '../../actions/CartAction'
import {Link} from 'react-router-dom'
import { message} from 'antd';

function Product(props) {
    const { product , index } = props;

    // function AddToCart(product) {
    //     // const action = AddProduct(product);
    //     // dispatch(action);
    // }

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const success = () => {
        message.success({
            id:'SuccessId',
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
          });
      };

      const success1 = () => {
        message.warn({
            id:'ErrorId',
            content: 'Sản phẩm đã có trong giỏ hàng',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0'
            },
          });
      };
    const  AddProductToCart = async (product) => {
        const action = AddToCart(product);
        //Items already in the cart are not added to the cart again 
        if(cartItems.find(item => item._id === product._id)){
            success1();
        }
        else{
        await dispatch(action);
        success()
        }
        
    }

    return (
        <div className="hotsale-listproduct-product">
            <a href={"/detail/" + product._id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span id={index} className="price1">{formatPrice(product.salePrice)}</span>
                    <span className="price2">{formatPrice(product.price)}</span>
                </div>
            </a>
            {/* <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div> */}
              {
                product.percentDiscount > 30 ?(
                    <a className="discount-url">
                <p  id={"sale"+index} value={product.percentDiscount}>{product.percentDiscount}%</p>
            </a>
                ):(
                    <div className="">
                {/* <p>{product.percentDiscount}%</p> */}
            </div>
                )
              }
            {
                product.amount == 0 ? (<div className="buy">
                    <a href="" > Hết Hàng</a>
                </div>) : (
                <div className="buy">
                {/* <a href="/cart" onClick={() => AddToCart(product)}> Mua Ngay</a> */}
                <button className="buy_"  onClick={(e) => {AddProductToCart(product)}}> Mua Ngay</button>
            </div>)
            }
        </div>
    );
}

export default Product;