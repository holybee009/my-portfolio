import classes from "./service.module.css";
import graphics from "./../../../assets/graphics.svg";
import code from "./../../../assets/code.svg";
import uxDesign from "./../../../assets/uxdesign.svg";
import maintain from "./../../../assets/maintain.svg";
import { Reveal } from "../reveal/reveal";

interface Props {
  toBlack: string;
  toLightBlack: string;
}
function Services(props: Props) {
  return (
    <>
      <h1 className={classes.serve}>my services</h1>
      <Reveal>
        <div className={classes.services}>
          <div
            className={classes.servebox}
            style={{
              backgroundColor: props.toLightBlack,
              color: props.toBlack,
            }}
          >
            <img src={graphics} alt="graphics" />
            <h3 className={classes.Head}>creative graphic design</h3>
            <ul>
              <li>visual identity & logs</li>
              <li>UI-UX interface design</li>
              <li>
                custom illustrations and infographics(brochures,leaflets and
                posters)
              </li>
            </ul>
          </div>
          <div
            className={classes.servebox}
            style={{
              backgroundColor: props.toLightBlack,
              color: props.toBlack,
            }}
          >
            <img src={code} alt="code" />
            <h3 className={classes.Head}>interactive frontend development</h3>
            <ul>
              <li>creation of responsive websites</li>
              <li>HTML,css, javascript,react</li>
              <li>website performance & accessibility optimization</li>
            </ul>
          </div>
          <div
            className={classes.servebox}
            style={{
              backgroundColor: props.toLightBlack,
              color: props.toBlack,
            }}
          >
            <img src={uxDesign} alt="uxdesign" />
            <h3 className={classes.Head}>user experience design(UX) design</h3>
            <ul>
              <li>UI needs research and analysis</li>
              <li>creation of efficient UI workflows</li>
              <li>user testing & iterations to improve overall experience</li>
            </ul>
          </div>
          <div
            className={classes.servebox}
            style={{
              backgroundColor: props.toLightBlack,
              color: props.toBlack,
            }}
          >
            <img src={maintain} alt="maintain" />
            <h3 className={classes.Head}>maintenance and technical support</h3>
            <ul>
              <li>regular websites updates</li>
              <li>website performance booking</li>
              <li>technical issue resolution & bug fixing</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Services;
