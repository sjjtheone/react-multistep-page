import { useState } from "react";

const Step4 = (props) => {
  const [phone, setPhone] = useState(props.state.phone);
  const [address, setAddress] = useState(props.state.address);

  const phoneHandler = (val) => {
    if (val.target.value.length > 0) {
      setPhone(val.target.value);
    } else {
      setPhone("");
    }
    props.state.phone = phone;
  };

  const addressHandler = (val) => {
    if (val.target.value.length > 0) {
      setAddress(val.target.value);
    } else {
      setAddress("");
    }
    props.state.address = address;
  };

  return (
    <div>
      <h1>Step 4</h1>
      <div>
        <label>Phone</label>
        <input type="number" onChange={phoneHandler} value={phone} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" onChange={addressHandler} value={address} />
      </div>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
};

export default Step4;
