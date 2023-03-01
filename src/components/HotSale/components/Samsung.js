import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'

import {BaseURL, handlePercentDiscount} from '../../../untils/index'
import { useDispatch} from 'react-redux';


function Samsung(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('AppleWatch');
    const [hotSamsung, setHotSamsung] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`${BaseURL}/products/${name}`)
                setHotSamsung(data)
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
                    hotSamsung ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotSamsung)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Samsung;