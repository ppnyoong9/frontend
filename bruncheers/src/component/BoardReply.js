import React from "react";
import { useNavigate } from "react-router-dom";

function BoardView() {
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onChange = () => {
    navigate('/board');
  }

  const BCBoardReplyAction = () => {
    navigate('/board-view')
  }


  return (
    <form action="board.html" method="post">
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
            <td className="non">
              <input
                className="b-title-re-t"
                type="text"
                defaultValue="re)안녕하세요 브런치얼스입니다."
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className="b-name">
            <td className="header">내용</td>
          </tr>
          <tr className="non">
            <td className="non">
              {/* textarea 개행 처리 해야함 (데이터.split('\n').map((line) --> 참고) */}
              <textarea
                className="b-title-re-con"
                defaultValue="
                페페코피코님 안녕하세요. 브런치얼스입니다. 우선 당황스러우셨을
                고객님께 사과의 말씀드립니다. 배송기사님께 말씀
                전달해드렸습니다. 앞으로는 이런 일 없도록 하겠습니다.
                브런치얼스를 믿고 주문해주시는 고객님께 감사의 말씀 드리며 다시
                한 번 죄송하다는 사과의 말씀 드립니다. ps. 저는 대식가입니다.
                re&#41;너무 당황스러웠어요... 도시락 보면 항상 반찬이 부족하거나
                밥 칸의 깊이가 얕아서 저는 솔직히 가격대비 에바쎄바라고
                생각했구... 브런치얼스의 모토에 푸짐하게는 없어서 이런 결과가
                나온걸까 싶었고... 아님 대표님이 소식가셔서 그러신걸까 싶었고...
                어찌됐건 전 잊을 수 없어요 어쩌다 마주친.. 그대 모습에.. 내
                마음은 당황스러웠어요... 배송기사님도 당황하셨구요... 근데
                여전히 맛있게 씹고 계시더라구요... 맛 하나는 보장되어있다는
                뜻이겠죠.. 연락주셔요 대표님..."
              ></textarea>
            </td>
          </tr>
          <tr className="non">
            <td className="non">
              <input className="custom-btn btn-11" type="button" value="등록" onClick={BCBoardReplyAction}/>
              <input className="custom-btn btn-11" type="button" value="목록" onClick={onChange}/>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default BoardView;
