import MiniLoader from "./MiniLoader";

interface ButtonProps {
  text: string;
  className: string;
  loader: boolean;
  disable: boolean;
}

export default function Button({
  text = "add text",
  className = "bg-blue-500 text-white p-2 rounded-md outline-none font-semibold",
  loader,
  disable = false,
}: ButtonProps) {
  return (
    <button
      className={className}
      disabled={disable}
    >
      {loader ? <MiniLoader /> : text}
    </button>
  );
}
