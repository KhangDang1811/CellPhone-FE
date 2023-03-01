import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { SignoutUser,SignOutGoogle } from "../../actions/UserAction";
import { useHistory } from "react-router";
import { searchProduct } from "../../actions/ProductAction";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

import {
  DownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { async } from "@firebase/util";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  

  const [showAccount, setShowAccount] = useState(false);
  const [showAccount2, setShowAccount2] = useState(false);
  const [showAccount3, setShowAccount3] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;
   //console.log("info",userInfo);
  const [search, setSearch] = useState("");
 
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount = cartItems.reduce((a, b) => a + b.qty, 0);

  const [menu, setMenu] = useState(true);

  const handleSignout = () => {
    //console.log("dang xat");
    dispatch(SignoutUser());
  };

 
  const [state, setstate] = useState(false) 
  
  const SearchProduct = async (e) => {
    // e.preventDefault()
    // await history.push("/search");
    // dispatch(searchProduct(search));
    // setSearch('')
   
    if(e.target.value.length != 0){
      dispatch(searchProduct(search));
      setstate(true)  
    }else{
      setstate(false)
    }   
  };

  const SearchProduct1 = async (e) => {
    e.preventDefault()
    await history.push("/search");
    dispatch(searchProduct(search));
    setSearch('')
    setstate(false)
  };

  const searchProduct1 = useSelector(state => state.searchProduct)
  const {products} = searchProduct1;

  const Hidehandler = () => {
    setShowAccount(false);
    setShowAccount2(false);
    setstate(false)
  };
  return (
    <div className="header">
      <OutsideClickHandler onOutsideClick={() => Hidehandler()}>
       
      <section id="menu">
        <div className="logo">
          <span>
            <Link to="/"> CellPhones</Link>
          </span>
        </div>
        <div className="search">
          {/* <form onSubmit={(e) => SearchProduct(e)}> */}
          <form onChange={(e) => SearchProduct(e)}>
            <input
              type="text"
              name="search"
              placeholder="Bạn cần tìm gì ..."
              defaultValue={setSearch}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <SearchOutlined onClick={(e) => SearchProduct1(e)}></SearchOutlined>
           {
            state == true && products && products.length > 0 ? (<div className="search-image">
                {
                  products.map((product, index) => {
                    return (
                      <Link to={"/detail/" + product._id} key={index}
                        onClick={() => setstate(false)}
                      >
                        <div >
                          <div className="flex">
                          <img className="test" src={product.image}></img>
                          <p className="test-name">{product.name}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                  )
                }
                </div>) : ("")
           }
            {/* <button type="submit" onClick={(e) => SearchProduct(e)}>Search</button> */}
          </form>
        </div>
        <ul className="menu-list" id={menu ? "hidden" : ""}>
          <li className="active">
            <Link to="/" className="hover"> Trang Chủ </Link>
          </li>
          <li onClick={() => setShowAccount3(!showAccount3)}>
            {/* <Link to="/product"> Sản Phẩm </Link> */}
            <Link > Sản Phẩm </Link>
            <DownOutlined style={{ fontSize: "14px" ,color:"white"}} />
         
          {showAccount3 ? (
                <div className="menu-drop">
                  <Link to="/product/Phone">Phone</Link>
                  <Link to="/product/Laptop">Laptop</Link>
                  <Link to="/product/Phone">Watch</Link>
                </div>
              ) : ("")
              
          }
           </li>
          {userInfo ? (
            <li onClick={() => setShowAccount2(!showAccount2)}>
              {
                userInfo?.reloadUserInfo?.photoUrl  ?
                ( <img className="profile-picture" src={userInfo.reloadUserInfo.photoUrl }/>):("")
              }
                {
                userInfo?.profilepicture  ?
                ( <img className="profile-picture" src={userInfo.profilepicture }/>):("")
              }
             
              <Link id="name">
                {userInfo.name || userInfo.displayName}
                
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>
              {showAccount2 ? (
                <div className="menu-drop">
                  {userInfo.isAdmin ? <Link to="/admin">Admin</Link> : ""}
                  <Link to="/myOrder">Đơn hàng</Link>
                  <Link onClick={() => handleSignout()}>Đăng xuất</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          ) : (
            <li onClick={() => setShowAccount(!showAccount)}>
              <Link>
                Tài khoản
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>

              {showAccount ? (
                <div className="menu-drop">
                  <Link to="register">Đăng kí</Link>
                  <Link to="login">Đăng nhập</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          )}
          <li className="shop-cart">
            <Link to="/cart" className="shop-cart">
              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
              ></ShoppingCartOutlined>
              <span className="count"> {amount} </span>
            </Link>
          </li>
        </ul>
        <div className="bar" onClick={() => setMenu(!menu)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </section>
     
      </OutsideClickHandler>
      </div>
  );
}

export default Header;
