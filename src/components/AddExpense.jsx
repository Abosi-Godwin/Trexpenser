import { useState } from "react";
import Button from "./Utilities/Inputs/Button.jsx";
import DateInput from "./Utilities/Inputs/DateInput.jsx";
import Input from "./Utilities/Inputs/Input.jsx";
import Categories from "./Utilities/Inputs/Categories.jsx";

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

function AddExpense({ expenses, onFormSubmit }) {
    const [expenseType, setExpenseType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

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
            const newExpense = {
                id: expenses.length + 1,
                type: expenseType,
                category,
                description,
                amount,
                date
            };
            onFormSubmit(newExpense);
            setDescription("");
            setAmount("");
        }
    }
    return (
        <div className="bg-color-3 py-6 px-2 text-color-8">
          
            <h1 className="text-2xl font-bold text-color-8">
                Add a new transaction
            </h1>
            
            <form
                className="border-2 border-color-5 p-3 flex flex-col gap-3
            rounded mt-2.5"
            >
                <div className="w-full flex justify-between gap-4">
                    <div className="row w-50">
                        <label htmlFor="expenseType" className="text-color-8">
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
                            <option value="" disabled>
                                Transaction type
                            </option>

                            <Categories option="income" />
                            <Categories option="expense" />
                        </select>
                    </div>
                    <div className="row w-50">
                        <label htmlFor="category" className="text-color-8">
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
                                Select category:
                            </option>
                            {(expenseType === "income"
                                ? incomeCategories
                                : expenseCategories
                            ).map((cat, ind) => <Categories key={ind} option={cat} />
                            )}
                        </select>
                    </div>
                </div>

                <div>
                    <Input
                        label="description"
                        inputType="text"
                        initialValue={description}
                        onHandleInputChange={handleDescriptionChange}
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
                <div className="flex justify-between">
                    <DateInput
                        date={date}
                        minDate=""
                        maxDate={date}
                        setDate={setDate}
                        style="outline-none rounded
                    text-color-8 bg-color-2 p-2"
                        onHandleDateChange={handleDateChange}
                    />

                    <Button
                        text="Add"
                        style="w-32 bg-color-4 uppercase p-3 rounded text-color-8
        hover:bg-color-6 hover:text-color-2 font-bold text-xl"
                        onButtonClick={handleFormSubmit}
                    />
                </div>
            </form>
        </div>
    );
}
export default AddExpense;
