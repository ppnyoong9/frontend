import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

function ShipForm() {
  const [showTextarea, setShowTextarea] = useState(false);

  const [address, setAddress] = useState('');
  const [zonecode, setZonecode] = useState('');

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  /* 창 닫기 */
  function closeWindow() {
    window.close();
  }

  const handleChange = (e) => {
    if (e.target.value === "sReq-input") {
      setShowTextarea(true);
    } else {
      setShowTextarea(false);
    }
  };

  /* 배송지 api */
  const handleComplete = (data) => {
    let address = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(address);
    setZonecode(data.zonecode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      {/* 변경 팝업 - 사이즈 : 572 * 570  */}
      <div className="p-4">
        <h4 className="mb-4">배송지 수정</h4>
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
                  value={"김새봄"}
                />
                <div className="invalid-feedback">이름을 입력해주세요.</div>
              </div>
            </div>
            {/* 받는사람 끝 */}
            {/* 휴대폰 번호 시작 */}
            <div className="col-12">
              <label htmlFor="hp" className="form-label">
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
                  id="hp"
                  placeholder=""
                  value={"1234"}
                  required
                />
                <span style={{ lineHeight: "3" }}> &nbsp;-&nbsp;</span>
                <input
                  type="text"
                  className="form-control"
                  id="hp"
                  placeholder=""
                  value={"1234"}
                  required
                />
                <div className="invalid-feedback">이름을 입력해주세요.</div>
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
            </div>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="addrPost"
                placeholder="우편번호"
                value={"06234"}
                required
              />
                <button
                      className="input-group-text "
                      onClick={(e) => {
                        handleClick();
                        e.preventDefault();
                      }}
                    >
                      주소찾기
                    </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="addr"
                placeholder="주소"
                value={"서울 강남구 테헤란로 124 삼원타워"}
                readOnly
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="addrDetail"
                placeholder="상세주소"
                value={"3층"}
                required
              />
            </div>
            <div className="form-group">
              <select
                className="form-select"
                id="sReq"
                style={{ color: "rgba(33, 37, 41, 0.75)" }}
                onChange={handleChange}
              >
                <option value="">&lt; 배송요청사항 (선택사항) &gt; </option>
                <option value="sReq-1">배송 전에 미리 연락바랍니다</option>
                <option value="sReq-2">부재 시 경비실에 맡겨주세요.</option>
                <option value="sReq-3">부재 시 문 앞에 놓아주세요.</option>
                <option value="sReq-4">빠른 배송 부탁드립니다.</option>
                <option value="sReq-5">택배함에 보관해 주세요.</option>
                <option value="sReq-input">직접 입력하기</option>
              </select>
              {showTextarea && (
                <textarea
                  id="sReqTextarea "
                  className="sReqTextarea form-control"
                  placeholder="최대 50자까지 가능합니다."
                  maxLength="50"
                  style={{ marginTop: "10px" }}
                />
              )}
            </div>
            {/* 선택사항 ( 체크박스) 시작*/}

            <div className="btn-group">
              <a onClick={closeWindow} className="coup-table-btn btn-delete">
                취소
              </a>
              <a  className="coup-table-btn btn-choose">
                수정완료
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShipForm;
