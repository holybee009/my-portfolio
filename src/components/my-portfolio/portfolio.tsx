import classes from "./portfolio.module.css";
import multiform from "./../../../files/multistepform.webp";
import booking from "./../../../files/productpage.webp";
import commentting from "./../../../files/comments-page.webp";
import Navigate, { List } from "../nav-components/navigate";
import htmlCss from "./../../../files/h&c.png";
import portImage from "./../../../files/port-img.png";

interface Props {
  componentRef: any;
  scrollToComponent: (_: string) => void;
  toLightBlack: string;
  toBlack: string;
}
function Portfolio(props: Props) {
  return (
    <>
      <div ref={props.componentRef}>
        <div className={classes.headerPart}>
          <h1 className={classes.back} style={{ color: props.toLightBlack }}>
            works
          </h1>
          <h1 className={classes.front} style={{ color: props.toBlack }}>
            my <span className={classes.touch}>portfolio</span>
          </h1>
        </div>

        <div className={classes.portfolio}>
          <div className={classes.portBox}>
            <div className={classes.whiteBox}>
              <h1 className={classes.portHead}>html & css</h1>
              <p className={classes.projects}>projects</p>
              <ul className={classes.portList}>
                <li className={classes.list}>
                  <a href="https://github.com/holybee009/my-beginners-project-work">
                    <img src={htmlCss} alt="h&c" />
                    <p className={classes.text}>
                      my html and css project works(files)
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.portBox}>
            <div className={classes.whiteBox}>
              <h1 className={classes.portHead}>html, css & javascript</h1>
              <p className={classes.projects}>projects</p>
              <ul className={classes.portList}>
                <a
                  href="https://multistep-form-sign-up.netlify.app/"
                  target="_blank"
                >
                  <li className={classes.list}>
                    <img src={multiform} alt="multiform" />
                    <p>multiform section page</p>
                  </li>
                </a>
                <a
                  href="https://ecommerce-product-booking-page.netlify.app/"
                  target="_blank"
                >
                  <li className={classes.list}>
                    <img src={booking} alt="booking" />
                    <p>product booking page</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className={classes.portBox}>
            <div className={classes.whiteBox}>
              <h1 className={classes.portHead}>react + vite</h1>
              <p className={classes.projects}>projects</p>
              <ul className={classes.portList}>
                <a
                  href="https://comments-updating-app.netlify.app/"
                  target="_blank"
                >
                  <li className={classes.list}>
                    <img src={commentting} alt="commentting" />
                    <p>comments updating app</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className={classes.portBox}>
            <div className={classes.whiteBox}>
              <h1 className={classes.portHead}>react + vite + typesript</h1>
              <p className={classes.projects}>projects</p>
              <ul className={classes.portList}>
                <li>
                  <a
                    href="https://oshodi-abdulmumin-portfolio.netlify.app/"
                    target="_blank"
                  >
                    <li className={classes.list}>
                      <img src={portImage} alt="portImage" />
                      <p>my portfolio website</p>
                    </li>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.nav}>
            <Navigate
              active={List.portfolio}
              scrollToComponent={props.scrollToComponent}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
