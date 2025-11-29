import { FaEyeSlash, FaEye } from "react-icons/fa6";

interface InputLabelProps {
  label: string;
  inputType: "text" | "password" | "email" | "number";
  toggle?: boolean;
  hidePassword?: () => void;
}
const InputLabel = ({ label, inputType, toggle, hidePassword }: InputLabelProps) => {
  return (
    <div className="flex justify-between items-center">
      <label
        htmlFor={label}
        className="capitalize font-bold"
      >
        {label}
      </label>
      {label === "password" && (
        <div
          className="p-2"
          onClick={hidePassword}
        >
          {toggle ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};
export default InputLabel;
