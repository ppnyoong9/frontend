import React from "react";
import "../css/board.css";
import { Link } from "react-router-dom";
import reply from "../image/reply.png";

function Board() {
  return (
    <>
      <div className="bb-container">
        <table className="b-table">
          <thead className="b-thead">
            <tr className="non">
              <th className="b-th">분류</th>
              <th className="b-th">제목</th>
              <th className="b-th">닉네임</th>
              <th className="b-th">작성일</th>
              <th className="b-th">조회수</th>
            </tr>
          </thead>
          <tbody className="b-tbody">
            <tr style={{ background: "#efefef" }}>
              <td className="non">&laquo;공지사항&raquo;</td>
              <td className="non">
                이제부터 제가 진짜 브런치얼스입니다. 오늘 하루 도시락 공짜
              </td>
              <td className="non">브런치얼스</td>
              <td className="non">2024-05-14</td>
              <td className="non">10058</td>
            </tr>
            <tr style={{ background: "#efefef" }}>
              <td className="non">&laquo;공지사항&raquo;</td>
              <td className="non">브런치얼스 계정 해킹하신 고객님 찾습니다.</td>
              <td className="non">real브런치얼스</td>
              <td className="non">2024-05-14</td>
              <td className="non">3658</td>
            </tr>
            <tr className="non">
              <td className="non">&laquo;기타문의&raquo;</td>
              <td className="non">
                브런치얼스가 좋으세요? 디너덜트가 좋으세요?
              </td>
              <td className="non">암유어라이벌</td>
              <td className="non">2024-05-15</td>
              <td className="non">35</td>
            </tr>
            <tr className="non">
              <td className="non">&laquo;배송문의&raquo;</td>
              <td className="non">배송기사님이 제걸 드시고 계셨어요</td>
              <td className="non">페페코피코</td>
              <td className="non">2024-05-10</td>
              <td className="non">785</td>
            </tr>
            <tr style={{ background: "#efefef" }}>
              <td className="non">&laquo;배송문의&raquo;</td>
              <td className="non">
                <img src={reply} style={{ width: 12 }} /> 안녕하세요.
                브런치얼스입니다.
              </td>
              <td className="non">브런치얼스</td>
              <td className="non">2024-05-11</td>
              <td className="non">125</td>
            </tr>
            <tr className="non">
              <td className="non">&laquo;기타문의&raquo;</td>
              <td className="non">드라마 및 영화 PPL 문의</td>
              <td className="non">아윌미디어</td>
              <td className="non">2024-04-28</td>
              <td className="non">1</td>
            </tr>
            <tr className="non">
              <td className="non">&laquo;상품문의&raquo;</td>
              <td className="non">
                메뉴 추가하실 생각은 없나요? 문희는 주스가 먹고시뿐데
              </td>
              <td className="non">아임무늬</td>
              <td className="non">2024-03-17</td>
              <td className="non">1004</td>
            </tr>
            <tr>
              <td>
                <Link to={"/board-write-form"}>
                  <button
                    className="custom-btn btn-11"
                    style={{
                      position: "absolute",
                      right: "0",
                      bottom: "-50px",
                    }}
                  >
                    글쓰기
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Board;
