import "../css/cartlist.css";
import "../css/orderlist.css";
import React, { useEffect, useState } from 'react'

function OrderList() {
  const [period, setPeriod2] = useState("1year");

  const activatePeriodButton = (period) => {
    const activeButtons = document.querySelectorAll(".order-filter-period__tab__button--active");
    activeButtons.forEach((button) => {
      button.classList.remove("order-filter-period__tab__button--active");
    });

    const targetButton = document.querySelector(`.order-filter-period__tab__button[data-period="${period}"]`);
    if (targetButton) {
      targetButton.classList.add("order-filter-period__tab__button--active");
    }
  };

  const activateSearchButton = () => {
    const searchButton = document.querySelector(".order-filter-confirm");
    if (searchButton) {
      searchButton.classList.add("order-filter-confirm--active");
    }
  };

  const setPeriod = (type) => {
    activatePeriodButton(type);

    // Type Setting
    document.querySelector("#orderListSearchForm input[name='period']").value = type;


    // 기간 부분 조건에 따라 Setting
    const now = new Date();
    const year = now.getFullYear();
    const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    const day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
    const now_date = `${year}-${mon}-${day}`;

    if (type !== "") {
      const start_date = setStartDate(type);

    }
  };

  const setStartDate = (type) => {
    let time_val = "";
    const now = new Date();
    if (type === "1week") {
      time_val = now.getTime() - (7 * 24 * 60 * 60 * 1000);
    } else if (type === "1month") {
      time_val = now.getTime() - (30 * 24 * 60 * 60 * 1000);
    } else if (type === "3month") {
      time_val = now.getTime() - (91 * 24 * 60 * 60 * 1000);
    } else if (type === "1year") {
      time_val = now.getTime() - (365 * 24 * 60 * 60 * 1000);
    }

    if (time_val !== "") {
      now.setTime(time_val);
    }

    const year = now.getFullYear();
    const mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    const day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();

    return `${year}-${mon}-${day}`;
  };

  useEffect(() => {
    activatePeriodButton(period);
  }, [period]);

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
                                <button type="button" className="order-filter-period__tab__button" data-period="1year" onClick={() => setPeriod('1year')}>최근 1년</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="1week" onClick={() => setPeriod('1week')}>1주일</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="1month" onClick={() => setPeriod('1month')}>1개월</button>
                                <button type="button" className="order-filter-period__tab__button" data-period="3month" onClick={() => setPeriod('3month')}>3개월</button>
                            </div>
                            <div className="order-filter-period__date">
                                <div className="order-filter-period__input-wrap">
                                    <input type="date" className="order-filter-period__input" name="dt_fr_input" value="" placeholder="-" onChange={() => {}} />
                                </div>
                                <div className="order-filter-period__input-wrap">
                                    <input type="date" className="order-filter-period__input" name="dt_to_input" value="" placeholder="-" onChange={() => {}} />
                                </div>
                            </div>
                        </div>
                        
                </div>
              {/*  기간 끝*/}
              <table className="Table table1">
                <tr>
                  <th>이미지</th>
                  <th>상품정보</th>
                  <th>가격</th>
                  <th>선택</th>
                </tr>
                <tbody className="Tbody tbody1">
                  {/* procut 아이템 1개 시작 */}
                  {/*  products.map((product, index) 아이템 뿌리게 되면 이걸로 바꾸기! */}
                      <tr className="product-tr">
                        
                        <td>
                          <img src={"./image/lunchBox.jpg"} alt="Product Image" />
                        </td>
                        <td>
                          <span style={{display:'block'}}>브랜치얼스 23종 도시락 1일 2식</span>
                          <span style={{display:'block'}}>&#91;옵션 : 1주&#93;</span>
                        </td>
                        <td>595,000원</td>
                        <td>
                          <button className="buttTxt">삭제</button>
                        </td>
                      </tr>
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

export default OrderList