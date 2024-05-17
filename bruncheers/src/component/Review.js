import React, { useState } from "react";
import reviewImag from "../image/rImg.jpg";
import "../css/review.css";

function Review() {
  // 상태 변수로 접힌 섹션의 열림 상태를 관리
  const [isOpen, setIsOpen] = useState(false);

  // 행을 클릭할 때 실행될 함수
  const toggleFold = () => {
    setIsOpen(!isOpen); // 현재 상태의 반대로 설정
  };

  return (
    <table className="fold-table">
      <thead className="non">
        <tr className="r-header">
          <th className="non">제목</th>
          <th className="non">닉네임</th>
          <th className="non">등록일</th>
          <th className="non">
            <span className="visible-big">별점&nbsp;&#40;5.0&#41;</span>
          </th>
        </tr>
      </thead>
      <tbody className="non">
        <tr className={`view ${isOpen ? "open" : ""}`} onClick={toggleFold}>
          <td className="non">든든하고 정말 좋아요</td>
          <td className="pcs">꺼멍불고기</td>
          <td className="cur">2024.05.14</td>
          <td className="non">★★★★★</td>
        </tr>
        {isOpen && (
          <>
            <tr className="fold open">
              <td colSpan="7">
                <div className="fold-content">
                  <img
                    className="non"
                    src={reviewImag}
                    style={{ width: 300, height: 200 }}
                    alt=""
                  />
                </div>
              </td>
            </tr>
            <tr className="fold open">
              <td className="non" colSpan="7">
                <div className="fold-content">
                  <h3 className="non">든든하고 정말 좋아요</h3>
                  <p className="non">
                    회사가 강남인데 강남물가가 너무 비싸서 부담스러웠거든요 ㅠ <br />
                    합리적인 가격에 맛도 있고 영양소도 다양하고 좋아요!
                  </p>
                </div>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}

export default Review;
