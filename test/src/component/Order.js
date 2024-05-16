import React from "react";
import "../css/order.css";

/*
js 살펴봐야함 
// Example starter JavaScript htmlFor disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classNameList.add('was-validated')
    }, false)
  })
})() 

*/

function Order() {

  /* 배송지목록 여는 js */
  const openShipPopup = ()=>{
    window.open('/ship_popup', '_blank', 'width=500,height=974')
  }

  return (
    <>
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>주문/결제</h2>
            <p className="lead">
              주문 전 공지사항에 있는 유의사항을 참고해주세요
            </p>
          </div>

          {/* 결제정보 시작 */}
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">결제 정보</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-3">주문 상품</h6>
                  </div>
                  <span
                    className="text-body-secondary"
                    style={{ lineHeight: "3" }}
                  >
                    566,000원
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                  <div className="text-success">
                    <h6 className="my-3">할인</h6>
                  </div>
                  <span className="text-success" style={{ lineHeight: "3" }}>
                    −30,000원
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between pt-3 pb-3">
                  <span>최종 결제 금액</span>
                  <strong>563,000원</strong>
                </li>
              </ul>
              {/* 결제정보 끝 */}

              {/* 할인쿠폰 시작*/}
              <form className="card">
                <a className="btn btn-secondary">쿠폰 조회/목록</a>
              </form>
              {/* 할인쿠폰 끝 */}
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-4">배송지</h4>
              <form className="needs-validation" noValidate>
                {/* 배송지 시작 */}
                <div className="row g-3">
                  {/* 받는사람 시작 */}
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      받는사람
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        이름을 입력해주세요.
                      </div>
                    </div>
                  </div>
                  {/* 받는사람 끝 */}
                  {/* 휴대폰 번호 시작 */}
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      휴대전화
                    </label>
                    <div className="input-group has-validation">
                      <select
                        className="form-select"
                        id="hp"
                        style={{ color: "rgba(33, 37, 41, 0.75)" }}
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                      <span style={{ lineHeight: "3" }}> &nbsp;-&nbsp;</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder=""
                        required
                      />
                      <span style={{ lineHeight: "3" }}> &nbsp;-&nbsp;</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        이름을 입력해주세요.
                      </div>
                    </div>
                  </div>
                  {/* 휴대폰 번호  끝 */}

                  {/* 주소 시작 */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label
                      htmlFor="address"
                      className="form-label"
                      style={{ marginRight: "40px", marginBottom: "0" }}
                    >
                      주소
                    </label>
                    <button className="addrList" type="button" onClick={openShipPopup}>
                      배송지 목록
                    </button>
                  </div>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="addrPost"
                      placeholder="우편번호"
                      required
                    />
                    <button className="input-group-text">주소찾기</button>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="addr"
                      placeholder="주소"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="addrDetail"
                      placeholder="상세주소"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-select"
                      id="sReq"
                      style={{ color: "rgba(33, 37, 41, 0.75)" }}
                    >
                      <option value="">
                        &lt; 배송요청사항 (선택사항) &gt;{" "}
                      </option>
                      <option value="sReq-1">
                        배송 전에 미리 연락바랍니다
                      </option>
                      <option value="sReq-2">
                        부재 시 경비실에 맡겨주세요.
                      </option>
                      <option value="sReq-3">
                        부재 시 문 앞에 놓아주세요.
                      </option>
                      <option value="sReq-4">빠른 배송 부탁드립니다.</option>
                      <option value="sReq-5">택배함에 보관해 주세요.</option>
                      <option value="sReq-input">직접 입력</option>
                    </select>
                  </div>
                  {/* 선택사항 ( 체크박스) 시작*/}

                  <div className="form-check" style={{ marginLeft: "10px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="same-address"
                    />
                    <label className="form-check-label" htmlFor="same-address">
                      기본 배송지 불러오기
                    </label>
                  </div>

                  <div className="form-check" style={{ marginLeft: "10px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="save-addr"
                    />
                    <label className="form-check-label" htmlFor="save-info">
                      이 배송지를 저장합니다.
                    </label>
                  </div>
                  {/* 선택사항 ( 체크박스) 끝 */}
                  <div className="invalid-feedback">주소를 입력해주세요.</div>
                  {/* 주소 끝 */}
                </div>
                {/* 배송지 끝 */}
                {/* 상품정보시작 */}
                <hr className="my-4" />
                <h4 className="mb-3">상품정보</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">상품정보</th>
                      <th scope="col">상품할인</th>
                      <th scope="col">가격</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  {/* 상품1개 */}
                  <tbody>
                    <tr>
                      <td>
                        <div class="media">
                          <div class="d-flex">
                            <img
                              src={"./image/lunchBox.jpg"}
                              style={{ width: "100px" }}
                              alt="Product Image"
                            />
                            <div class="media-body p-2 ">
                              <p>브랜치얼스 23종 도시락 1일 2식</p>
                              <p>&#91;옵션 : 1주&#93;</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>-30000원</p>
                        </div>
                      </td>
                      <td>566,000원</td>
                      <td>
                        <button className="buttTxt">삭제</button>
                      </td>
                    </tr>
                  </tbody>
                  {/* 상품1개 끝 */}
                  <tfoot style={{lineHeight:'50px'}}>
                    <td></td>
                    <td></td>
                      <td>총 주문 금액</td>
                      <td>563,000원</td>
                  </tfoot>
                </table>

                {/* 상품정보 끝 */}

                {/* 결제 시작 */}
                <hr className="my-4" />

                <h4 className="mb-3">결제</h4>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      신용카드
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="cash"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="debit">
                      무통장입금
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="npay"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      네이버페이
                    </label>
                  </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      카드 선택
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small className="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      카드사를 선택해주세요.
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                {/* 결제 끝 */}
                <hr className="my-4" />
                {/* 제출 버튼 */}
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  결제하기
                </button>
                {/* 제출 버튼 */}
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Order;
