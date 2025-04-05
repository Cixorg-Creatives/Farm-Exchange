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
        cutout: "60%", // Adjusts doughnut thickness
        responsive: true,
        maintainAspectRatio: false, // Prevents distortion on small screens
        layout: {
            padding: {
                top: 10, // Adjust padding dynamically
            },
        },
        radius: "70%",
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size: window.innerWidth < 768 ? 6 : window.innerWidth < 1024 ? 10 : 14, // Smaller font for small screens
                    },
                    boxWidth: window.innerWidth < 768 ? 4 : window.innerWidth < 1024 ? 8 : 12, // Reduce box size for small screens
                    boxHeight: window.innerWidth < 768 ? 4 : window.innerWidth < 1024 ? 8 : 12, // Reduce box size for small screens
                },
            },
        },
    };

    return (
        <div className='p-1 md:p-2 lg:p-4 w-full h-full'>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default SmallPie;
