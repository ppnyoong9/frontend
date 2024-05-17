import { Route, Routes } from "react-router-dom";

import "./css/styles.css";
import "./assets/js/color-modes";
import "./assets/dist/css/bootstrap.min.css";
import './assets/dist/js/bootstrap.bundle.min.js';

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Main from "./component/Main";
import CartList from "./component/CartList";
import Order from "./component/Order";
import ShipPopup from "./component/ShipPopup";
import OrderList from "./component/OrderList.js";
import OrderDetail from "./component/OrderDetail.js";
import CouponPopup from "./component/CouponPopup.js";
import ShipForm from "./component/ShipForm.js";
import ShipModifyForm from "./component/ShipModifyForm.js";
import {BCMain} from "./component/BCMain";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import MyPage from "./component/MyPage";
import Product from "./component/Product";
import Modify from "./component/Modify";
import ProductDetail from "./component/ProductDetail";
import ProductInfo from "./component/ProductInfo";
import Review from "./component/Review";
import Guide from "./component/Guide";
import Board from "./component/Board";
import BoardWriteForm from "./component/BoardWriteForm";
import BoardView from "./component/BoardView";
import BoardReply from "./component/BoardReply";
import BoardModify from "./component/BoardModify";
import Password from "./component/Password";

function App() {
  return (
    <>

<Header/>
       {/* 헤더 관련 라우터 */}
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/modify" element={<Modify/>}/>
          <Route path="/password" element={<Password/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}

              {/* 카테고리 관련 라우터 */}
              <Route index element={<><Navigation/><BCMain/></>}/>
              <Route path="/main" element={<><Navigation/><BCMain/></>}/>
              <Route path="/product" element={<><Navigation/><Product/></>}/>
              <Route path="/board" element={<><Navigation/><Board/></>}/>
              <Route path="/board-write-form" element={<><Navigation/><BoardWriteForm/></>}/>
              <Route path="/board-view" element={<><Navigation/><BoardView/></>}/>
              <Route path="/board-reply" element={<><Navigation/><BoardReply/></>}/>
              <Route path="/board-modify" element={<><Navigation/><BoardModify/></>}/>
              <Route path="/product_detail" element={<><Navigation/><ProductDetail/><ProductInfo/></>}/>
              <Route path="/product-info" element={<><Navigation/><ProductDetail/><ProductInfo/></>}/>
              <Route path="/review" element={<><Navigation/><ProductDetail/><Review/></>}/>
              <Route path="/guide" element={<><Navigation/><ProductDetail/><Guide/></>}/>
              <Route path="/cart_list" element={ <><Navigation/><CartList/></>}/>
              <Route path="/order" element={<><Navigation/><Order/></>}/>
              <Route path="/order_list" element={ <><Navigation/><OrderList/></>}/>
              <Route path="/ship_popup" element={ <><Navigation/><ShipPopup/></>}/>
              <Route path="/ship_form" element={ <><Navigation/><ShipForm/></>}/>
              <Route path="/ship_form/3" element={ <><Navigation/><ShipModifyForm/></>}/>
              <Route path="/coupon_popup" element={<><Navigation/><CouponPopup/></>}/>
              <Route path="/order_detail" element={ <><Navigation/><OrderDetail/></>}/>
          </Routes>
  <Footer/>

   
    </>
  );
}
export default App;
