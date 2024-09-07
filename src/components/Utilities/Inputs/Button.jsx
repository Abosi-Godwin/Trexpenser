export default function Button({ text ="add text", style="",
onButtonClick}) {
    return (
      <div>
        <button className={style} onClick={onButtonClick}>
            {text}
        </button>
        </div>
    );
}
