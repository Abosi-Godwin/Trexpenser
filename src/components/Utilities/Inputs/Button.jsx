export default function Button({ text ="add text", style="",
onButtonClick}) {
    return (
        <button className={style} onClick={onButtonClick}>
            {text}
        </button>
    );
}
