import React from "react";
import "../css/cartlist.css";
import QuantityCounter from "./QuantityCounter";
import CustomCheckbox from "./CustomCheckbox";
function CartList() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="MenuBox">
          <h2>장바구니</h2>
          <table className="Table table1">
            <tr>
              <th>
              <CustomCheckbox/>
              </th>
              <th>이미지</th>
              <th>상품정보</th>
              <th>수량</th>
              <th>상품구매금액</th>
              <th>선택</th>
            </tr>
            <tbody className="Tbody tbody1">
              <tr>
                <td>
                <CustomCheckbox/>
                </td>
                <td>
                  <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                </td>
                <td></td>
                <td>
                  <QuantityCounter />
                </td>
                <td></td>
                <td>
                  <button className="buttTxt"> </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CartList;
