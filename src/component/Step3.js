import { useState } from "react";

const Step3 = (props) => {
  const [age, setAge] = useState();
  const [dob, setDob] = useState();
  const ageHandler = (val) => {
    if (val.target.value.length > 0) {
      setAge(val.target.value);
    } else {
      setAge("");
    }
    props.state.age = age;
  };

  const dobHandler = (val) => {
    if (val.target.value.length > 0) {
      setDob(val.target.value);
    } else {
      setDob("");
    }
    props.state.dob = dob;
  };

  return (
    <div>
      <h1>Step 3</h1>
      <div>
        <label>Age</label>
        <input type="number" onChange={ageHandler} value={age} />
      </div>
      <div>
        <label>DoB</label>
        <input type="date" onChange={dobHandler} value={dob} />
      </div>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default Step3;
