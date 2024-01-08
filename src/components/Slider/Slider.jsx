import "./styles.css";

const Slider = ({ children }) => {
  return (
    <div className="slider">
      <button className="previousButton">
        <span>&lt;</span>
      </button>
      <button className="nextButton">
        <span>&gt;</span>
      </button>
      <div className="sliderContainer">{children}</div>
    </div>
  );
};

export default Slider;
