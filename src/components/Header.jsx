import { FaBars } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

function Header({ expenses, currencyFormater }) {
    const balance = currencyFormater(
        expenses.reduce(
            (ac, ini) =>
                ini.type === "income" ? ac + ini.amount : ac - ini.amount,
            0
        )
    );
    return (
        <div className="flex flex-col gap5-54">
            <div
                className="w-full p-3 flex justify-between
            bg-color-8"
            >
                <div
                    className="text-2xl text-color-2 uppercase flex
                items-center justify-center"
                >
                    Trexpenser.
                </div>
                <div>
                    <h1 className="text-2xl bg-color-2 p-2 text-color-8 rounded">
                        <FaBars />
                    </h1>
                </div>
            </div>
            <div className="w-screen py-6">
                <div
                    className="w-full bg-color-1 flex items-center
                justify-center"
                >
                    <div
                        className="w-9/10 bg-color-3 text-color-8 p-3
                    rounded-md md:w-96"
                    >
                        <h2
                            className="text-4xl
                        font-bold"
                        >
                            {balance}
                        </h2>
                        <p className="italic tracking-wider text-sm flex">
                            18% {<FaArrowTrendUp />} increase on income
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
