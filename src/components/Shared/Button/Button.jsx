import { useState } from "react";
import PropTypes from "prop-types";
import { TbFidgetSpinner } from "react-icons/tb";

const Button = ({
  value,
  submit,
  fullWidth,
  rounded,
  dark,
  Icon,
  bordered,
  isLoading,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`md:text-xl px-5 py-[6px] md:py-[10px] text-white relative overflow-hidden group z-10 hover:text-white duration-1000 ${
        fullWidth ? "w-full" : ""
      } ${rounded ? "rounded-full" : "rounded-md"} ${
        Icon ? "flex items-center justify-center" : ""
      } ${dark ? "bg-dark" : "bg-primary"} ${isClicked ? "scale-95" : ""} ${
        bordered ? "border border-white" : ""
      }`}
      onClick={handleButtonClick}
    >
      <span
        className={`absolute ${dark ? "bg-primary" : "bg-dark"} w-0 h-14 ${
          fullWidth ? "group-hover:w-[500px]" : "group-hover:w-[250px]"
        } group-hover:w-[250px] group-hover:h-[250px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-x-100 scale-x-0 -z-10 group-hover:duration-700 duration-500 origin-center transition-all`}
      ></span>
      {Icon && !isLoading && <Icon className="mr-3 text-2xl" />}{" "}
      {isLoading ? (
        <TbFidgetSpinner className="w-fit mx-auto text-2xl md:text-[28px] animate-spin" />
      ) : (
        value
      )}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  submit: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  dark: PropTypes.bool,
  bordered: PropTypes.bool,
  Icon: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;
