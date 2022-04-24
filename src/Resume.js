import { useState } from "react";
import ReactiveButton from "reactive-button";

function Resume() {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 3000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      onClick={onClickHandler}
      color={"#dc143c"}
      idleText={"Résumé"}
      loadingText={"Loading"}
      successText={"Success"}
      errorText={"Error"}
      type={"button"}
      className={"class1 class2"}
      style={{ borderRadius: "5px" }}
      outline={true}
      shadow={true}
      rounded={true}
      size={"large"}
      block={false}
      messageDuration={3000}
      disabled={false}
      buttonRef={null}
      width={null}
      height={null}
      animation={true}
      a={true}
    />
  );
}

export default Resume;
