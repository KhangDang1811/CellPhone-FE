import axios from "axios";
import actions from './product.action'
import {BASE_URL} from '../constants/UserConstant'
import { axiosClient } from "../services/config.services";
import {BaseURL} from '../untils/index';

export const filterProductByType = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BaseURL}/products/${name}`);
    dispatch({ type: "FILTER_PRODUCT_BY_TYPE", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const filterProductByRandomField = (infoProduct) => async (dispatch) => {
  try {
    //console.log("property",infoProduct)
    const { data } = await axios.post(`${BaseURL}/products/filter/random`, infoProduct);
    dispatch({ type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: data });
  } catch (error) {
    console.log(error);
  }

  // dispatch({ type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: infoProduct });
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BaseURL}/products/`);
    dispatch({ type: "GET_ALL_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
  }
};

export const getAllProductLaptop = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BaseURL}/products/macbook`);
    dispatch({ type: "GET_ALL_PRODUCT_LAPTOP", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCT_FAIL_LAPTOP", payload: error.message });
  }
};

export const ascendingProduct = (products) => async (dispatch, getState) => {
  dispatch({ type: "ASCENDING_PRODUCT"});
};

export const descendingProduct = (products) => async (dispatch, getState) => {
  dispatch({ type: "DESCENDING_PRODUCT"});
};

export const filterProduct = (name) => async (dispatch, getState) => {
  dispatch({ type: "FILTER_PRODUCT", payload: name });
};

export const filterProductByPrice =
  (startPrice, endPrice) => async (dispatch, getState) => {
    dispatch({
      type: actions.FILTER_PRODUCT_BY_PRICE,
      payload: { startPrice, endPrice },
    });
  };

export const editCurrentPage = (page) => async (dispatch) => {
  dispatch({ type: "EDIT_CURRENT_PAGE", payload: page });
}

export const paginationProduct = (page) => async (dispatch) => {
  try {
    const data = await axiosClient.get(
      `/products/pagination/${page}`
    );
    dispatch({ type: "PAGINATION_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const getproductById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BaseURL}/products/detail/${id}`
    );
    dispatch({ type: "GET_PRODUCT_BY_ID", payload: data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCT_BY_ID_FAIL", payload: error.message });
  }
};

export const removeProductById = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT_BY_ID"});
};

export const saveProduct = (product) => async (dispatch, getState) => {
  
   try {
  //   const {
  //     userSignin: { userInfo },
  //   } = getState();
  //   if (!product.get('_id')) {
  //     console.log("create");
      const { data } = await axios.post(
        "${BaseURL}/products/create",
        product
        ,
        // {
        //   headers: {
        //     Authorization: `Bearer ${userInfo.token}`,
        //   },
        // }
      );
      dispatch({ type: "SAVE_PRODUCT", payload: data });
      // document.location.href = '/admin/product';
    // } else {
    //   console.log("update");
    //   const { data } = await axios.put(
    //     `${BaseURL}/products/update`,
    //     product,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${userInfo.token}`,
    //       },
    //     }
    //   );
    //   dispatch({ type: "SAVE_PRODUCT", payload: data });
    //   // document.location.href = '/admin/product';
    // }
  } catch (error) {
    dispatch({ type: "SAVE_PRODUCT_FAIL", payload: error.message });
  }
};

export const UpdateProduct = (productId,postData) => async (dispatch, getState) => {
  try {
     const { data } = await axios.put(
      `${BaseURL}/products/update/${productId}`,
      postData
       ,
       // {
       //   headers: {
       //     Authorization: `Bearer ${userInfo.token}`,
       //   },
       // }
     );
    
     dispatch({ type: "UPDATE_PRODUCT", payload: data });
 } catch (error) {
   dispatch({ type: "UPDATE_PRODUCT_FAIL", payload: error.message });
 }
};

export const UpdateProductDel = (postData) => async (dispatch, getState) => {
  try {
     const { data } = await axios.put(
      `${BaseURL}/products/updateDel`,
      postData
       ,
       // {
       //   headers: {
       //     Authorization: `Bearer ${userInfo.token}`,
       //   },
       // }
     );
    
     dispatch({ type: "UPDATE_PRODUCT_DELETE", payload: data });
 } catch (error) {
   dispatch({ type: "UPDATE_PRODUCT_DELETE_FAIL", payload: error.message });
 }
};

export const UpdateAmountProduct = (postData) => async (dispatch, getState) => {
  try {
     const { data } = await axios.put(
      `${BaseURL}/products/amount`,
      postData
       ,
       // {
       //   headers: {
       //     Authorization: `Bearer ${userInfo.token}`,
       //   },
       // }
     );
     dispatch({ type: "UPDATE_PRODUCT_AMOUNT", payload: data });
 } catch (error) {
   dispatch({ type: "UPDATE_PRODUCT_AMOUNT_FAIL", payload: error.message });
 }
};

export const LikeComment = (commentId,type) => async (dispatch, getState) => {
  try {
     const { data } = await axios.put(
      `${BaseURL}/products/${commentId}/changelikes`,
      type
       ,
     );
     dispatch({ type: "LIKECOMMENT_PRODUCT", payload: data });
 } catch (error) {
   dispatch({ type: "LIKECOMMENT_PRODUCT_FAIL", payload: error.message });
 }
};

export const DeleteProduct = (productId) => async (dispatch, getState) => {
  console.log(productId)
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.delete(
      `${BaseURL}/products/delete/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    console.log(data)
    dispatch({ type: "DELETE_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_PRODUCT_FAIL", payload: error.message });
  }
};

export const searchProduct = (name) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${BaseURL}/products/search/product?name=${name}`
    );
    dispatch({ type: "SEARCH_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "SEARCH_PRODUCT_FAIL", payload: error.message });
  }
};

export const reviewProduct = (id, review) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `${BaseURL}/products/rate/${id}`,
      review
    );
    dispatch({ type: "REVIEW_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "REVIEW_PRODUCT_FAIL", payload: error });
  }
};

export const commentProduct = (id, comment) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `${BaseURL}/products/comment/${id}`,
      comment
    );
    dispatch({ type: "COMMENT_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "COMMENT_PRODUCT_FAIL", payload: error });
  }
};

export const repCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `${BaseURL}/products/rep/comment/${id}`,
        comment
      );
      dispatch({ type: "REP_COMMENT_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "REP_COMMENT_PRODUCT_FAIL", payload: error });
    }
  };

  export const pinCommentProduct = (id, comment) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        `${BaseURL}/products/pin/comment/${id}`, comment
      );
      dispatch({ type: "PIN_COMMENT_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "PIN_COMMENT_PRODUCT_FAIL", payload: error });
    }
  };

export const BlogProduct = (id, blog) => async (dispatch, getState) => {
  console.log(blog)
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      `${BaseURL}/products/blog/${id}`,
      blog,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "BLOG_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "BLOG_PRODUCT_FAIL", payload: error });
  }
};
