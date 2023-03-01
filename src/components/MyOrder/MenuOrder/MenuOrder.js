import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderPenddingByUser,
  getOrderShippingByUser,
} from "../../../actions/OrderAction";

function MenuOrder(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  //console.log(location)

  const { userInfo } = useSelector((state) => state.userSignin);
  const { myOrders } = useSelector((state) => state.orderByUser);
  const { myOrdersPendding } = useSelector((state) => state.orderByUser);
  const { myOrdersShipping } = useSelector((state) => state.orderByUser);
  const { myOrdersCancel } = useSelector((state) => state.orderByUser);
  
  useEffect(() => {
    const getAllOrderPenddingAndShippingByUser = async () => {
      await dispatch(getOrderPenddingByUser(userInfo._id));
      dispatch(getOrderShippingByUser(userInfo._id));
    };

    getAllOrderPenddingAndShippingByUser();
  }, [dispatch]);

  return (
    <div className="myorder-menu">
      <div className={location.pathname === '/myOrder' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to={'/myOrder' }>Tất cả</Link>
        {myOrders ? (
          <div className="myorder-menu-item-newShipping">
            {myOrders.length}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={location.pathname === '/myOrder/pendding' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to="/myOrder/pendding">Chờ xử lí</Link>
        {myOrdersPendding ? (
          <div className="myorder-menu-item-newPendding">
            {myOrdersPendding.length}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={location.pathname === '/myOrder/shipping' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to="/myOrder/shipping">Đang giao</Link>
        {myOrdersShipping ? (
          <div className="myorder-menu-item-newShipping">
            {myOrdersShipping.length}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={location.pathname === '/myOrder/paid' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to="/myOrder/paid">Đã giao</Link>
      </div>
      <div className={location.pathname === '/myOrder/Cancle' ? 'myorder-menu-item active' : 'myorder-menu-item'}>
        <Link to={'/myOrder/Cancel' }>Đã hủy</Link>
        {myOrdersCancel ? (
          <div className="myorder-menu-item-newShipping">
            {myOrdersCancel.length}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MenuOrder;
