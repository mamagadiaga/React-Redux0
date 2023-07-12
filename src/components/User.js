import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user) && user.pseudo}</h3>
        <img src="./img/WhatsApp Image 2022-11-25 at 12.53.15 PM (2).jpeg" alt="bill gates" width={'50%'} height={'50%'} />
        <p>Age : {!isEmpty(user) && user.age} ans</p>
        <p>
          Like{!isEmpty(user) && user.likes > 1 ? "s" : ""} :{" "}
          {!isEmpty(user) && user.likes}
        </p>
      </div>
    </div>
  );
};

export default User;
