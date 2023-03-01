import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {BaseURL, handlePercentDiscount} from '../../../untils/index'
import { useDispatch } from 'react-redux';


function Xiaomi(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('macbook');
    const [hotXiaomi, setHotXiaomi] = useState([])
    
    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`${BaseURL}/products/${name}`)
                setHotXiaomi(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>{name}</h2>
                {
                   hotXiaomi ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotXiaomi)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Xiaomi;