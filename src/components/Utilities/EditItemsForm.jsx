import AddExpense from "../AddExpense.jsx";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button.jsx";
import DateInput from "./DateInput.jsx";
import Input from "./Input.jsx";

const incomeCategories = [
    "Job",
    "Freelance",
    "Investments",
    "Gifts",
    "Business",
    "Refunds",
    "Bonuses",
    "Other"
];

const expenseCategories = [
    "Food",
    "Housing",
    "Utilities",
    "Transportation",
    "Health",
    "Entertainment",
    "Shopping",
    "Education",
    "Insurance",
    "Savings",
    "Debt Payments",
    "Travel",
    "Office Supplies",
    "Miscellaneous"
];

function EditItemsForm({ data, onFormHide }) {
    const openForm = data?.id;

    const [expenseType, setExpenseType] = useState(data.type);
    const [category, setCategory] = useState(data.category);
    const [description, setDescription] = useState(data.description);
    const [amount, setAmount] = useState(data.amount);
    const [date, setDate] = useState(data.date);

    function onExpenseTypeChange(e) {
        setExpenseType(e.target.value);
    }
    function onCategoryChange(e) {
        setCategory(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    function handleAmountChange(e) {
        setAmount(+e.target.value);
    }
    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (
            expenseType === "" ||
            category === "" ||
            description === "" ||
            amount === ""
        ) {
            return;
        } else {
            const newExpense = {};
            // onFormSubmit(newExpense);
            onFormHide()
            setDescription("");
            setAmount("");
        }
    }
    return (
        openForm && (
            <div
                className="w-screen h-screen bg-color-3 fixed top-0 left-0
            border px-4 flex justify-center items-center"
            >
                <div
                    className="w-full h-fit flex items-center flex-col
                justify-center gap-3 bg-color-6 text-color-2 p-2 rounded-md"
                >
                    <div className="w-full">
                        <h1
                            className="text-color-2 text-2xl font-bold flex
                        justify-end"
                            onClick={onFormHide}
                        >
                            <FaTimesCircle />
                        </h1>{" "}
                    </div>
                    <div>
                        <div>
                            <h1
                                className="text-xl font-bold text-color-2 p-2
                            capitalize"
                            >
                                Edit your "{data.description}" {data.type}
                            </h1>
                        </div>
                        <form
                            className=" p-3 flex flex-col gap-3
            rounded mt-2.5 text-color-2"
                        >
                            <div className="w-full flex justify-between gap-4">
                                <div className="row w-50">
                                    <label
                                        htmlFor="expenseType"
                                        className="text-color-2"
                                    >
                                        Type:
                                    </label>
                                    <br />
                                    <select
                                        id="expenseType"
                                        name="expenseType"
                                        value={expenseType}
                                        onChange={onExpenseTypeChange}
                                        className="w-full bg-color-2
                text-color-8 bg-color-2 border-none outline-none p-2 rounded"
                                    >
                                        <option
                                            value={data.type}
                                            disabled
                                            className="capitalize"
                                        >
                                            {data.type}
                                        </option>
                                    </select>
                                </div>
                                <div className="row w-50">
                                    <label
                                        htmlFor="category"
                                        className="text-color-2"
                                    >
                                        Category:
                                    </label>
                                    <br />
                                    <select
                                        id="category"
                                        name="category"
                                        value={category}
                                        onChange={onCategoryChange}
                                        className="w-full bg-color-2
                text-color-8 bg-color-2 border-none outline-none p-2 rounded"
                                    >
                                        <option value="" disabled>
                                            Change category
                                        </option>
                                        {(expenseType === "income"
                                            ? incomeCategories
                                            : expenseCategories
                                        ).map((cat, ind) => {
                                            return (
                                                <option key={ind}>{cat}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <Input
                                    label="description"
                                    inputType="text"
                                    initialValue={description}
                                    onHandleInputChange={
                                        handleDescriptionChange
                                    }
                                    max="20"
                                    placeholder="A short simple description..."
                                />
                            </div>
                            <div>
                                <Input
                                    label="amount"
                                    inputType="number"
                                    initialValue={amount}
                                    max=""
                                    onHandleInputChange={handleAmountChange}
                                    placeholder="Enter the amount..."
                                />
                            </div>
                            <div className="flex justify-between gap-2">
                                <DateInput
                                    date={data.date}
                                    minDate=""
                                    maxDate={date}
                                    setDate={setDate}
                                    style="outline-none rounded
                    text-color-8 bg-color-2 p-2"
                                    onHandleDateChange={handleDateChange}
                                />

                                <Button
                                    text="Add"
                                    style="w-32 bg-color-4 uppercase p-3 rounded
                                    text-color-8
        hover:bg-color-8 hover:text-color-2 font-bold text-xl"
                                    onButtonClick={handleFormSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
}
export default EditItemsForm;
