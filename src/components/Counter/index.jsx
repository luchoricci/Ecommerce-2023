

const Counter = ({ counter, onIncrementCounter, onDecrementCounter,isValidCounter }) => {
  return (
    <div className="counterContainer">
      <h1>Counter</h1>
      <div className="buttonContainer">
        <button
          onClick={onDecrementCounter}
          disabled={!isValidCounter}
          type="button"
          className="counterButton"
        >
          -
        </button>
        <p className="counterText">{counter}</p>
        <button
          onClick={onIncrementCounter}
          type="button"
          className="counterButton"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
