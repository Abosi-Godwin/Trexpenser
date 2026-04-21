import InputLabel from "./InputLabel";
interface InputProps {
  label: string;
  placeholder: string;
  inputType: "text" | "password" | "email";
  className?: string;
  disable?: boolean;
  toggle?: boolean | undefined;
  onHidePassword?: () => void;
}
export default function Input({
  label,
  placeholder,
  inputType,
  disable,
  toggle,
  onHidePassword,
  className,
}: InputProps) {
  return (
    <>
      <InputLabel
        label={label}
        inputType={inputType}
        toggle={toggle}
        hidePassword={onHidePassword}
      />

      <input
        id={label}
        name={label}
        type={inputType}
        placeholder={placeholder}
        disabled={disable}
        className={className}
      />
    </>
  );
}
