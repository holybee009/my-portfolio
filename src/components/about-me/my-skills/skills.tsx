import classes from "./skills.module.css";

function Skills() {
  return (
    <>
      <h1 className={classes.h1}>my skills</h1>

      <div className={classes.skills}>
        <div className={classes.skills1}>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>80%</div>
            </div>
            <p className={classes.tag}>html</p>
          </div>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle1}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>90%</div>
            </div>
            <p className={classes.tag}>javascript</p>
          </div>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle2}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>85%</div>
            </div>
            <p className={classes.tag}>css</p>
          </div>
        </div>

        <div className={classes.skills2}>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle2}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>85%</div>
            </div>
            <p className={classes.tag}>react</p>
          </div>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle3}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>60%</div>
            </div>
            <p className={classes.tag}>typescript</p>
          </div>
          <div className={classes.skillBox}>
            <div className={classes.meter}>
              <svg viewBox="0 0 100 100">
                <circle
                  className={classes.bgCircle}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
                <circle
                  className={classes.progressCircle4}
                  cx="50"
                  cy="50"
                  r="40"
                ></circle>
              </svg>
              <div className={classes.percentage}>30%</div>
            </div>
            <p className={classes.tag}>angular</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
