import { useState } from "react";
import ReactiveButton from "reactive-button";

function Button() {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
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
      size={"medium"}
      block={false}
      messageDuration={2000}
      disabled={false}
      buttonRef={null}
      width={null}
      height={null}
      animation={true}
    />
  );
}

export default Button;
