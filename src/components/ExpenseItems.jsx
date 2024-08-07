import { useState } from "react";

import ListItem from "./Utilities/ListItem.jsx";
import ListItemsForm from "./Utilities/ListItemsForm.jsx";
import EditItemsForm from "./Utilities/EditItemsForm.jsx";
export default function Expenses({ expenseItems, onCurrencyFormat }) {
    const expenses = [...expenseItems].reverse();
    const [dataToEdith, setDataToEdith] = useState("");

    function handleDataEdith(data) {
        setDataToEdith(data);
    }
    function hideForm() {
        setDataToEdith("");
    }
    return (
        <div className="flex flex-col gap-2 pb-5">
            <ListItemsForm />
            {dataToEdith && (
                <EditItemsForm data={dataToEdith} onFormHide={hideForm} />
            )}

            <div className="grid gap-4 p-4 md:grid md:grid-cols-2">
                {expenses.map(expense => {
                    return (
                        <ListItem
                            expenseDetails={expense}
                            key={expense.id}
                            onCurrencyFormat={onCurrencyFormat}
                            onDataEdith={handleDataEdith}
                        />
                    );
                })}
            </div>
        </div>
    );
}
