import { useState, useEffect } from "react";
import Input from "./Inputs/Input.jsx";
import Button from "./Inputs/Button.jsx";
import DateInput from "./Inputs/DateInput.jsx";
import Categories from "./Inputs/Categories.jsx";
import { Toaster, toast } from "alert";

function BudgetForm({ budgetCategories, allBudgets, onFormSubmit }) {
    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setCurrentDate(currentDate);
    }, []);

    const [budgetCategory, setBudgetCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const inputValue = event => event.target.value;
    function handleCategoryChange(e) {
        setBudgetCategory(inputValue(e));
    }
    function handleAmountChange(e) {
        setAmount(+inputValue(e));
    }
    function handleStartDateChange(e) {
        setStartDate(inputValue(e));
    }
    function handleEndDateChange(e) {
        setEndDate(inputValue(e));
    }
    function handleFormCancel(e) {
        e.preventDefault();
    }
    function hasBudgetAlert(selectedCategory) {
        toast.error(`${selectedCategory} category is already been tracked.`);
    }
    function submitBudget(category, amount, start, end, id) {
        const budgetData = {
            category: category,
            amount: +amount,
            startDate: start,
            endDate: end,
            Id: id + 1
        };
        onFormSubmit(budgetData);
        setBudgetCategory("");
        setAmount("");
        setStartDate(currentDate);
        setEndDate(currentDate);
    }
    function handleFormSave(e) {
        e.preventDefault();
        if (budgetCategory === "" || +amount === 0) return;

        const existingCategory = (selectedCategory, initialBudgets) =>
            initialBudgets.some(budget => budget.category === selectedCategory);

        const hasBudget = existingCategory(budgetCategory, allBudgets);

        hasBudget
            ? hasBudgetAlert(budgetCategory)
            : submitBudget(
                  budgetCategory,
                  amount,
                  startDate,
                  endDate,
                  allBudgets.length
              );
    }
    return (
        <div
            className="border-2 border-color-3 p-2 rounded
    text-color-3 w-full"
        >
            <div className="py-2">
                <h1 className="text-2xl font-bold">Create new budget.</h1>
                <p className="text-sm font-extralight">
                    Define your spending limit for different categories.
                </p>
            </div>
            <div className="flex items-center justify-center w-full py-3">
                <div className="h-0.5 w-full bg-color-3 rounded-md"></div>
            </div>
            <div>
                <form>
                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <label
                                htmlFor="filteringType"
                                className="text-color-2"
                            >
                                Select category:
                            </label>
                            <br />
                            <select
                                name="filteringType"
                                id="filteringType"
                                value={budgetCategory}
                                onChange={handleCategoryChange}
                                className="bg-color-2
                text-color-8 border-none outline-none p-2 rounded"
                            >
                                <option value="" disabled>
                                    Select the category
                                </option>
                                {budgetCategories.map((option, index) => (
                                    <Categories option={option} key={index}/>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="BudgetAmount">Limit amount:</label>{" "}
                            <br />
                            <Input
                                inputType="number"
                                initialValue={amount}
                                max=""
                                onHandleInputChange={handleAmountChange}
                                placeholder="Enter the amount..."
                            />
                        </div>
                    </div>
                    <div className="py-4">
                        <h1 className="capitalize text-xl">Time frame</h1>
                        <div
                            className="flex justify-between items-center gap-4
                        py-2"
                        >
                            <div className="">
                                <label htmlFor="">Start:</label> <br />
                                <DateInput
                                    date={startDate}
                                    setDate={setStartDate}
                                    maxDate=""
                                    minDate={currentDate}
                                    style="w-full outline-none rounded
                    text-color-8 bg-color-2 p-2"
                                    onHandleDateChange={handleStartDateChange}
                                />
                            </div>

                            <div className="">
                                <label htmlFor="">End:</label> <br />
                                <DateInput
                                    date={endDate}
                                    setDate={setEndDate}
                                    maxDate=""
                                    minDate={startDate}
                                    style="w-full outline-none rounded
                    text-color-8 bg-color-2 p-2"
                                    onHandleDateChange={handleEndDateChange}
                                />
                            </div>
                        </div>
                    </div>

                    <Toaster position="bottom-center" />
                    <div className="flex justify-between py-2">
                        <Button
                            text="Cancel"
                            style="w-32 bg-color-2 uppercase p-2 rounded text-color-8
        hover:bg-color-6 hover:text-color-2 font-bold text-xl"
                            onButtonClick={handleFormCancel}
                        />

                        <Button
                            text="Save"
                            style="w-32 bg-color-6 uppercase p-2 rounded
                            text-color-2
        hover:bg-red-200 hover:text-color-2 font-bold text-xl"
                            onButtonClick={handleFormSave}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BudgetForm;
