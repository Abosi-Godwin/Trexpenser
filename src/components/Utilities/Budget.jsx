import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa6";
import { FaDeleteLeft } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import EdithAndDelBtn from "./EdithAndDelBtn.jsx";

function Budget({ budget, expenses, onCurrencyFormat }) {
    const allExpenses = expenses.filter(
        expense => expense.category === budget.category
    );

    const [deBudget, setDeBudgets] = useState(budget);

    const [trackingCategory, setTrackingCategory] = useState(deBudget.category);

    const startDate = deBudget.startDate;

    const endDate = deBudget.endDate;

    const [spendingLimit, setSpendingLimit] = useState(deBudget.amount);

    const [totalSpent, setTotalSpent] = useState(
        allExpenses
            .filter(
                budget => budget.date >= startDate && budget.date <= endDate
            )
            .filter(data => trackingCategory.includes(data.category))
            .map(data => data.amount)
            .reduce((acc, ini) => acc + ini, 0)
    );
  
    const [spentPercent, setSpentPercent] = useState(
        (totalSpent / spendingLimit) * 100
    );

    useEffect(() => {
        const newTotalSpent = allExpenses
            .filter(
                budget => budget.date >= startDate && budget.date <= endDate
            )
            .filter(data => trackingCategory.includes(data.category))
            .map(data => data.amount)
            .reduce((acc, ini) => acc + ini, 0);
        setTotalSpent(newTotalSpent);
    }, [allExpenses]);

    useEffect(() => {
        if (spendingLimit > 0) {
            setSpentPercent((totalSpent / spendingLimit) * 100);
        }
    }, [totalSpent, spendingLimit]);

    return (
        <li
            className="list-none flex
                                                    items-center justify-between
                                                border bg-color-6 text-color-2
                                                rounded-md p-2"
        >
            <div>
                <h1 className="text-xl">{budget.category}</h1>
                <h1 className="font-extrabold">
                    {onCurrencyFormat(budget.amount)}
                </h1>
                <ProgressBar
                    completed={totalSpent}
                    maxCompleted={spendingLimit}
                    bgColor="#9190e9"
                    baseBgColor="#f0f2fd"
                    customLabel={`${Math.trunc(spentPercent)}%`}
                    height={10}
                    labelSize={10}
                />
                <p>
                    {budget.startDate.replace(/-/g, "/")} -{" "}
                    {budget.endDate.replace(/-/g, "/")}
                </p>
            </div>
            <EdithAndDelBtn />
        </li>
    );
}
export default Budget;
