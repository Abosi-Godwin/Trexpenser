import { useState, useEffect } from "react";

import ListItem from "./Utilities/ListItem.jsx";
import ListItemsForm from "./Utilities/ListItemsForm.jsx";
import EditItemsForm from "./Utilities/EditItemsForm.jsx";
import DeleteDataForm from "./Utilities/DeleteDataForm.jsx";
export default function Expenses({ expenseItems, onCurrencyFormat }) {
    const [expenses, setExpenses] = useState([...expenseItems].reverse());
    const [dataToEdit, setDataToEdit] = useState("");
    const [dataToDelete, setDataToDelete] = useState("");

    function hideEditForm() {
        setDataToEdit("");
    }

    function handleDataEdit(data) {
        setDataToEdit(data);
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
        setDataToDelete("");
    }
    useEffect(
        function () {
            setExpenses([...expenseItems].reverse());
        },
        [expenseItems]
    );
    return (
        <div className="flex flex-col gap-2 pb-5">
            <ListItemsForm />
            {dataToEdit && (
                <EditItemsForm
                    data={dataToEdit}
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
                            onDataEdit={handleDataEdit}
                            onDataDelete={handleDataToDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}
