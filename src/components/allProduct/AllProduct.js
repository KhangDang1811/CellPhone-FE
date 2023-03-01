import React, { useEffect} from 'react';
import ListProduct from './ListProduct'
import './Sale.css'
import {handlePercentDiscount} from '../../untils/index'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct} from '../../actions/ProductAction';

import FilterProduct from './FilterProduct';
import SortByPrice from './SortByPrice/SortByPrice';
import LoadingBox from '../Loading/LoadingBox';

function AllProduct(props) {
    const dispatch = useDispatch()
    
    const product = useSelector(state => state?.allProduct?.product)
    console.log('product',product);
    useEffect(() => {
        dispatch(getAllProduct())

        // return () => {
        //     return []
        // }
    }, [dispatch])

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <FilterProduct></FilterProduct>
                <SortByPrice></SortByPrice>
                { product && product.length > 0 ? 
                    (
                        <>
                        <h1>Có {product.length} sản phẩm</h1>
                    <ListProduct HotSaleProducts={handlePercentDiscount(product)}></ListProduct>
                    </>
                   ) :  (<span>Không có sản phẩm</span>)
                }
            </div>
        </section>

    );
}


export default AllProduct;