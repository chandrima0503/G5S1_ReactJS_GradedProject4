import classes from "./Button.module.css";

const Button = (props) => {
  const handleOnClick = () => {
    if (typeof props.handleClick === "function") {
      props.handleClick();
    }
  };

  return (
    <>
      <button
        className={`${classes.btn} ${props.className}`}
        onClick={handleOnClick}
      >
        <p>{props.data}</p>
      </button>
    </>
  );
};

export default Button;
