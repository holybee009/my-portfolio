import classes from "./buttonToggle.module.css";

interface Props {
  toggleWhite: string;
  toggle: () => void;
}
function ButtonToggle(props: Props) {
  return (
    <>
      <div className={classes.fixed}>
        <div className={classes.toggle}>
          <div
            className={classes.monthly}
            style={{
              color: props.toggleWhite,
            }}
          >
            Dark
          </div>
          <div className={classes.toggleBox}>
            <input
              type="checkbox"
              className={classes.checkbox}
              onClick={props.toggle}
            />
            <span className={classes.toggler}></span>
          </div>
          <div
            className={classes.yearly}
            style={{
              color: props.toggleWhite,
            }}
          >
            Light
          </div>
        </div>
      </div>
    </>
  );
}
export default ButtonToggle;
