interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button"
  loading: boolean;
}

export default function Button({ text, type, loading }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-light-primaryCTA text-white flex items-center justify-center font-extrabold rounded-md p-2 uppercase w-full hover:bg-light-secondaryAccent"
      disabled={loading}
    >
      {loading ? "loading" : text}
    </button>
  );
}
