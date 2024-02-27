import classes from "./about.module.css";
import Personal from "./personal-infos/personal";
import Skills from "./my-skills/skills";
import Navigate, { List } from "./../nav-components/navigate";
import Experience from "./experience/experience";
import Services from "./services/services";

interface Props {
  componentRef: any;
  scrollToComponent: (_: string) => void;
  toBlack: string;
  toWhite: string;
  toLightBlack: string;
}
function About(props: Props) {
  return (
    <>
      <div className={classes.about} ref={props.componentRef}>
        <div className={classes.head}>
          <h1 className={classes.lay1} style={{ color: props.toLightBlack }}>
            myinfo
          </h1>
          <h1 className={classes.lay2} style={{ color: props.toBlack }}>
            about <span className={classes.me}>me</span>
          </h1>
        </div>

        <div className={classes.person}>
          <Personal toBlack={props.toBlack} />
          <div className={classes.nav}>
            <Navigate
              active={List.about}
              scrollToComponent={props.scrollToComponent}
            />
          </div>
        </div>
        <Skills />
        <Services toBlack={props.toBlack} toLightBlack={props.toLightBlack} />
        <Experience toBlack={props.toBlack} toLightBlack={props.toLightBlack} />
      </div>
    </>
  );
}
export default About;
