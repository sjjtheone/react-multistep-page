import { Fragment } from "react";
const SignUp = (props) => {
  const userNameHandler = (val) => {
    if (val.target.value.length > 0) {
      props.state.username = val.target.value;
    } else {
      props.state.username = "";
    }
  };

  return (
    <Fragment>
      <h1>JJ's React test site (shared hosting)</h1>
      <h3>Sign Up</h3>
      <label></label>
      <input type="text" id="username" onChange={userNameHandler} />
      <button onClick={props.next}>Next</button>
    </Fragment>
  );
};

export default SignUp;
