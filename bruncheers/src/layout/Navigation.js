import React from "react";
import { Link } from "react-router-dom";
import '../css/styles.css';

function Navigation() {
  return (
    <div id="navigation">
      <ul >
        <li>
          <Link to="/product">&emsp;1일 1식&emsp;</Link>
        </li>
        <li>
          <Link to="/product">&emsp;1일 2식&emsp;</Link>
        </li>
        <li>
          <Link to="/product">&emsp;1일 3식&emsp;</Link>
        </li>
        <li>
          <Link to="/board">&emsp;소통 농장&emsp;</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
