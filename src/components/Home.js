import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.box}>
      <img src="images.jpg" alt="logo" />
      <p className={style.p}>WE ARE SPARTANS</p>
      <p>Powered by Spartans 2023</p>
    </div>
  );
}
export default Home;
