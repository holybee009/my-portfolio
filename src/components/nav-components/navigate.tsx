import classes from "./navigate.module.css";
import home from "./../../assets/home.svg";
import about from "./../../assets/about.svg";
import works from "./../../assets/work.svg";
import email from "./../../assets/contact.svg";
// import { useEffect,useState } from "react";
interface active {
  active: List;
  scrollToComponent: (_: string) => void;
}
export enum List {
  home = "home",
  about = "about",
  portfolio = "portfolio",
  touch = "touch",
}
function Navigate(props: active) {
  // console.log(typeof props.scrollToComponent);

  return (
    <>
      <div className={classes.navigation}>
        <div
          className={classes.box}
          onClick={() => props.scrollToComponent("home")}
          style={{
            backgroundColor: props.active === "home" ? "#ffd700" : "#1f1f1f",
          }}
        >
          <img src={home} alt="home" />
        </div>
        <div
          className={classes.box}
          onClick={() => props.scrollToComponent("about")}
          style={{
            backgroundColor: props.active === "about" ? "#ffd700" : "#1f1f1f",
          }}
        >
          <img src={about} alt="about" />
        </div>
        <div
          className={classes.box}
          onClick={() => props.scrollToComponent("portfolio")}
          style={{
            backgroundColor:
              props.active === "portfolio" ? "#ffd700" : "#1f1f1f",
          }}
        >
          <img src={works} alt="works" />
        </div>
        <div
          className={classes.box}
          onClick={() => props.scrollToComponent("touch")}
          style={{
            backgroundColor: props.active === "touch" ? "#ffd700" : "#1f1f1f",
          }}
        >
          <img src={email} alt="email" />
        </div>
      </div>
    </>
  );
}

export default Navigate;
