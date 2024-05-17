import { Link, useNavigate } from "react-router-dom";
import "../css/form.css";
import React from "react";

function MyPage() {

  const navigate = useNavigate();

  const BCUserDeleteAction = () => {
    navigate('/main')
  }

  return (
    <div id="m-container">
      <h1 className="non">MY PAGE</h1>

      <form action="" method="post">
        <div className="m-name">아이디</div>
        <div className="m-input-block">
          <input type="text" className="input" value="alwls4470" readOnly />
        </div>
        <div className="m-name">닉네임</div>
        <div className="m-input-block">
          <input type="text" className="input" value="꺼멍불고기" readOnly />
        </div>
        <div className="m-name">비밀번호</div>
        <div className="m-input-block">
          <input
            type="password"
            className="input"
            value="alwls"
            readOnly
          />
        </div>
        <div className="m-name">이름</div>
        <div className="m-input-block">
          <input type="text" className="input" value="김미진" readOnly />
        </div>
        <div className="non" style={{ display: "flex", marginRight: "0px" }}>
          <div
            className="m-name"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          생년월일
          </div>
          <div
            className="m-input-block"
            style={{ width: "170px", marginLeft: "30px" }}
          >
            <input type="text" className="input" value="1997-03-17" readOnly />
          </div>
          <div
            className="m-name"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          성별
          </div>
          <div
            className="m-input-block"
            style={{ width: "100px", marginLeft: "30px" }}
          >
            <input type="text" value="여" readOnly />
          </div>
        </div>
        <div className="m-name">전화번호</div>
        <div className="m-input-block">
          <input type="text" className="input" value="010-9822-7106" readOnly />
        </div>
        <div className="m-name">우편번호</div>
        <div className="m-input-block" style={{ width: "150px" }}>
          <input type="text" className="input" value="12345" readOnly />
        </div>
        <div className="m-name">주소지</div>
        <div className="m-input-block">
          <input
            type="text"
            className="input"
            value="경기도 용인시 서리구 시루로 000번길 00 (마루아파트)"
            readOnly
          />
        </div>
        <div className="m-name">상세주소</div>
        <div className="m-input-block">
          <input type="text" className="input" value="000동 000호" readOnly />
        </div>
        <Link to={"/password"}>
          <button className="modify__btn">수정</button>
        </Link>

        <button className="remove__btn" onClick={BCUserDeleteAction}>탈퇴하기</button>
      </form>
    </div>
  );
}

export default MyPage;
