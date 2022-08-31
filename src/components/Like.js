import React from "react";
import "../scss/Like.css";

function Like({ active }) {
  return (
    <div className="placement ">
      {console.log("like")}
      <div className={active}></div>
    </div>
  );
}

export default Like;
