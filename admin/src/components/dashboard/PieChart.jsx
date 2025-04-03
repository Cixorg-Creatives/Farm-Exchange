import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ properties, blogs, messages, requests }) => {
    const chartData = {
        labels: ["Properties", "Blogs", "Messages", "Requests"],
        datasets: [
            {
                label: "Total Count",
                data: [properties, blogs, messages, requests],
                backgroundColor: ["#31511E", "#859F3E", "#747474", "#F6FCDF"],
                hoverBackgroundColor: ["#31511E", "#859F3E", "#747474", "#F6FCDF"],
                borderColor: ["#31511E", "#859F3E", "#747474", "#F6FCDF"],
                hoverBorderColor: ["#31511E", "#859F3E", "#747474", "#F6FCDF"],
                borderWidth: 1,
                hoverOffset: 40,
            },
        ],
    };

    const options = {
        cutout: "60%", // Reduces thickness
        layout: {
            padding: {
                top: 20, // Increases space between labels and chart
            },
        },
        radius: "90%",
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    font: {
                        size: window.innerWidth < 768 ? 10 : window.innerWidth < 1024 ? 14 : 18, // Smaller font for small screens
                    },
                    boxWidth: window.innerWidth < 768 ? 8 : window.innerWidth < 1024 ? 12 : 16, // Reduce box size for small screens
                    boxHeight: window.innerWidth < 768 ? 8 : window.innerWidth < 1024 ? 12 : 16, // Reduce box size for small screens
                },
            },
        },
    };

    return (
        <div className='p-1 md:p-2 lg:p-4'>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
