import React from "react";

function ShipForm() {
  return (
    <>
     {/* 변경 팝업 - 사이즈 : 572 * 570  */}
      <form name="f1" id="ship_form" method="post" class="">
        <div class="n-popup-wrap popup-address pop-address-mod">
          <h1 class="popup-tit">신규 배송지</h1>
          <table class="n-table table-row">
            <tbody>
              <tr>
                <th scope="row">수령인</th>
                <td>
                  <input name="name" type="text" class="n-input" value="" />
                </td>
              </tr>
              <tr>
                <th scope="row">배송지명 (선택)</th>
                <td>
                  <input name="title" type="text" class="n-input" value="" />
                </td>
              </tr>
              <tr>
                <th scope="row">휴대전화</th>
                <td class="phone">
                  <input
                    name="mobile1"
                    type="text"
                    class="n-input input-num-size"
                    value=""
                    maxlength="3"
                  />
                  <span class="sb">-</span>
                  <input
                    name="mobile2"
                    type="text"
                    class="n-input input-num-size"
                    value=""
                    maxlength="4"
                  />
                  <span class="sb">-</span>
                  <input
                    name="mobile3"
                    type="text"
                    class="n-input input-num-size"
                    value=""
                    maxlength="4"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">전화번호</th>
                <td class="phone">
                  <input
                    name="phone1"
                    type="text"
                    class="n-input input-num-size"
                    id="form_phone1"
                    value=""
                    onkeydown="chkRecipient(this);"
                    maxlength="4"
                    readonly="readonly"
                  />
                  <span class="sb">-</span>
                  <input
                    name="phone2"
                    type="text"
                    class="n-input input-num-size"
                    id="form_phone2"
                    value=""
                    onkeydown="chkRecipient(this);"
                    maxlength="4"
                    readonly="readonly"
                  />
                  <span class="sb">-</span>
                  <input
                    name="phone3"
                    type="text"
                    class="n-input input-num-size"
                    id="form_phone3"
                    value=""
                    onkeydown="chkRecipient(this);"
                    maxlength="4"
                    readonly="readonly"
                  />
                  <input
                    type="checkbox"
                    class="n-check"
                    id="checkTelNone"
                    name="rphonecheckbox"
                    onclick="SetRecipientPhoneNumber(this);"
                  />
                  <label for="checkTelNone" id="r_PhoneNumberCheckBox">
                    없음
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">배송지 주소</th>
                <td class="address">
                  <div class="search">
                    <input
                      name="zipcode1"
                      data-name="data-zipcode"
                      type="text"
                      class="n-input"
                      value=""
                      readonly=""
                    />
                    <button
                      type="button"
                      class="n-btn btn-sm btn-accent"
                      onclick="window.open('/order-service/delivery/find_kakao_zip_post','','width=504,height=688,resizable,scrollbars=yes,alwaysReised=yes'); return false;"
                    >
                      검색
                    </button>
                  </div>
                  <input
                    name="addr1"
                    data-name="data-addr1"
                    type="text"
                    class="n-input"
                    value=""
                    readonly=""
                  />
                  <input
                    name="addr2"
                    data-name="data-addr2"
                    type="text"
                    class="n-input"
                    value=""
                  />

                  <div class="n-check-block">
                    <input
                      type="checkbox"
                      class="n-check"
                      id="delivery_defaultCheck"
                      name="delivery_default"
                      onchange="chk_default(this);"
                    />
                    <label for="delivery_defaultCheck">기본 배송지 설정</label>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">배송 요청사항 (선택)</th>
                <td class="request">
                  <select
                    class="n-select"
                    name="dlv_msg2"
                    onchange="inputMsg(this.value);"
                  >
                    <option value="" selected="selected">
                      배송 시 요청사항을 선택해주세요
                    </option>
                    <option value="부재 시 경비실에 맡겨주세요">
                      부재 시 경비실에 맡겨주세요
                    </option>
                    <option value="부재 시 택배함에 넣어주세요">
                      부재 시 택배함에 넣어주세요
                    </option>
                    <option value="부재 시 집 앞에 놔주세요">
                      부재 시 집 앞에 놔주세요
                    </option>
                    <option value="배송 전 연락 바랍니다">
                      배송 전 연락 바랍니다
                    </option>
                    <option value="파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.">
                      파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.
                    </option>
                    <option value="etc">직접 입력</option>
                  </select>
                  <textarea
                    class="n-input"
                    rows="3"
                    maxlength="50"
                    placeholder="최대 50자까지 입력 가능합니다."
                    name="dlv_msg1"
                    /* style="display: none;" */
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="popup-btn">
            <button
              type="button"
              class="n-btn btn-lighter"
              onclick="self.close();"
            >
              취소
            </button>
            <button
              type="button"
              class="n-btn btn-accent"
              onclick="chk_submit();return false;"
            >
              등록
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ShipForm;
