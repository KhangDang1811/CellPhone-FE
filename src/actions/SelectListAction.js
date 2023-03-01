import axios from "axios";
import { BaseURL } from "../untils";

export const getAllSelectList = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BaseURL}/selectList`)
        dispatch({type: 'GET_ALL_SELECT_LIST', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BaseURL}/selectList/create`, item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`${BaseURL}/selectList/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BaseURL}/selectList/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${BaseURL}/selectList/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}

//Laptop
export const getAllSelectListLap = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BaseURL}/selectListLap`)
        dispatch({type: 'GET_ALL_SELECT_LIST', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const CreateSelectListItemLap = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${BaseURL}/selectListLap/create`, item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const UpdateSelectListItemLap = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`${BaseURL}/selectListLap/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getSelectListItemByIdLap = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${BaseURL}/selectListLap/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSelectListItemByIdLap = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`${BaseURL}/selectListLap/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
        console.log(error)
    }
}