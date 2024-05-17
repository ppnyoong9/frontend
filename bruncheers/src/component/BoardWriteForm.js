import React from "react";
import "../css/board.css";
import { useNavigate } from "react-router-dom";

function BoardWriteForm() {
const navigate = useNavigate();

const BCBoardWriteAction = () => {
  navigate('/board-view');
}

  return (
    <form action="board.html" method="post">
      <table className="bb-table">
        <tbody className="non">
          <tr className="b-name">
            <td className="header">분류</td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td className="select" style={{ paddingLeft: "27px" }}>
              <input type="radio" id="select" name="shop" />
              <label htmlFor="select" style={{ marginRight: "5px" }}>공지사항</label>
              <input type="radio" id="select2" name="shop" defaultChecked />
              <label htmlFor="select2" style={{ marginRight: "5px" }}>상품문의</label>
              <input type="radio" id="select3" name="shop" defaultChecked />
              <label htmlFor="select3" style={{ marginRight: "5px" }}>배송문의</label>
              <input type="radio" id="select4" name="shop" defaultChecked />
              <label htmlFor="select4" style={{ marginRight: "5px" }}>기타문의</label>
            </td>
          </tr>
          <tr className="b-name">
            <td className="header">제목</td>
          </tr>
          <tr className="non">
            <td className="non">
              <input
                className="b-title"
                type="text"
                placeholder="제목을 입력하세요"
              />
            </td>
          </tr>
          <tr className="b-name">
            <td className="header">내용</td>
          </tr>
          <tr className="non">
            <td className="non">
              <textarea placeholder="내용을 입력하세요"></textarea>
            </td>
          </tr>
          <tr className="non">
            <td className="non">
                <input
                  className="custom-btn btn-11"
                  type="submit"
                  value="등록"
                  onClick={BCBoardWriteAction}
                />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default BoardWriteForm;
