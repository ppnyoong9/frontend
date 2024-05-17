import React from "react";
import { useNavigate } from "react-router-dom";

function Password() {

  const navigate = useNavigate();

  const BCUserChangePWAction = () => {
    navigate('/modify')
  }

  return (
    <div id="m-container" style={{ marginTop: "100px" }}>
      <ul className="links">
        <li className="non" style={{ fontSize: "14px", fontWeight: "bold" }}>
          현재 비밀번호를 입력해주세요
        </li>
      </ul>
      <form action="" method="post">
        <div className="input__block">
          <input type="password" placeholder="비밀번호" className="input" />
        </div>
          <button className="signin__btn" onClick={BCUserChangePWAction}>확인</button>
      </form>
    </div>
  );
}

export default Password;
