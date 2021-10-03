import { useState } from "react";
import Final from "./Final";
import SignUp from "./SignUp";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const state = {
  step: 1,
  email: "",
  username: "",
  age: "",
  dob: "",
  address: "",
  phone: "",
};

let content = "";

const Main = () => {
  const [step, setStep] = useState(1);

  const nextStepHandler = () => {
    if (step !== 5) {
      setStep(step + 1);
    }
  };

  const prevStepHandler = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };
  state.step=step;

  switch (step) {
    case 2:
      content = <Step2 next={nextStepHandler} prev={prevStepHandler} state={state} />;
      break;
    case 3:
      content = <Step3 next={nextStepHandler} prev={prevStepHandler} state={state} />;
      break;
    case 4:
      content = <Step4 next={nextStepHandler} prev={prevStepHandler} state={state} />;
      break;
    case 5:
      content = <Final prev={prevStepHandler} state={state} />;
      break;
    default: {
      content = <SignUp next={nextStepHandler} state={state} />;
    }
  }

  console.log(state.step);

  // const stepHandler = (action) => {
  //   if (action === "next" && step !== 5) {
  //     setStep((prevStat) => {
  //       step = prevStat + 1;
  //     });
  //   } else if (action === "prev" && step !== 1) {
  //     setStep((prevStat) => {
  //       step = prevStat - 1;
  //     });
  //   }
  //   state.step = step;
  // };
  return <div>{content}</div>;
};

export default Main;
