import { useState } from "react";

const filterOptions = [
    {
        type: "TransactionType",
        options: ["all", "income", "expense"]
    },
    {
        type: "Category",
        options: [
            "all",
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
        ]
    },
    {
        type: "Date range",
        options: [
            { label: "Start Date", value: "" },
            { label: "End Date", value: "" }
        ]
    },
    {
        type: "Amount range",
        options: [
            { label: "Min Amount", value: "" },
            { label: "Max Amount", value: "" }
        ]
    }
];

const sortOptions = [
    {
        criteria: "date",
        orders: ["asc", "desc"]
    },
    {
        criteria: "amount",
        orders: ["asc", "desc"]
    },
    {
        criteria: "category",
        orders: ["asc", "desc"]
    },
    {
        criteria: "description",
        orders: ["asc", "desc"]
    }
];

let options = [];

const isObj = typeof options === "object";

export default function ListItemsForm() {
    const [filterMethod, setFilterMethod] = useState(filterOptions[0].type);

    const [filterOption, setFilterOption] = useState([]);

    const [sortMethod, setSortMethod] = useState("");

    const [sortOption, setSortOption] = useState("");

    function handleFiltering(e) {
        const method = e.target.value;
        setFilterMethod(method);
    }

    function getFilteringOptions(method) {
        return filterOptions.filter(opt => {
            return opt.type === method;
        })[0].options;
    }

    options = [...getFilteringOptions(filterMethod)];

    return (
        <div className="bg-color-9 py-5 px-2">
            <h1 className="text-4xl text-color-7 font-bold uppercase">
                All {<br />} expenses
            </h1>
            <div className="flex flex-col justify-between pt-5">
                <h1 className="text-2xl text-color-2">Filtering</h1>
                <div className="flex justify-between items-center">
                    <div className="border border-2 border-red-300">
                        <label htmlFor="filteringType" className="text-color-2">
                            Filter by:
                        </label>
                        <br />
                        <select
                            id="filteringType"
                            name="filteringType"
                            value={filterMethod}
                            onChange={handleFiltering}
                            className="bg-color-2
                text-color-8 border-none outline-none p-2 rounded"
                        >
                            {filterOptions.map((option, index) => {
                                return (
                                    <option key={index} id={index}>
                                        {option.type}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="border border-2 border-red-300">
                        <label htmlFor="expenseType" className="text-color-2">
                            Options:
                        </label>
                        <br />
                        <select
                            id="expenseType"
                            name="expenseType"
                            className="w-full b0g-color-2
                text-color-8 bg-color-2 border-none outline-none p-2 rounded"
                        ></select>
                    </div>
                </div>
            </div>
        </div>
    );
}
