import React, { useEffect } from "react";

const DateInput = ({
    date = "",
    label,
    maxDate,
    minDate,
    setDate,
    style = "",
    onHandleInputChange
}) => {
    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setDate(currentDate);
    }, []);

    return (
        <div>
            <label htmlFor="date-input">{label}</label>
            <input
                type="date"
                id="date-input"
                value={date}
                max={maxDate}
                min={minDate}
                className={style}
                onChange={e => onHandleInputChange(e.target.value, setDate)}
            />
        </div>
    );
};

export default DateInput;
