import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const COUNTRY_DATA = {
  Pakistan: [16, 26, 11, 33, 27, 30, 33, 36, 39, 42, 45, 48],
  India: [25, 32, 28, 35, 40, 38, 42, 37, 45, 39, 33, 41],
  "United Kingdom": [42, 38, 45, 47, 50, 49, 53, 48, 55, 52, 57, 60],
  "United States": [55, 60, 58, 62, 65, 63, 68, 70, 67, 72, 75, 78],
  Canada: [44,52, 54, 62, 65, 63, 45, 39, 33, 41, 75, 78],
};

const MONTHS = [
  "May 1",
  "June 1",
  "July 1",
  "August 1",
  "September 1",
  "October 1",
  "November 1",
  "December 1",
  "January 1",
  "February 1",
  "March 1",
]

export default function SessionChart() {
  const [country, setCountry] = useState("Pakistan");
  
  const chartOptions = {
    chart: { toolbar: { show: false }, height: 350 },
    colors: ["#3b82f6"],
    xaxis: { categories: MONTHS },
    yaxis: { labels: { formatter: (val) => `${val}k` } },
    tooltip: { y: { formatter: (val) => `${val}K sessions` } },
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: "straight" }
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Monthly Sessions</h3>
          <p className="text-sm text-gray-500">Country-wise usage trends</p>
        </div>
        <select
          className="border rounded px-3 py-1 text-sm"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {Object.keys(COUNTRY_DATA).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      
      <ReactApexChart
        options={chartOptions}
        series={[{ name: "Sessions", data: COUNTRY_DATA[country] }]}
        type="area"
        height={350}
      />
    </div>
  );
}