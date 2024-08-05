import ListItem from "./Utilities/ListItem.jsx";
import ListItemsForm from "./Utilities/ListItemsForm.jsx";
export default function Expenses({ expenseItems, onCurrencyFormat }) {
    const expenses = [...expenseItems].reverse();
   function handleDataEdith(data){
     console.log(data);
   }
   
    return (
        <div className="flex flex-col gap-2 pb-5">
            <ListItemsForm />
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
