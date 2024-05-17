import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BoardView() {

  const navigate = useNavigate();

  const onChange = () => {
    navigate('/board');
  }

  const BCBoardDeleteAction = () => {
    navigate('/board')
  }

  return (
    <table className="bb-table">
      <tbody className="non">
        <tr className="b-name-s">
          <td className="header-s" style={{ width: "100px" }}>분류</td>
          <td className="b-title-cat" style={{ width: "130px" }}>배송문의</td>
          <td className="header-s" style={{ width: "100px" }}>닉네임</td>
          <td className="b-title-cat" style={{ width: "150px" }}>페페코피코</td>
          <td className="header-s" style={{ width: "100px" }}>등록일</td>
          <td className="b-title-cat" style={{ width: "150px" }}>2024-05-10</td>
        </tr>
        <tr className="b-name">
          <td className="header">제목</td>
        </tr>
        <tr className="non">
          <td className="b-title-cat">배송기사님이 제걸 드시고 계셨어요</td>
        </tr>
        <tr className="b-name">
          <td className="header">내용</td>
        </tr>
        <tr className="non">
          <td className="b-content">
            너무 당황스러웠어요...<br />
            도시락 보면 항상 반찬이 부족하거나 밥 칸의 깊이가 얕아서<br />
            저는 솔직히 가격대비 에바쎄바라고 생각했구...<br />
            브런치얼스의 모토에 푸짐하게는 없어서 이런 결과가 나온걸까 싶었고...<br />
            아님 대표님이 소식가셔서 그러신걸까 싶었고...<br />
            <br />
            어찌됐건 전 잊을 수 없어요<br />
            어쩌다 마주친.. 그대 모습에..<br />
            내 마음은 당황스러웠어요...<br />
            <br />
            배송기사님도 당황하셨구요...<br />
            근데 여전히 맛있게 씹고 계시더라구요...<br />
            맛 하나는 보장되어있다는 뜻이겠죠..<br />
            <br />
            연락주셔요 대표님...
          </td>
        </tr>
        <tr className="non">
          <td className="non">
            <div className="non">
              <Link to={"/board-reply"}>
                <input
                  className="custom-btn btn-11"
                  type="button"
                  value="답글"
                />
              </Link>
              <Link to={"/board-modify"}>
                <input
                  className="custom-btn btn-11"
                  type="button"
                  value="수정"
                />
              </Link>
              <input className="custom-btn btn-11" type="button" value="삭제" onClick={BCBoardDeleteAction}/>
              <input className="custom-btn btn-11" type="button" value="목록" onClick={onchange}/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BoardView;
