import avatar from "./../../assets/avatar.webp";
import arrow from "./../../assets/arrow.svg";
import classes from "./header.module.css";
import Navigate, { List } from "../nav-components/navigate";
import leftArrow from "./../../assets/left-arrow.svg";
import Modal from "../modal/modal";
import { useState } from "react";
import { Reveal } from "../about-me/reveal/reveal";

interface Props {
  componentRef: any;
  scrollToComponent: (_: string) => void;
  toWhite: string;
  toBlack: string;
  toLightBlack: string;
}
function Header(props: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseBox = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal
          closeBox={handleCloseBox}
          toBlack={props.toBlack}
          toLightBlack={props.toLightBlack}
        />
      )}
      <Reveal>
        <div className={classes.head} ref={props.componentRef}>
          <div className={classes.image}>
            <img src={avatar} alt="avatar" className={classes.avatar} />
          </div>

          <div className={classes.paraText}>
            <p className={classes.name}>
              <img src={arrow} alt="arrow" className={classes.arrow} />
              i'm oshodi abdulmumin.
            </p>
            <p className={classes.job} style={{ color: props.toBlack }}>
              front end developer
            </p>
            <p className={classes.jobDetails} style={{ color: props.toBlack }}>
              I'm a Nigerian based web designer & front end developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me
            </p>
            <div
              className={classes.moreAbout}
              onClick={handleShowModal}
              style={{ color: props.toBlack }}
            >
              <p className={classes.moreMe}> more about me</p>
              <img
                src={leftArrow}
                alt="left-arrow"
                className={classes.leftArrow}
              />
            </div>
          </div>
          <div className={classes.nav}>
            <Navigate
              active={List.home}
              scrollToComponent={props.scrollToComponent}
            />
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Header;
