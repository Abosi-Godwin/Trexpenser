import React, { useEffect } from "react";

const DateInput = ({
    date,
    maxDate,
    minDate,
    setDate,
    style = "",
    onHandleDateChange
}) => {
    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setDate(currentDate);
    }, []);

    return (
        <input
            type="date"
            id="date-input"
            value={date}
            onChange={onHandleDateChange}
            max={maxDate}
            min={minDate}
            className={style}
        />
    );
};

export default DateInput;
