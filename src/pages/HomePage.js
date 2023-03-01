import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header ></Header>
            <Carousel></Carousel>
            <IPhone></IPhone>
            <Samsung></Samsung>
            <Xiaomi></Xiaomi>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            <MessengerCustomerChat
                pageId="107543395149148"
            // pageId="100081295870287"
            //    appId="318112956892249"
               appId="883274849622068"
             />
            {
               userInfo && userInfo.isAdmin === false ? (
                   <>
               <AppChat></AppChat>
               {/* <MessengerCustomerChat
               pageId="107543395149148"
               appId="318112956892249"
             /> */}
             </>
               ) : ""
            }
        </div>
    );
}

export default HomePage;