import React from 'react';
import Product from './Product'

function ListProduct(props) {
    const {HotSaleProducts} = props;

    return (
        <div className="hotsale-listproduct">
            <h1>Có {HotSaleProducts.length} sản phẩm</h1>
            {
                HotSaleProducts.map((product, index) => (

                    <Product product={product} index={index}></Product>
                ))
            }
        </div>
    );
}

export default ListProduct;