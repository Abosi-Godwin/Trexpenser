import { useState, useEffect } from "react";
import Input from "./Utilities/Inputs/Input.jsx";
import Button from "./Utilities/Inputs/Button.jsx";
import DateInput from "./Utilities/Inputs/DateInput.jsx";
import { Toaster, toast } from "alert";

function SavingGoals({ savings }) {
    return (
        <div className="bg-color-2 py-6 px-2">
            <div className="flex flex-col gap-3">
                <h1 className="uppercase text-4xl font-extrabold text-color-4">
                    Saving {<br />} Goals
                </h1>
                <p className="text-color-5 font-bold">
                    Achieve your financial dreams with tailored savings goals.
                </p>
            </div>
            <div className="py-8">
                <h3 className="text-xl font-bold text-color-8">
                    Add a new goal
                </h3>
                <form></form>
            </div>
        </div>
    );
}

export default SavingGoals;
