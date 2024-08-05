export default function Input({
    max,
    label = "",
    inputType,
    placeholder,
    initialValue,
    onHandleInputChange
}) {
    return (
        <>
            <label htmlFor={label} className="text-color-8 capitalize">
                {" "}
                {label}
            </label>
            <input
                id={label}
                maxLength={max}
                type={inputType}
                value={initialValue}
                placeholder={placeholder}
                onChange={onHandleInputChange}
                requured="true"
                className="w-full
                text-color-8 bg-color-2 border-none outline-none p-2 rounded
                placeholder:text-color-4"
            />
        </>
    );
}
