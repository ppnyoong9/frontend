import React from "react";
import guide from "../image/guide.png";

function Guide() {
  return (
    <>
      <img
        src={guide}
        style={{ margin: 10, width: 800, height: 1050 }}
        alt=""
        className="non"
      />
    </>
  );
}

export default Guide;
