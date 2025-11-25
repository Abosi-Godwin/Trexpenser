import InputLabel from "./InputLabel";
interface InputProps {
  label: string;
  placeholder: string;
  inputType: string;
  register: object;
  rules: string;
  error: string;
  disable: boolean;
  toggle: ()=> void;
  noLabel: boolean;
  onHidePassword: ()=>void;
  className: string;
}
export default function Input({
  label,
  placeholder,
  inputType,
  register,
  rules,
  error,
  disable,
  toggle,
  noLabel,
  onHidePassword,
  className = "bg-light-sectionBackground text-light-text dark:bg-dark-sectionBackground dark:text-dark-text border-none outline-none p-2 rounded",
}:InputProps ) {
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
        {...register(name, rules)}
      />
      {error[label.split(" ").at(-1)] && (
        <p className="text-red-500 text-sm mt-1">{error[label.split(" ").at(-1)].message}</p>
      )}
    </>
  );
}
