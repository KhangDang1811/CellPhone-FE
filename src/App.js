import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import SearchPage from './pages/SearchPage';
import AdminPage from './pages/AdminPage';
import ResetScroll from './components/ResetScroll/ResetScroll';
import MyOrderPage from './pages/MyOrderPage';
import ChatPage from './pages/ChatPage';
import PaymentPage from './pages/PaymentPage';
import OrderSuccessPage from './pages/OrderSuccessPage'
import LoadingBox from './components/Loading/LoadingBox';
import ResetPassPages from './pages/ResetPassPage';
import EmailForgot from './components/ForgotPass/EmailForgot';
import { useSelector } from 'react-redux';
import NotFound from './components/Admin/components/AdminOrder/AdminOrderAll/NotFound';
import ProductLaptop from './pages/ProductLaptop';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;
  return (
    <div className="App">
  
      <Router>
        
        <ResetScroll></ResetScroll>

        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>

        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <SignupPage></SignupPage>
        </Route>

        <Route path="/forgotpassword">
          <EmailForgot/>
        </Route>

        <Route path="/resetpassword/:token">
          <ResetPassPages/>
        </Route>

        <Route path="/product/Phone">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/product/Laptop">
          <ProductLaptop/>
        </Route>
        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route>

        <Route path='/cart'>
          <CartPage></CartPage>
        </Route>

        <Route path='/order'>
          <OrderPage></OrderPage>
        </Route>
        <Route path='/orderSuccess'>
          <OrderSuccessPage></OrderSuccessPage>
        </Route>
        <Route path='/payment'>
          <PaymentPage></PaymentPage>
        </Route>
        <Route path='/MyOrder'>
          <MyOrderPage></MyOrderPage>
        </Route>

        <Route path='/search'>
          <SearchPage></SearchPage>
        </Route>

        <Route path='/chat'>
          <ChatPage></ChatPage>
        </Route>

        <Route path='/admin'>
         {
           userInfo?.isAdmin ? <AdminPage></AdminPage> : <NotFound/>
         }
        </Route>

        <Route path='/loading'>
         <LoadingBox/>
        </Route>


      </Router>
    </div>
  );
}

export default App;
