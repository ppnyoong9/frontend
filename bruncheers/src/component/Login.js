import React from "react";
import "../css/form.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const BCUserLoginAction = () => {
    navigate('/main')
  }

  return (
    <>
      <div id="m-container">
        <h1>LOGIN</h1>

        <ul className="links">
          <li
            className="non"
            style={{ fontSize: "14px", marginBottom: "10px" }}
          >
            브런치얼스 회원이 아니신가요?
          </li>
          <Link to={"/signup"}>
            <p style={{ fontWeight: "bold", fontSize: "13px" }}>Sign Up</p>
          </Link>
        </ul>

        <form action="" method="post">
          <div className="first-input input__block first-input__block">
            <input type="text" placeholder="아이디" className="input" />
          </div>
          <div className="input__block">
            <input type="password" placeholder="비밀번호" className="input" />
          </div>
          <button className="signin__btn" onClick={BCUserLoginAction}>Login</button>
        </form>
        <button className="find__btn">아이디 찾기</button>
        <button className="find__btn">비밀번호 찾기</button>
        <br />
        <div className="separator">
          <p>OR</p>
        </div>
        <div className="button-container">
          <button className="kakao__btn">
            <i className="fa fa-kakao"></i>
            Login with Kakao
          </button>
          <button className="naver__btn">
            <i className="fa fa-naver"></i>
            Login with Naver
          </button>
          <button className="google__btn">
            <i className="fa fa-google"></i>
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
