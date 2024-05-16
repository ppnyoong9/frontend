import React from "react";
import "../css/cartlist.css";
import "../css/orderdetail.css";

function OrderDetail() {
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
          <h2>주문 상세 내역</h2>
          {/* 주문번호, 주문날짜 시작 */}
          <div className="order-index">
            <div className="order-index-box">
              <span>주문번호</span>
              <span>023459932</span>
            </div>
            <div className="order-index-box">
              <span>주문날짜</span>
              <span>2023-05-16 </span>
            </div>
          </div>
          {/* 주문번호, 주문날짜 끝 */}
          {/* 주문한 상품 시작 */}
          <table className="Table table1 orderTable">
            <tr>
              <th>주문번호</th>
              <th>이미지</th>
              <th>상품정보</th>
              <th>주문날짜</th>
              <th>가격</th>
              <th>선택</th>
            </tr>
            <tbody className="Tbody tbody1">
              <tr className="product-tr">
                <td>023459932</td>
                <td>
                  <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                </td>
                <td>
                  <span style={{ display: "block" }}>
                    브랜치얼스 23종 도시락 1일 2식
                  </span>
                  <span style={{ display: "block" }}>&#91;옵션 : 1주&#93;</span>
                </td>
                <td>2023-05-16</td>
                <td>595,000원</td>
                <td>
                  <button className="buttTxt">리뷰작성</button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 주문한 상품 끝 */}
          {/* 배송지 정보 시작 */}
          <h5 className="shipTitle">배송지 정보</h5>
          <table className=" ship-table">
            <tbody>
              <tr>
                <th scope="row">이름</th>
                <td>김*봄</td>
              </tr>
              <tr>
                <th scope="row">연락처</th>
                <td>010-****-1234 </td>
              </tr>
              <tr>
                <th scope="row">배송지 주소</th>
                <td>(06234) &nbsp; 서울 강남구 테헤란로 124 삼원타워</td>
              </tr>
              <tr>
                <th scope="row">배송 메시지</th>
                <td>문 앞에 놓아주시면 좋겠네용 no bell.. no knock.. plz (˵ •̀ ᴗ - ˵ ) ✧</td>
              </tr>
            </tbody>
          </table>
          {/* 배송지 정보 끝 */}
          {/* 최종 결제 정보 시작 */}
          <h5 className="payTitle">최종 결제 정보</h5>
          <table className=" pay-table">
            <tbody>
              <tr>
                <th scope="row">상품 합계</th>
                <td>595,000원</td>
              </tr>
              <tr>
                <th scope="row">할인 금액</th>
                <td>30,000원 </td>
              </tr>
              <tr>
                <th scope="row" >최종 결제 금액</th>
                <td style={{fontFamily:'GmarketSansTTFBold'}}>592,000원</td>
              </tr>
              <tr>
                <th scope="row">결제수단</th>
                <td>only cash ദ്ദി(⩌ᴗ⩌ )</td>
              </tr>
            </tbody>
          </table>
          {/* 최종 결제 정보 끝 */}
          {/* 하단 버튼 */}
          <button className="bottomBtn" style={{ marginLeft: "auto" }}>
            쇼핑 계속하기
          </button>
          {/* 하단 버튼 */}
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
