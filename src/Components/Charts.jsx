import React from "react";
import ReactApexChart from "react-apexcharts";

const Charts = () => {
  const options = {
    chart: {
      type: "bar",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    colors: ["#1A56DB", "#FDBA8C"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 6,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: "10px",
        },
      },
      axisBorder: {
        show: false,
      },
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    responsive: [
      {
        breakpoint: 640, // Small devices
        options: {
          chart: {
            height: 200, // Reduce chart height for mobile
          },
          plotOptions: {
            bar: {
              columnWidth: "60%",
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Organic",
      color: "#1A56DB",
      data: [231, 122, 63, 421, 122, 323, 111],
    },
    {
      name: "Social Media",
      color: "#FDBA8C",
      data: [232, 113, 341, 224, 522, 411, 243],
    },
  ];

  return (
    <div className="charts max-w-full sm:max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 p-3 md:p-4">
      <div className="flex justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-2">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 19"
            >
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-900 dark:text-white pb-1">
              3.4k
            </h5>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              Leads per week
            </p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-md dark:bg-green-900 dark:text-green-300">
            +42.5%
          </span>
        </div>
      </div>

      <ReactApexChart options={options} series={series} type="bar" height={260} />

      <div className="flex justify-between items-center pt-3">
        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900">
          Last 7 days
        </button>
        <a
          href="#"
          className="text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Report
        </a>
      </div>
    </div>
  );
};

export default Charts;
