import React from 'react';
import Product from './Product'

function ListProduct(props) {
    const {HotSaleProducts} = props;

    return (
        <div className="hotsale-listproduct">
            {
                HotSaleProducts.map((product, index) => (
                    <Product product={product} index={index}></Product>
                ))
            }
        </div>
    );
}

export default ListProduct;