import React from "react";
import "../css/shippopup.css";

function ShipPopup() {
  return (
    <>
      {/* 배송지 변경 팝업 - 사이즈 : 500 * 974  */}
      <div className="n-popup-wrap popup-address-list">
        <h1 className="popup-tit">배송지 목록</h1>
        <a href="" className="n-link">
          <span>신규 배송지 등록</span>
        </a>
        {/* 배송지 목록 */}
        <div className="list-dlv-addr">
          <div className="n-addr-info">
            <input type="hidden" id="" value="" />
            <div className="addr-name">
              <span className="name">김새봄</span>
              <span className="n-label delv reserv">기본배송지</span>
            </div>
            <span className="phone-no">010-1234-1234</span>
            <div className="txt-addr">
              (06234) 서울 강남구 테헤란로 124 삼원타워{" "}
            </div>
            <div className="n-btn-group">
              <div className="btn-left">
                <a href="" className="n-btn btn-sm btn-default" onClick="">
                  수정
                </a>
              </div>
              <div className="btn-right">
                <a href="" className="n-btn btn-sm btn-accent" onClick="">
                  선택
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="list-dlv-addr">
          <div className="n-addr-info">
            <input type="hidden" id="" value="" />
            <div className="addr-name">
              <span className="name">박가을</span>
            </div>
            <span className="phone-no">010-9999-9999</span>
            <div className="txt-addr">
              (06234) 서울 강남구 테헤란로 124 삼원타워
            </div>
            <div className="n-btn-group">
              <div className="btn-left">
                <a href="" className="n-btn btn-sm btn-default" onClick="">
                  수정
                </a>
                <a href="" className="n-btn btn-sm btn-default">
                  삭제
                </a>
              </div>
              <div className="btn-right">
                <a
                  href=""
                  className="n-btn btn-sm btn-accent"
                  onClick=""
                >
                  선택
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 배송지 목록 */}
        {/* 하단 페이징  */}
        <div className="n-paging">
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
