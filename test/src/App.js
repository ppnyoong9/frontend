import Header from "./layout/Header";
import Main from "./component/Main";
import CartList from "./component/CartList";
import Order from "./component/Order";
import ShipPopup from "./component/ShipPopup";
import "./css/styles.css";
import "./assets/js/color-modes";
import "./assets/dist/css/bootstrap.min.css";
import './assets/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from "react-router-dom";
import OrderList from "./component/OrderList.js";
import OrderDetail from "./component/OrderDetail.js";
import CouponPopup from "./component/CouponPopup.js";
import ShipForm from "./component/ShipForm.js";

function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" exact element={ <Main/>}/>
      <Route path="/shop_main" element={ <Main/>}/>
      <Route path="/cart_list" element={ <CartList/>}/>
      <Route path="/order" element={ <Order/>}/>
      <Route path="/order_list" element={ <OrderList/>}/>
      <Route path="/ship_popup" element={ <ShipPopup/>}/>
      <Route path="/ship_form" element={ <ShipForm/>}/>
      <Route path="/coupon_popup" element={ <CouponPopup/>}/>
      <Route path="/order_detail" element={ <OrderDetail/>}/>
    </Routes>
    </>
  );
}
export default App;
