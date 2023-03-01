import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  paginationProduct,
} from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

function AdminProduct(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);
  console.log("a",currentPage);
  const  {products}  = useSelector((state) => state.allProduct?.product);
  console.log("b",products);

  useEffect(() => {
    //dispatch(getAllProduct())
    dispatch(paginationProduct(currentPage));
  }, [dispatch, currentPage]);

  const [showAccount, setShowAccount] = useState(false);
  return (
    <div className="admin-product">
      <div className="admin-product-link">
        <Link to="/admin/product/create" className="add-product">
          <AppstoreAddOutlined />
        </Link>
        {/* <Link to="/admin/product/update/info" className="add-product"> */}
        <div className="add-product menu-listadmin">
          <ToolOutlined onClick={() => setShowAccount(!showAccount)}></ToolOutlined>
          {
            showAccount ? (
              <div className="menu-drop-admin">
                <Link to="/admin/product/update/info/Phone">Phone</Link>
                <Link to="/admin/product/update/info/watch">Watch</Link>
                <Link to="/admin/product/update/info/Laptop">Laptop</Link>
                  
              </div>
            ) : ("")
          }
        {/* </Link> */}
        </div>
      </div>

      {products ? (
        <ListProduct listProducts={products}></ListProduct>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default AdminProduct;
