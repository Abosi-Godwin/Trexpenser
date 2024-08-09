import { useState } from "react";

import ListItem from "./Utilities/ListItem.jsx";
import ListItemsForm from "./Utilities/ListItemsForm.jsx";
import EditItemsForm from "./Utilities/EditItemsForm.jsx";
import DeleteDataForm from "./Utilities/DeleteDataForm.jsx";
export default function Expenses({ expenseItems, onCurrencyFormat }) {
    const [expenses, setExpenses] = useState([...expenseItems].reverse());
    const [dataToEdith, setDataToEdith] = useState("");
    const [dataToDelete, setDataToDelete] = useState("");

    function hideEditForm() {
        setDataToEdith("");
    }

    function handleDataEdith(data) {
        setDataToEdith(data);
    }
    function handleDataEditted(data) {
        const index = expenses.findIndex(dt => dt.id === data.id);
        setExpenses(formalExpense =>
            expenses.map(item => (item.id === data.id ? { ...data } : item))
        );
    }

    function hideDeleteForm() {
        setDataToDelete("");
    }

    function handleDataToDelete(data) {
        setDataToDelete(data);
    }

    function handleDataDeleted(data) {

        setExpenses(formalExpense =>
            expenses.filter(item => item.id != data.id)
        );
        setDataToDelete("")
    }

    return (
        <div className="flex flex-col gap-2 pb-5">
            <ListItemsForm />
            {dataToEdith && (
                <EditItemsForm
                    data={dataToEdith}
                    onFormHide={hideEditForm}
                    onFormEditted={handleDataEditted}
                />
            )}
            {dataToDelete && (
                <DeleteDataForm
                    data={dataToDelete}
                    onFormHide={hideDeleteForm}
                    onFormDeleted={handleDataDeleted}
                    onCurrencyFormat={onCurrencyFormat}
                />
            )}
            <div className="grid gap-4 p-4 md:grid md:grid-cols-2">
                {expenses.map(expense => {
                    return (
                        <ListItem
                            expenseDetails={expense}
                            key={expense.id}
                            onCurrencyFormat={onCurrencyFormat}
                            onDataEdith={handleDataEdith}
                            onDataDelete={handleDataToDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
