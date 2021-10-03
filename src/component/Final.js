const Final = (props) => {
  console.log(props.state);

  const capitalizeFirstChar = (phrase) => {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  };

  return (
    <div>
      <h1>Final</h1>
      {Object.keys(props.state).map((key) => {
        return (
          <div>
            <span>{capitalizeFirstChar(key)}</span>
            <span> : </span>
            <span>{props.state[key]}</span>
          </div>
        );
      })}
      <button onClick={props.prev}>Prev</button>
    </div>
  );
};

export default Final;
