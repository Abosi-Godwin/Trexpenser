export default function Button({ text, style, onButtonClick }) {
    return (
        <button className={style} onClick={onButtonClick}>
            {text}
        </button>
    );
}
