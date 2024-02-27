import Header from "./../src/components/header/header";
import About from "./../src/components/about-me/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/my-portfolio/portfolio";
import { useRef, useState } from "react";
import ButtonToggle from "./components/button-toggle/buttonToggle";
import "./App.css";

function App() {
  const componentRef1 = useRef<HTMLDivElement>(null);
  const componentRef2 = useRef<HTMLDivElement>(null);
  const componentRef3 = useRef<HTMLDivElement>(null);
  const componentRef4 = useRef<HTMLDivElement>(null);
  const [toggleBlack, setToggleBlack] = useState<string>("#fff");
  const [toggleWhite, setToggleWhite] = useState<string>("#000");
  const [toggleLightBlack, setToggleLightBlack] = useState<string>("#1f1f1f");
  const handleToggle = () => {
    toggleBlack === "#fff" ? setToggleBlack("#000") : setToggleBlack("#fff");
    toggleWhite === "#000" ? setToggleWhite("#fff") : setToggleWhite("#000");
    toggleLightBlack === "#1f1f1f"
      ? setToggleLightBlack("#fff")
      : setToggleLightBlack("#1f1f1f");
  };
  const scrollToComponent = (val: string) => {
    if (val === "home") {
      componentRef1.current
        ? componentRef1.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          })
        : null;
    } else if (val === "about") {
      componentRef2.current
        ? componentRef2.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          })
        : null;
    } else if (val === "portfolio") {
      componentRef3.current
        ? componentRef3.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          })
        : null;
    } else if (val === "touch") {
      componentRef4.current
        ? componentRef4.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          })
        : null;
    }
  };
  return (
    <>
      <div
        className="app"
        style={{ color: toggleBlack, backgroundColor: toggleWhite }}
      >
        <ButtonToggle toggle={handleToggle} toggleWhite={toggleBlack} />
        <Header
          scrollToComponent={scrollToComponent}
          componentRef={componentRef1}
          toBlack={toggleBlack}
          toWhite={toggleWhite}
          toLightBlack={toggleLightBlack}
        />
        <About
          scrollToComponent={scrollToComponent}
          componentRef={componentRef2}
          toBlack={toggleBlack}
          toWhite={toggleWhite}
          toLightBlack={toggleLightBlack}
        />
        <Portfolio
          scrollToComponent={scrollToComponent}
          componentRef={componentRef3}
          toBlack={toggleBlack}
          toLightBlack={toggleLightBlack}
        />
        <Contact
          scrollToComponent={scrollToComponent}
          componentRef={componentRef4}
          toLightBlack={toggleLightBlack}
          toBlack={toggleBlack}
          toWhite={toggleWhite}
        />
      </div>
    </>
  );
}

export default App;
