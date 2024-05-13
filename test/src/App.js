import Header from "./layout/Header";
import Main from "./component/Main";
import CartList from "./component/CartList";
import "./css/styles.css";
import "./assets/js/color-modes";
import "./assets/dist/css/bootstrap.min.css";
import './assets/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" exact element={ <Main/>}/>
      <Route path="/shop_main" element={ <Main/>}/>
      <Route path="/cart_list" element={ <CartList/>}/>
    </Routes>
    </>
  );
}
export default App;
