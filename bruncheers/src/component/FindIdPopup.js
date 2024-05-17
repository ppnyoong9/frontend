import React from 'react';

function FindIdPopup() {

  return (
    <>
      <form  action="" method="post">
          <div className="first-input input__block first-input__block">
             <input type="text" placeholder="생년월일" className="input" />
          </div>
          <div className="first-input input__block first-input__block">
             <input type="text" placeholder="휴대전화" className="input" />
          </div>
          <button>찾기</button>
          </form>
          <button>닫기</button>
    </>
  );
}

export default FindIdPopup;