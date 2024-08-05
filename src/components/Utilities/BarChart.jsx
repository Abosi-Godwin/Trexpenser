import "chartjs-adapter-moment";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    defaults
} from "chart.js/auto";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BarChart({ datas, onCurrencyFormat }) {
    const options = {
        responsive: true,
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "MMM DD, YYYY"
                },
                title: {
                    display: true,
                    text: "Date"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Amount"
                },
                min: 0
            }
        },
        plugins: {
            legend: {
                position: "top",
                display: true
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        label += onCurrencyFormat(context.raw.y);
                        return label;
                    }
                }
            },
            title: {
                display: "true",
                text: "Income Vs. Expenses Over Time"
            }
        }
    };
    const data = {
        datasets: [
            {
                label: "Income",
                data: datas
                    .filter(d => d.type === "income")
                    .map(d => ({ x: d.date, y: d.amount })),
                borderRadius: 9,
                backgroundColor: "#413877"
            },
            {
                label: "Expenses",
                data: datas
                    .filter(d => d.type === "expense")
                    .map(d => ({ x: d.date, y: d.amount })),
                borderRadius: 9,
                backgroundColor: "#7c74e0"
            }
        ]
    };

    return (
        <div className="h-96 p-2">
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
