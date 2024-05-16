import "../css/cartlist.css";
import "../css/orderlist.css";
import React, { useEffect, useState } from 'react'

function OrderList() {
 

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
              <h2>주문내역</h2>
              {/* 기간 시작 */}
              <div className="order-filter">
                        <div className="order-filter-period">
                            <div className="order-filter-period__tab">
                                <button type="button" className="order-filter-period__tab__button" data-period="1year" >최근 1년</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="1week" >1주일</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="1month" >1개월</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="3month" >3개월</button>
                            </div>
                            <div className="order-filter-period__date">
                                <div className="order-filter-period__input-wrap">
                                    <input type="date" className="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" />
                                </div>
                                <div className="order-filter-period__input-wrap">
                                    <input type="date" className="order-filter-period__input" name="dt_to_input" value="" placeholder="-" />
                                </div>
                            </div>
                        </div>
                </div>
              {/*  기간 끝*/}
              <table className="Table table1">
                <tr>
                  <th>주문번호</th>
                  <th>이미지</th>
                  <th>상품정보</th>
                  <th>주문날짜</th>
                  <th>가격</th>
                  <th>선택</th>
                </tr>
                <tbody className="Tbody tbody1">
                    
                  {/* procut 아이템 1개 시작 */}
                      <tr className="product-tr">
                        <td>023459932</td>
                        <td>
                          <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                        </td>
                        <td>
                          <span style={{display:'block'}}>브랜치얼스 23종 도시락 1일 2식</span>
                          <span style={{display:'block'}}>&#91;옵션 : 1주&#93;</span>
                        </td>
                        <td>2023-05-16</td>
                        <td>595,000원</td>
                        <td>
                          <button className="buttTxt">리뷰작성</button>
                        </td>
                      </tr>
                  {/* procut 아이템 1개 끝 */}
                  {/* procut 아이템 1개 시작 */}
                      <tr className="product-tr">
                        <td>023459932</td>
                        <td>
                          <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                        </td>
                        <td>
                          <span style={{display:'block'}}>브랜치얼스 23종 도시락 1일 2식</span>
                          <span style={{display:'block'}}>&#91;옵션 : 1주&#93;</span>
                        </td>
                        <td>2023-05-16</td>
                        <td>595,000원</td>
                        <td>
                          <button className="buttTxt">리뷰작성</button>
                        </td>
                      </tr>
                  {/* procut 아이템 1개 끝 */}
                </tbody>
                {/* 하단 버튼 */}
                <tfoot>
                  <tr>
                    <td colSpan="6" className="bottomButtonsContainer">
                      <div style={{ textAlign: "left" }}>
                        <button
                          className="bottomBtn"
                          style={{ float: "right"}}
                        >
                          쇼핑 계속하기
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

export default OrderList