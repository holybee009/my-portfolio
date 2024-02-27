import classes from "./modal.module.css";
import cancel from "./../../assets/cancel.svg";
interface close {
  closeBox: () => void;
  toLightBlack: string;
  toBlack: string;
}

function Modal(props: close) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.closeBox} />
      <dialog
        open
        className={classes.modal}
        style={{ backgroundColor: props.toLightBlack }}
      >
        <img
          src={cancel}
          alt="cancel"
          className={classes.cancel}
          onClick={props.closeBox}
        />
        <p className={classes.body} style={{ color: props.toBlack }}>
          I am passionate about graphic design and frontend development, I
          combine creativity and technical skill to create impactful visual
          experiences. with strong background in graphic design and expertise in
          web development, I create
          <span className={classes.gold}>
            Aesthetic, intuitive & responsive user interfaces.
          </span>
          I enjoy taking on challenges and collaborating with clients to bring
          thier idea to life through high and responsive web pages and web
          experience.
        </p>
      </dialog>
    </>
  );
}

export default Modal;
