import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser, getOrderCancelByUser } from "../../../../actions/OrderAction";
import {formatPrice, timeSince} from '../../../../untils/index'

import "./CancleOrder.css";  

const orderItem = (item) => (
  <div className="all-myorder-item">
    <div className="all-myorder-item-img">
      <img src={item.image}></img>
    </div>
    <div className="all-myorder-item-name">
      <p>{item.name}</p>
      <span>x{item.qty}</span>
    </div>
    <div className="all-myorder-item-price">{formatPrice(item.salePrice)}</div>
  </div>
);

export const orderParent = (item) => (
  <div className="all-myorder-parent-item">
    <div className="all-myorder-list">
      {item.orderItems.map((item) => orderItem(item))}
      <span style={{marginRight:"49rem"}}>{timeSince(new Date(item.createdAt).getTime()/1000)} trước</span>
    </div>

    <div className="all-myorder-item-totalprice">
      <div>
        <span>Tổng số tiền : </span> <strong>{formatPrice(item.totalPrice)}đ</strong>
      </div>
    </div>
  </div>
);

function CancelOrders(props) {
  const dispatch = useDispatch();
  const { myOrdersCancel } = useSelector((state) => state.orderByUser);
  console.log(myOrdersCancel);
  const { userInfo } = useSelector((state) => state.userSignin);
  useEffect(() => {
    dispatch(getOrderCancelByUser(userInfo._id));
  }, []);

  
  return (
    <div className="all-myorder">
       {myOrdersCancel && myOrdersCancel.length > 0 ? myOrdersCancel.map((item) => orderParent(item)) : "Bạn không có đơn hàng nào"}
        
    </div>
  );
}

export default CancelOrders;
