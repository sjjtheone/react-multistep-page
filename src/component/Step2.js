import { useState } from "react";

const Step2 = (props) => {
  const [email, setEmail] = useState("");
  const emailHandler = (val) => {
    if (val.target.value.length > 0) {
      setEmail(val.target.value);
    } else {
      setEmail("");
    }
    props.state.email = email;
  };

  return (
    <div>
      <h1>Step 2</h1>
      <label>Email</label>
      <input type="email" onChange={emailHandler} value={email} />
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default Step2;
