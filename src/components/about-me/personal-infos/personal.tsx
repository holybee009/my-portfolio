import classes from "./personal.module.css";
import dash from "./../../../assets/minus.svg";
import download from "./../../../assets/download.svg";
import cv from "./../../../../files/abdulmumin CV.pdf";
import { Reveal } from "../reveal/reveal";

interface Props {
  toBlack: string;
}
function Personal(props: Props) {
  return (
    <>
      <div>
        <Reveal>
          <h1 className={classes.pInfo}>personal info</h1>
        </Reveal>
        <div className={classes.personal}>
          <div className={classes.sect}>
            <div className={classes.sectio}>
              <Reveal>
                <div className={classes.info1}>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    First Name:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      abdulmumin
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    age:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      22 years
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    freelance:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      available
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    phone:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      +2349027559089
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    last Name:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      oshodi
                    </span>
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className={classes.info2}>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    nationality:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      Nigerian
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    address:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      alimosho, lagos state
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    email:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      abdulmuminoluwafemioshodi@gmail.com
                    </span>
                  </p>
                  <p
                    className={classes.labels}
                    style={{ color: props.toBlack }}
                  >
                    languages:{" "}
                    <span
                      className={classes.value}
                      style={{ color: props.toBlack }}
                    >
                      english,arabic
                    </span>
                  </p>
                </div>
              </Reveal>
            </div>

            <a href={cv} download>
              <div
                className={classes.moreAbout}
                style={{ color: props.toBlack }}
              >
                <p className={classes.moreMe}> download cv</p>
                <img
                  src={download}
                  alt="left-arrow"
                  className={classes.leftArrow}
                />
              </div>
            </a>
          </div>
          <Reveal>
            <div className={classes.third}>
              <div className={classes.infBox}>
                <div className={classes.num}>
                  1 <span className={classes.upper}>+</span>
                </div>
                <div className={classes.content}>
                  <img src={dash} alt="dash" />
                  <span className={classes.words}>years of experience</span>
                </div>
              </div>
              <div className={classes.infBox}>
                <div className={classes.num}>
                  10 <span className={classes.upper}>+</span>
                </div>
                <div className={classes.content}>
                  <img src={dash} alt="dash" />
                  <span className={classes.words}>completed projects</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
export default Personal;
