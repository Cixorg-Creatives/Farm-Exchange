import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const SmallPie = ({ label1, label2, published, draft }) => {
    const chartData = {
        labels: [label1, label2],
        datasets: [
            {
                label: "Total Count",
                data: [published, draft],
                backgroundColor: ["#747474", "#F6FCDF"],
                hoverBackgroundColor: ["#747474", "#F6FCDF"],
                borderColor: ["#747474", "#F6FCDF"],
                hoverBorderColor: ["#747474", "#F6FCDF"],
                borderWidth: 1,
                hoverOffset: 20,
            },
        ],
    };

    const options = {
        cutout: "80%", // Reduces thickness
        layout: {
            padding: {
                top: 20, // Increases space between labels and chart
            },
        },
        radius: "70%"
    };

    return (
        <div className='p-1 md:p-2 lg:p-4'>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default SmallPie;
