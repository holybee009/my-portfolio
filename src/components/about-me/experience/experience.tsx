import classes from "./experience.module.css";
import job from "./../../../assets/jobs.svg";
import line from "./../../../assets/line.svg";
import { Reveal } from "../reveal/reveal";

interface Props {
  toBlack: string;
  toLightBlack: string;
}
function Experience(props: Props) {
  return (
    <>
      <h1 className={classes.exHead}>experience & education</h1>
      <Reveal>
        <div className={classes.experience}>
          <div className={classes.flex}>
            <div className={classes.exBox}>
              <div className={classes.icons}>
                <img src={job} alt="job" className={classes.job} />
                <img src={line} alt="line" className={classes.line} />
              </div>
              <div className={classes.explain}>
                <div
                  className={classes.period}
                  style={{
                    backgroundColor: props.toLightBlack,
                    color: props.toBlack,
                  }}
                >
                  2018 - present
                </div>
                <h1 className={classes.descript}>graphic designer</h1>
                <p className={classes.desc}>
                  I am a passionate graphic designer with a keen eye for detail
                  and a love for creativity, with 5 years of experience in the
                  industry, I specialize in crafting visually stunning designs
                  that captivate audiences and elevate brands.
                </p>
              </div>
            </div>
            <div className={classes.exBox}>
              <div className={classes.icons}>
                <img src={job} alt="job" className={classes.job} />
                <img src={line} alt="line" className={classes.line} />
              </div>
              <div className={classes.explain}>
                <div
                  className={classes.period}
                  style={{
                    backgroundColor: props.toLightBlack,
                    color: props.toBlack,
                  }}
                >
                  2021 - present
                </div>
                <h1 className={classes.descript}>ui/ux designer</h1>
                <p className={classes.desc}>
                  I am a seasoned UI/UX designer dedicated to crafting seamless
                  digital experiences that delight users and drive results. With
                  a passion for human-centered design and 1 year of experience
                  in the field, I specialize in creating intuitive interfaces
                  that prioritize user needs and business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.exBox}>
              <div className={classes.icons}>
                <img src={job} alt="job" className={classes.job} />
                <img src={line} alt="line" className={classes.line} />
              </div>
              <div className={classes.explain}>
                <div
                  className={classes.period}
                  style={{
                    backgroundColor: props.toLightBlack,
                    color: props.toBlack,
                  }}
                >
                  2022 - present
                </div>
                <h1 className={classes.descript}>web developer</h1>
                <p className={classes.desc}>
                  I am a dedicated and expert web developer with a knack for
                  turning ideas into dynamic, interactive digital experiences,
                  with 1 + years of experience in the ever evolving world of web
                  development. I specialize in building robust, user-friendly
                  websites and web application. whether you're a startup looking
                  to establish your online presence or an established business
                  seeking to revamp your digital platform, I am here to help.
                </p>
              </div>
            </div>
            <div className={classes.exBox}>
              <div className={classes.icons}>
                <img src={job} alt="job" className={classes.job} />
                <img src={line} alt="line" className={classes.line} />
              </div>
              <div className={classes.explain}>
                <div
                  className={classes.period}
                  style={{
                    backgroundColor: props.toLightBlack,
                    color: props.toBlack,
                  }}
                >
                  2019 - 2024
                </div>
                <h1 className={classes.descript}>bachelor degree</h1>
                <p className={classes.desc}>
                  I am in my final year study of Electronics and Computer
                  Engineering, with a solid foundation in computers and
                  softwares in the prestigious university "Lagos State
                  University". I am ready to embark on a rewarding career and
                  make meaningful contributions to the field. With a solid
                  educational foundation, a passion for learning, and a drive to
                  succeed, I am ready to embark on the next chapter of my
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Experience;
