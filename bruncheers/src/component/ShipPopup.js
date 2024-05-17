import React from "react";
import "../css/shippopup.css";

function ShipPopup() {

   /* 신규배송지 등록 열기 */
   const openShipForm = () => {
    window.open("/ship_form", "_blank", "width=572,height=800");
  };
   /* 배송지 수정 열기 */
   const openShipModifyForm = () => {
    window.open("/ship_form/3", "_blank", "width=572,height=800");
  };

  return (
    <>
      {/* 배송지 변경 팝업 - 사이즈 : 500 * 974  */}
      <div className="ship-popup-wrap popup-address-list">
        <h1 className="popup-tit">배송지 목록</h1>
        <a className="ship-link" onClick={openShipForm}>
          <span>신규 배송지 등록</span>
        </a>
        {/* 배송지 목록 */}
        <div className="list-dlv-addr">
          <div className="ship-addr-info">
            <input type="hidden" id="" value="" />
            <div className="addr-name">
              <span className="name">김새봄</span>
              <span className="ship-label delv reserv">기본배송지</span>
            </div>
            <span className="phone-no">010-1234-1234</span>
            <div className="txt-addr">
              (06234) 서울 강남구 테헤란로 124 삼원타워{" "}
            </div>
            <div className="ship-btn-group">
              <div className="btn-left">
                <a href="" className="ship-btn btn-sm btn-default" onClick={openShipModifyForm}>
                  수정
                </a>
              </div>
              <div className="btn-right">
                <a href="" className="ship-btn btn-sm btn-accent" >
                  선택
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="list-dlv-addr">
          <div className="ship-addr-info">
            <input type="hidden" id="" value="" />
            <div className="addr-name">
              <span className="name">박가을</span>
            </div>
            <span className="phone-no">010-9999-9999</span>
            <div className="txt-addr">
              (06234) 서울 강남구 테헤란로 124 삼원타워
            </div>
            <div className="ship-btn-group">
              <div className="btn-left">
                <a href="" className="ship-btn btn-sm btn-default" >
                  수정
                </a>
                <a href="" className="ship-btn btn-sm btn-default">
                  삭제
                </a>
              </div>
              <div className="btn-right">
                <a
                  href=""
                  className="ship-btn btn-sm btn-accent"
                >
                  선택
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 배송지 목록 */}
        {/* 하단 페이징  */}
        <div className="ship-paging">
          <button type="button" className="page is-active">
            1
          </button>
        </div>
        {/* 하단 페이징  */}
      </div>
    </>
  );
}

export default ShipPopup;
