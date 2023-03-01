import axios from 'axios'
import { BaseURL } from '../untils'

export const getAllTypeProduct = () => async (dispatch) => {
    try {
        // const {data} = await axios.get('http://localhost:5000/typeList')
        const {data} = await axios.get(`${BaseURL}/typeList`)
        dispatch({type: 'GET_ALL_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const CreateNewTypeProduct = (type) => async (dispatch) => {
   // console.log(type.get('name'), type.get('img'))
    try {
        //const {data} = await axios.post(`http://localhost:5000/typeList/create`, type)
        const {data} = await axios.post(`${BaseURL}/typeList/create`, type)
        dispatch({type: 'CREATE_NEW_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTypeProduct = (type) => async (dispatch) => {
    console.log(type._id)
    try {
        // const {data} = await axios.delete(`http://localhost:5000/typeList/delete/${type._id}`)
        const {data} = await axios.delete(`${BaseURL}/typeList/delete/${type._id}`)
        dispatch({type: 'DELETE_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

//LapTop
export const getAllTypeProductLaptop = () => async (dispatch) => {
    try {
        // const {data} = await axios.get('http://localhost:5000/typeList')
        const {data} = await axios.get(`${BaseURL}/typeListLap`)
        dispatch({type: 'GET_ALL_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const CreateNewTypeProductLaptop = (type) => async (dispatch) => {
   // console.log(type.get('name'), type.get('img'))
    try {
        //const {data} = await axios.post(`http://localhost:5000/typeList/create`, type)
        const {data} = await axios.post(`${BaseURL}/typeListLap/create`, type)
        dispatch({type: 'CREATE_NEW_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTypeProductLaptop = (type) => async (dispatch) => {
    console.log(type._id)
    try {
        // const {data} = await axios.delete(`http://localhost:5000/typeList/delete/${type._id}`)
        const {data} = await axios.delete(`${BaseURL}/typeListLap/delete/${type._id}`)
        dispatch({type: 'DELETE_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.log(error)
    }
}