import React from "react";
import food from "../image/food.jpg";
import sal from "../image/sal.jpg";
import san from "../image/san.png";
import "../css/product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="p-container">
      <div className="product-list-r">
        <ul className="horizontal-list">
          <li className="non" style={{ paddingRight: "20px" }}>
            <div className="product-list">
              <Link to={"/product_detail"}>
                <img className="non" src={food} width="400" />
              </Link>
              <div className="product-list">
                <span className="non">
              <Link to={"/product_detail"}>
                  <b>1일 1식 든든 도시락</b>
              </Link>
                </span>
              </div>
              <div className="product-list">
                <span className="p-content">
                  브런치얼스만의 특별레시피로 제조한<br />
                  든든하면서 가벼운 프리미엄 도시락
                </span>
                <br /><br />
                <hr />
              </div>
              <div className="product-list">
                <span className="p-ori-price">
                  <strike className="non">72,000원</strike>{" "}
                </span>
                <br />
                <span className="p-price">53,800원</span>
              </div>
            </div>
          </li>

          <li className="non" style={{ paddingRight: "20px" }}>
            <div className="product-list">
              <Link to={"/product_detail"}>
                <img className="non" src={sal} width="400" />
              </Link>
              <div className="product-list">
                <span className="non">
              <Link to={"/product_detail"}>
                  <b>1일 1식 신선 샐러드</b>
              </Link>
                </span>
              </div>
              <div className="product-list">
                <span className="p-content">
                  브런치얼스의 농장에서 키운 채소들로 만든<br />
                  건강하고 즐거움 가득 신선 샐러드
                </span>
                <br /><br />
                <hr />
              </div>
              <div className="product-list">
                <span className="p-ori-price">
                  <strike className="non">78,000원</strike>
                </span>
                <br />
                <span className="p-price">53,800원</span>
              </div>
            </div>
          </li>

          <li className="non">
            <div className="product-list">
              <Link to={"/product_detail"}>
                <img className="non" src={san} width="400" />
              </Link>
              <div className="product-list">
                <span className="non">
              <Link to={"/product_detail"}>
                  <b>1일 1식 가득 샌드위치</b>
              </Link>
                </span>
              </div>
              <div className="product-list">
                <span className="p-content">
                  브런치얼스의 맛있고 여유있는 한끼,<br />
                  포만감 가득 샌드위치
                </span>
                <br /><br />
                <hr />
              </div>
              <div className="product-list">
                <span className="p-ori-price">
                  <strike>75,000원</strike>
                </span>
                <br />
                <span className="p-price">53,800원</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
