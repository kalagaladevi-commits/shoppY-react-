import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <svg className="loader" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
};

export default Loader;
