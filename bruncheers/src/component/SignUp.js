import React from "react";
import "../css/form.css";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {

  const navigate = useNavigate();

  const BCUserCreateAction = () => {
    navigate('/login')
  }

  return (
    <div id="m-container">
      <h1 className="non">SIGN UP</h1>

      <ul className="links">
        <li className="non" style={{ fontSize: "14px", marginBottom: "10px" }}>
          브런치얼스 회원이세요?
        </li>
        <Link to={"/login"}>
          <p className="non" style={{ fontWeight: "bold", fontSize: "13px" }}>
            Login
          </p>
        </Link>
      </ul>

      <form action="" method="post">
        <div className="first-input input__block first-input__block">
          <input type="text" placeholder="아이디" className="input" />
        </div>
        <div className="first-input input__block first-input__block">
          <input type="text" placeholder="닉네임" className="input" />
        </div>
        <div className="input__block">
          <input type="password" placeholder="비밀번호" className="input" />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="input"
          />
        </div>
        <div
          className="first-input input__block first-input__block"
          style={{ marginBottom: "0" }}
        >
          <input type="text" placeholder="이름" className="input" />
        </div>
        <div className="non" style={{ display: "flex" }}>
          <div
            className="first-input input__block first-input__block"
            style={{ width: "350px" }}
          >
            <input type="text" placeholder="생년월일" className="input" />
          </div>
          <div
            className="select"
            style={{
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "25px",
            }}
          >
            <input className="non" type="radio" id="select" name="shop"
              defaultChecked />
            <label className="non" htmlFor="select">남자</label>
            <input className="non" type="radio" id="select2" name="shop" />
            <label className="non" htmlFor="select2">여자</label>
          </div>
        </div>
        <div
          className="first-input input__block first-input__block"
          style={{ marginTop: "0" }}
        >
          <input type="text" placeholder="휴대폰" className="input" />
        </div>
        <div className="non" style={{ display: "flex" }}>
          <div
            className="first-input input__block first-input__block"
            style={{ width: "200px" }}
          >
            <input type="text" placeholder="우편번호" className="input" />
          </div>
          <div
            className="first-input input__block first-input__block"
            style={{ width: "480px" }}
          >
            <input type="text" placeholder="주소지" className="input" />
          </div>
        </div>
        <div className="first-input input__block first-input__block">
          <input type="text" placeholder="상세주소" className="input" />
        </div>
        <button className="signup__btn" onClick={BCUserCreateAction}>회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
