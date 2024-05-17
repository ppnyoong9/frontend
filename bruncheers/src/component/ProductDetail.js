import React, { useState } from "react";
import food from "../image/food.jpg";
import { Link } from "react-router-dom";

function ProductDetail() {

  const [selectedOption, setSelectedOption] = useState("select");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    toggleTableVisibility(event.target.value);
  };

  const toggleTableVisibility = (option) => {
    const tableElement = document.querySelector(".option-detail");
    if (option === "3week") {
      tableElement.style.display = "table";
    } else {
      tableElement.style.display = "none";
    }
  };


  return (
    <>
      <div style={{ display: "inline-block", textAlign: "center" }}>
        <form className="non" name="f" method="post">
          <div className="pd-list">
            <div className="pd-list1">
              <img className="non" src={food} width="400" />
            </div>
            <div className="pd-list2">
              <p className="pname">맛있는! 내가 만든 도시rock & roll~♬</p>
              <div className="pcontent">
                징짜징짜 맛있어서 한 입만 먹으면 완전 반할걸?!<br />
                바로 단골 되어버려도 난 몰라여!!
              </div>
              <hr className="pdetail" />
              <br />
              <table className="non">
                <tbody className="non">
                  <tr className="non">
                    <td className="non">소비자가</td>
                    <td className="non">
                      <span
                        className="non"
                        style={{ paddingLeft: "10px", color: "lightgray" }}
                      >
                        <strike className="non">72,000원</strike>
                      </span>
                    </td>
                  </tr>
                  <tr className="non">
                    <td className="non">판매가</td>
                    <td className="non">
                      <span className="non">
                        <p
                          className="non"
                          style={{
                            fontWeight: "bold",
                            fontSize: "17px",
                            paddingBottom: "5px",
                          }}
                        >
                          53,800원
                        </p>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr className="pdetail" />
              <br />
              <div className="non">
                <label
                  className="non"
                  style={{ fontSize: "14px", paddingRight: "15px" }}
                >
                  1일 1식 기간선택
                </label>
                <select
                  className="option"
                  id="date"
                  value={selectedOption}
                  onChange={handleOptionChange}>
                  <optgroup className="non">
                    <option className="non" value="select">
                      -[필수]옵션을 선택해주세요-
                    </option>
                    <option className="non" value="1week">1주</option>
                    <option className="non" value="2week">2주(+51,500원)</option>
                    <option className="non" value="3week">3주(+102,200원)</option>
                    <option className="non" value="4week"> 4주(+148,400원)</option>
                  </optgroup>
                </select>
                <br />
                <br />
                <hr className="pdetail" />
                <br />
                <table className="option-detail" style={{display:'none'}}>
                  <tbody className="non">
                    <tr className="non">
                      <td className="non">3주(+102,200원)</td>
                      <td className="non">
                        <div
                          className="quantity-controls"
                          style={{ display: "flex", alignItems: "center" }}
                        ></div>
                      </td>
                      <td className="non">156,000원</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div
                  className="non"
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    paddingBottom: "30px",
                  }}
                >
                  <p
                    className="non"
                    style={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    총 금액:
                  </p>
                  <p
                    className="non"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    156,900
                  </p>
                </div>
                <button type="submit" className="custom-btnn btn-3">
                  <span className="non">바로구매</span>
                </button>
                <button type="button" className="custom-btnn btn-3">
                  <span className="non">장바구니</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div className="pd-cat">
        <hr />
        <hr className="pdetail" />
        <ul className="non">
          <li className="non">
            <Link to="/product-info">상품상세정보</Link>
          </li>
          <li className="non">
            <Link to="/review">구매후기(3건)</Link>
          </li>
          <li className="non">
            <Link to="/guide">구매가이드</Link>
          </li>
        </ul>
        <hr className="pdetail" />
        <hr />
      </div>
    </>
  );
}

export default ProductDetail;
