"use client";
import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string;
}

export default function FormBtn({ text }: ButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="bg-light-primaryCTA text-white flex items-center justify-center font-extrabold rounded-md p-2 uppercase w-full hover:bg-light-secondaryAccent"
            disabled={pending}
        >
            {pending ? "loading..." : text}
        </button>
    );
}
