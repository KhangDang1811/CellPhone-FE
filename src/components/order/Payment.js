import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { createOrder, payOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";
import VnPay from "./VnPay";
import { UpdateAmountProduct } from "../../actions/ProductAction";
import { BaseURL } from "../../untils";

export default function Payment() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);
  const [choosePay, setChoosePay] = useState({
    payLater: false,
    payOnline: false,
  });

  const { order } = useSelector((state) => state.orderInfo);

  const payLater = () => {
    setChoosePay({ payOnline: false, payLater: true });
  };

  const payOnline = () => {
    setChoosePay({ payLater: false, payOnline: true });
  };
  
  const postData =  order?.orderItems.map((item) => ({id:item._id,qty:item.qty}))
  
  const [err, setErr] = useState(false);
  const [err1, setErr1] = useState(false);
  const SendOrderPayLater = async () => {
    //If you do not fill in the information completely, please notify the customer to fill in the information completely.
    if (!order) {
      setErr(true)
      // alert("Bạn hãy nhập đầy đủ thông tin");
      return;
    }
    //If the phone number is not 10 characters, please notify the customer to fill in the phone number correctly.
    if (order.shippingAddress.phone.length !== 10) {
      setErr(false)
      setErr1(true)
      //alert("Số điện thoại không hợp lệ");
      return;
    }
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: "payLater",
    };
    await dispatch(createOrder(OrderPaid))
      //Update amount product
    await dispatch(UpdateAmountProduct(postData));
    history.push("/orderSuccess");
  };
  
  const successPaymentHandler = async (paymentResult) => {
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: "payOnline",
      paymentResult: {...paymentResult},
    };
    await dispatch(createOrder(OrderPaid));
    await dispatch(UpdateAmountProduct(postData));
    history.push("/orderSuccess");
  };

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get(
        `${BaseURL}/api/config/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    addPayPalScript();
  
  }, []);
  return (
    <div className="choose-pay">
      <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
      <div className="choose">
        <button
          type="submit"
          className={choosePay.payLater ? "active" : ""}
          onClick={() => payLater()}
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          type="submit"
          className={choosePay.payOnline ? "active" : ""}
          onClick={() => payOnline()}
        >
          Thanh toán Online
        </button>
        
      </div>
     {
      err ?( <div>Bạn hãy nhập đầy đủ thông tin</div>): null
     }
      {
      err1 ?( <div>Số điện thoại không hợp lệ</div>): null
     }
      {choosePay.payLater ? (
        <div className="customer-order">
          <button onClick={SendOrderPayLater}>Đặt Hàng</button>
        </div>
      ) : (
        ""
      )}
      {choosePay.payOnline ? (
        <button type="submit" className="paypal">
          
          <VnPay></VnPay>
          <PayPalButton
            className="paypal-btn"
            style={{ color: "white", marginTop: '1rem' }}
            amount={1}
            onSuccess={successPaymentHandler}
          ></PayPalButton>
        </button>
      ) : (
        ""
      )}
     
    </div>
  );
}
