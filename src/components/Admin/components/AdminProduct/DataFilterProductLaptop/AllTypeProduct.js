import React, { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import {  deleteTypeProductLaptop, getAllTypeProductLaptop } from "../../../../../actions/ListTypeProductAction";

export default function AllTypeProduct() {
  const dispatch = useDispatch();
  const { List } = useSelector((state) => state.allTypeProduct);
  //console.log(List);

  useEffect(() => {
    dispatch(getAllTypeProductLaptop());
  }, [dispatch]);

  const handleRemoveItem = async (item) => {
    await dispatch(deleteTypeProductLaptop(item))
    dispatch(getAllTypeProductLaptop())
  }

  const MenuFirmProduct = (firmItem) => (
    <div className="filter-menu-firm-item">
      <img src={firmItem.img}></img>
      <div className="filter-menu-firm-item-delete" onClick={() => handleRemoveItem(firmItem)}>
        <span>
          <CloseOutlined></CloseOutlined>
        </span>
      </div>
    </div>
  );


  return (
    <div>
      <div className="filter-menu-firm">
        {List ? List.map((item) => MenuFirmProduct(item)) : ""}
      </div>
    </div>
  );
}
