import InputLabel from "./InputLabel";
interface InputProps {
  label: string;
  placeholder: string;
  inputType: "text" | "password" | "email" | "number";
  className: string;
  disable?: boolean;
  toggle?: boolean | undefined;
  noLabel?: boolean;
  onHidePassword?: () => void;
}
export default function Input({
  label,
  placeholder,
  inputType,
  disable,
  toggle,
  noLabel,
  onHidePassword,
  className = "bg-light-sectionBackground text-light-text dark:bg-dark-sectionBackground dark:text-dark-text border-none outline-none p-2 rounded",
}: InputProps) {
  const name = label.split(" ").at(-1);

  return (
    <>
      {!noLabel && (
        <InputLabel
          label={label}
          inputType={inputType}
          toggle={toggle}
          hidePassword={onHidePassword}
        />
      )}
      <input
        id={label}
        type={inputType}
        placeholder={placeholder}
        disabled={disable}
        className={className}
      />
    </>
  );
}
