import React, { useEffect, useState } from "react";
import "./FilterMenu.css";
import { Dropdown } from "antd";
import { DownOutlined} from "@ant-design/icons";
import {
  filterProductByRandomField,
} from "../../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { getAllSelectList } from "../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../actions/ListTypeProductAction";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const [dataFilter, setDataFilter] = useState({});
  //console.log("dataFilter", dataFilter);
  const filterMenuList = useSelector(state => state.selectList.List)
  //console.log('list fillter',filterMenuList);
  const { List} = useSelector(state => state.allTypeProduct)
 //console.log("list",List)

  useEffect(() => {
    dispatch(filterProductByRandomField(dataFilter));
  }, [dataFilter]);

  useEffect(() => {
    dispatch(getAllSelectList())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllTypeProduct())
  }, [dispatch])

  const filterMenuItemAntd = (item) => (
    <div className="filter-menu-item">
      <div
        className={
          dataFilter[`${item.property}`]
            ? `filter-menu-item-name active`
            : `filter-menu-item-name`
        }
      >
        <Dropdown overlay={menuShow(item, item.options)} trigger={["click"]}>
          <span className="ant-dropdown-link">
            {dataFilter[`${item.property}`]
              ? dataFilter[`${item.property}`]
              : item.name}
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  );

  const menuShow = (menuItem, arrItem) => (
    <div className="menu-show">
      <div className="menu-show-list"  id="0">
        {arrItem.map((item,index) => (
          <div
          value={item}
           
            className={`menu-show-item`}
            onClick={() => handleClickMenuShow(item, menuItem)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="menu-show-btn">
        <button
          className="cancel"
          onClick={() => CancelChooseMenuShow(menuItem, arrItem)}
        >
          Bỏ Chọn
        </button>
      </div>
    </div>
  );

  const handleClickMenuShow = (item, menuItem) => {
    const data = {};
    data[`${menuItem.property}`] = item;

    setDataFilter({ ...dataFilter, ...data });
  };

  const CancelChooseMenuShow = (menuItem, arrItem) => {
    delete dataFilter[`${menuItem.property}`];
    const newDataFilter = { ...dataFilter };
    setDataFilter(newDataFilter);
  };

  const MenuFirmProduct = (item) => (
    <div
      className={
        dataFilter[`type`] === item.name
          ? `filter-menu-firm-item active`
          : "filter-menu-firm-item"
      }
      onClick={() => HandleFilterProductByType(item.name)}
    >
      <img src={item.img}></img>
    </div>
  );

  const HandleFilterProductByType = async (name) => {
    if (dataFilter.type === name) {
      delete dataFilter[`type`];
      const newDataFilter = { ...dataFilter };
      setDataFilter({ ...newDataFilter });
    } else {
      setDataFilter({ ...dataFilter, type: name });
    }
  };

  return (
    <div>
      {
        List ? (  <h3>Có {List?.length} dòng điện thoại</h3>):""
      }
      <div className="filter-menu-firm">
      
        {
          List ? (List.map((item) => MenuFirmProduct(item))) : ''
        }
      </div>
      {/* <div className="title">
        <p>Chọn theo tiêu chí</p>
      </div> */}
        <h3>Có {filterMenuList?.length} tiêu chí lọc điện thoại</h3>
      <div className="filter-menu">
        {
          filterMenuList && filterMenuList.length > 0 ? (filterMenuList.map((item) => filterMenuItemAntd(item))) : ''
        }
      </div>
    </div>
  );
}
