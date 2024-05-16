import React, { useState } from "react";
import "../css/cartlist.css";
import QuantityCounter from "./QuantityCounter";
import CustomCheckbox from "./CustomCheckbox";

function CartList() {
  const [isCheckedAll, setIsCheckedAll] = useState(false); // 전체 체크 여부 상태
  const [isCheckedItems, setIsCheckedItems] = useState([]); // 개별 체크 상태 배열
  const products = [
    /* 부모 컴포넌트에서 전달된 상품 목록 */
  ];

  // 전체 체크 여부 변경 함수
  const handleCheckAll = (isChecked) => {
    setIsCheckedAll(isChecked);
    setIsCheckedItems(Array(10).fill(isChecked)); // 개별 체크 상태를 전체 체크 여부로 초기화
  };

  // 개별 체크 상태 변경 함수
  const handleCheckItem = (index, isChecked) => {
    const updatedCheckedItems = [...isCheckedItems];
    updatedCheckedItems[index] = isChecked;
    setIsCheckedItems(updatedCheckedItems);

    // 모든 체크박스가 체크되었는지 확인
    const allChecked = updatedCheckedItems.every((item) => item === true);
    setIsCheckedAll(allChecked);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="productBox">
          <h2>장바구니</h2>
          <table className=" table1">
            <tr>
              <th className="checkbox-th">
                <CustomCheckbox
                  checked={isCheckedAll}
                  onChange={handleCheckAll}
                />{" "}
                {/* 전체 체크박스 */}
              </th>
              <th>이미지</th>
              <th>상품정보</th>
              {/* <th>수량</th> */}
              <th>가격</th>
              <th>선택</th>
            </tr>
            <tbody className="Tbody tbody1">
              {/* procut 아이템 1개 시작 */}
              {/*  products.map((product, index) 아이템 뿌리게 되면 이걸로 바꾸기! */}
              {Array(5)
                .fill()
                .map((_, index) => (
                  <tr className="product-tr">
                      {/* 개별 체크박스 시작*/}
                    <td className="checkbox-td">
                      <CustomCheckbox
                        checked={isCheckedItems[index]}
                        onChange={(isChecked) =>
                          handleCheckItem(index, isChecked)
                        }
                      />
                    </td>
                      {/* 개별 체크박스 끝*/}
                    <td>
                      <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                    </td>
                    <td>
                      <span style={{display:'block'}}>브랜치얼스 23종 도시락 1일 2식</span>
                      <span style={{display:'block'}}>&#91;옵션 : 1주&#93;</span>
                    
                    </td>
                    {/* <td>
                      <QuantityCounter />
                    </td> */}
                    <td>595,000원</td>
                    <td>
                      <button className="buttTxt">삭제</button>
                    </td>
                  </tr>
                ))}
              {/* procut 아이템 1개 끝 */}
            </tbody>
            {/* 하단 버튼 */}
            <tfoot>
              <tr>
                <td colSpan="6" className="bottomButtonsContainer">
                  <div style={{ textAlign: "left" }}>
                    <button className="bottomBtn">선택삭제</button>
                    <button
                      className="bottomBtn"
                      style={{ float: "right", marginRight: "60px" }}
                    >
                      쇼핑 계속하기
                    </button>
                    <button
                      className="bottomBtn"
                      style={{ float: "right", marginRight: "20px" }}
                    >
                      주문 하기
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
            {/* 하단 버튼 */}
          </table>
        </div>
      </div>
    </>
  );
}

export default CartList;
