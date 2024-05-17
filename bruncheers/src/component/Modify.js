import { useNavigate } from "react-router-dom";
import "../css/form.css";
import React from "react";

function Modify() {

  const navigate = useNavigate();

  const BCMypageModifyAction = () => {
    navigate('/mypage')
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div id="m-container">
      <h1 className="non">MY PAGE MODIFY</h1>

      <form action="" method="post">
        <div className="m-name">아이디</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">닉네임</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">현재 비밀번호</div>
        <div className="m-input-block">
          <input type="password" className="input" value="alwls" readOnly />
        </div>
        <div className="m-name">새 비밀번호</div>
        <div className="m-input-block">
          <input type="password" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">새 비밀번호 확인</div>
        <div className="m-input-block">
          <input type="password" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">이름</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div style={{ display: "flex", marginRight: "0px" }} className="non">
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
          <div style={{ display: "flex" }} className="non">
            <div
              className="m-input-block"
              style={{ width: "170px", marginLeft: "30px" }}
            >
              <input type="text" className="input" onChange={handleChange} />
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
              <input className="non" type="text" value="여" readOnly />
            </div>
          </div>
        </div>
        <div className="m-name">전화번호</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">우편번호</div>
        <div className="m-input-block" style={{ width: "150px" }}>
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">주소</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
        <div className="m-name">상세주소</div>
        <div className="m-input-block">
          <input type="text" className="input" onChange={handleChange} />
        </div>
          <button className="modify__btn" onClick={BCMypageModifyAction}>수정</button>
      </form>
    </div>
  );
}

export default Modify;
