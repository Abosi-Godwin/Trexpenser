import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import AddExpense from "./components/AddExpense.jsx";
import Expenses from "./components/ExpenseItems.jsx";
import Summary from "./components/Summary.jsx";
import BudgetPlanning from "./components/BudgetPlanning.jsx";
import SavingGoals from "./components/SavingGoals.jsx";
import Footer from "./components/Footer.jsx";
import { datas, budgets, savingsGoals } from "./assets/data/data.js";
import expenesArray from "./assets/data/DoughnutDatas.js";
import "./App.css";

function App() {
    function formatCurrency(number) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(number);
    }
    const [expenses, setExpenses] = useState(datas);

    function handleFormSubmit(expenseObj) {
        setExpenses([...expenses, expenseObj]);
    }
    return (
        <>
            <Header
                data={datas}
                expenses={expenses}
                currencyFormater={formatCurrency}
            />
            <AddExpense expenses={expenses} onFormSubmit={handleFormSubmit} />
            <Expenses
                expenseItems={[...expenses]}
                onCurrencyFormat={formatCurrency}
            />
            <Summary
                datas={expenses}
                doughnutDatas={expenesArray}
                onCurrencyFormat={formatCurrency}
            />
            <BudgetPlanning
                expenesArray={expenses}
                budgets={budgets}
                onCurrencyFormat={formatCurrency}
            />
            <SavingGoals savings={savingsGoals} />
            <Footer />
        </>
    );
}

export default App;
