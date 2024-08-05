import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({
    datas,
    title,
    category,
    doughnutDatas,
    onCurrencyFormat
}) {
    const titles = doughnutDatas(datas, category).titles;

    const amounts = doughnutDatas(datas, category).amounts;

    const data = {
        labels: titles,

        datasets: [
            {
                label: "Amount",
                data: amounts,
                backgroundColor: [
                    "#b0b4f1",
                    "#9190e9",
                    "#7c74e0",
                    "#7866d5",
                    "#5e4ab8",
                    "#4c3e95",
                    "#413877",
                    "#ced2f7"
                ],
                borderColor: [
                    "#b0b4f1",
                    "#9190e9",
                    "#7c74e0",
                    "#7866d5",
                    "#5e4ab8",
                    "#4c3e95",
                    "#413877",
                    "#ced2f7"
                ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: title
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        label += onCurrencyFormat(context.raw);
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div className="h-96 p-2 border text-color-3">
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DoughnutChart;
