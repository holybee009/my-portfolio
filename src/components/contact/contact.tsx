import classes from "./contact.module.css";
import locate from "./../../assets/location.svg";
import mail from "./../../assets/mail.svg";
import call from "./../../assets/call.svg";
import Navigate, { List } from "../nav-components/navigate";
import send from "./../../assets/send.svg";
import facebook from "./../../assets/facebook.svg";
import twitter from "./../../assets/twitter.svg";
import linkedin from "./../../assets/linkedin.svg";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Reveal } from "../about-me/reveal/reveal";

interface Props {
  componentRef: any;
  scrollToComponent: (_: string) => void;
  toBlack: string;
  toWhite: string;
  toLightBlack: string;
}

function Contact(props: Props) {
  const [inputState, setInputState] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
  });
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_ih5dc1e", "template_mg8d4ye", form.current, {
          publicKey: "50Sfqy8asR_Rfmsdq",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("message sent");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("message failed");
          }
        );
    }
    setInputState({ first: "", second: "", third: "", forth: "" });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    param: string
  ) => {
    if (param === "first") {
      setInputState((prevState) => ({ ...prevState, first: e.target.value }));
    } else if (param === "second") {
      setInputState((prevState) => ({ ...prevState, second: e.target.value }));
    } else if (param === "third") {
      setInputState((prevState) => ({ ...prevState, third: e.target.value }));
    } else if (param === "forth") {
      setInputState((prevState) => ({ ...prevState, forth: e.target.value }));
    }
  };

  return (
    <>
      <Reveal>
        <div ref={props.componentRef}>
          <div className={classes.headerPart}>
            <h1 className={classes.back} style={{ color: props.toLightBlack }}>
              contact
            </h1>
            <h1 className={classes.front} style={{ color: props.toBlack }}>
              get in <span className={classes.touch}>touch</span>
            </h1>
          </div>
          <div className={classes.contact}>
            <div className={classes.leftSide}>
              <h1 className={classes.top}>dont be shy!</h1>
              <p className={classes.bodyText}>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or oppurtunities to be
                part of your visions.
              </p>
              <div className={classes.address}>
                <img src={locate} alt="locate" />
                <div className={classes.point}>
                  <h1 className={classes.heads}>address point</h1>
                  <p className={classes.locate}>
                    3, sikiru giwa street,ikotun, alimosho, lagos state.
                  </p>
                </div>
              </div>
              <div className={classes.address}>
                <img src={mail} alt="mail" />
                <div className={classes.point}>
                  <h1 className={classes.heads}>mail me</h1>
                  <p className={classes.locate}>
                    abdulmuminoluwafemioshodi@gmail.com
                  </p>
                </div>
              </div>
              <div className={classes.address}>
                <img src={call} alt="call" />
                <div className={classes.point}>
                  <h1 className={classes.heads}>call me</h1>
                  <p className={classes.locate}>+2349027559089</p>
                </div>
              </div>
              <div className={classes.socials}>
                <a
                  href="https://www.facebook.com/abdulmumin.oshodi"
                  target="_blank"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className={classes.social}
                  />
                </a>
                <a
                  href="https://x.com/haybeeholy?t=Mw7jqeVJA5LPAmDN337WkA&s=09"
                  target="_blank"
                >
                  <img src={twitter} alt="twitter" className={classes.social} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oshodi-abdulmumin-6482a6274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className={classes.social}
                  />
                </a>
              </div>
            </div>
            <div className={classes.rightSide}>
              <form ref={form} onSubmit={sendEmail}>
                <div className={classes.topInput}>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="YOUR NAME"
                    className={classes.names}
                    value={inputState.first}
                    onChange={(e) => handleChange(e, "first")}
                    style={{
                      color: props.toBlack,
                      backgroundColor: props.toLightBlack,
                    }}
                  />
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="YOUR EMAIL"
                    className={classes.emails}
                    value={inputState.second}
                    onChange={(e) => handleChange(e, "second")}
                    style={{
                      color: props.toBlack,
                      backgroundColor: props.toLightBlack,
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="YOUR SUBJECT"
                  name="subject"
                  className={classes.subjects}
                  value={inputState.third}
                  onChange={(e) => handleChange(e, "third")}
                  style={{
                    color: props.toBlack,
                    backgroundColor: props.toLightBlack,
                  }}
                />
                <textarea
                  name="message"
                  id={classes.message}
                  placeholder="YOUR MESSAGE"
                  cols={70}
                  rows={7}
                  style={{
                    color: props.toBlack,
                    backgroundColor: props.toLightBlack,
                  }}
                  value={inputState.forth}
                  onChange={(e) => handleChange(e, "forth")}
                ></textarea>
                <button
                  type="submit"
                  className={classes.moreAbout}
                  style={{ color: props.toBlack }}
                >
                  <p className={classes.moreMe}> send message</p>
                  <img src={send} alt="send" className={classes.send} />
                </button>
              </form>
            </div>
            <div className={classes.nav}>
              <Navigate
                active={List.touch}
                scrollToComponent={props.scrollToComponent}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Contact;
