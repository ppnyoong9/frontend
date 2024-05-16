import React from "react";
import "../css/couponpopup.css";

function CouponPopup() {
  return (
    <>
      <h1 className="coupTitle">적용 가능 쿠폰 리스트</h1>
      <div className="coupContent">
        <p>해당 상품에 적용 가능한 쿠폰 입니다. 쿠폰을 선택해주세요.</p>

        <table className="coup-table">
          <thead>
            <tr>
              <th scope="col">쿠폰명</th>
              <th scope="col">적용 가능 수량</th>
              <th scope="col">할인율</th>
              <th scope="col">할인금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">
                <input type="radio" className="coup_radio" name="coup_radio" />
                <span>회원가입 축하 쿠폰</span>
              </td>
              <td>1개</td>
              <td>7%</td>
              <td className="discount_price">6,930원</td>
            </tr>
            <tr>
              <td className="left">
                <input
                  type="radio"
                  className="coup_radio"
                  name="coup_radio"
                />
                <span>헤이 트라이 트라이 먹어보고 말해</span>
              </td>
              <td>1개</td>
              <td>4%</td>
              <td className="discount_price">3,960원</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-group">
          <a href="" onClick="" className="btn btn-delete">
            취소
          </a>
          <a href="" onClick="" className="btn btn-choose">
            쿠폰선택
          </a>
        </div>
      </div>
    </>
  );
}

export default CouponPopup;
