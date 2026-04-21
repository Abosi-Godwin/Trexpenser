interface ButtonProps {
    text: string;
    loading: boolean;
    className: string;
}

export default function Button({ text, loading ,className}: ButtonProps) {
    return (
        <button className={className} disabled={loading}>
            {loading ? "loading..." : text}
        </button>
    );
}

/*
 className="bg-light-primaryCTA text-white flex items-center justify-center
 font-extrabold rounded-md p-2 uppercase w-full hover:bg-light-secondaryAccent"
*/
