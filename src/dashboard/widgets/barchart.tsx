import { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dayData, monthData, yearData } from "../data/dummy_data";

export default function CryptoVolumeChart() {
  const [timeframe, setTimeframe] = useState<string>("year"); // State to manage the selected timeframe

  // Function to handle timeframe selection
  const handleTimeframeChange = (selectedTimeframe: string) => {
    setTimeframe(selectedTimeframe);
  };

  return (
    <div className="h-full w-full rounded-md p-1 shadow-md">
      {/* title and data frame controller  */}
      <div className="flex flex-row justify-between px-4">
        <span className="flex flex-col">
          <h6 className="text-xs font-bold uppercase text-gray-500">Volum 1Y</h6>
          <h5 className="font-bold">$1.42T</h5>
        </span>
        <div className="flex justify-center gap-2">
          <label
            className={`radio-button ${timeframe === "year" ? "active" : ""}`}
          >
            <input
              type="radio"
              value="year"
              checked={timeframe === "year"}
              onChange={() => handleTimeframeChange("year")}
            />
            1Y
          </label>
          <label
            className={`radio-button ${timeframe === "month" ? "active" : ""}`}
          >
            <input
              type="radio"
              value="month"
              checked={timeframe === "month"}
              onChange={() => handleTimeframeChange("month")}
            />
            1M
          </label>
          <label
            className={`radio-button ${timeframe === "day" ? "active" : ""}`}
          >
            <input
              type="radio"
              value="day"
              checked={timeframe === "day"}
              onChange={() => handleTimeframeChange("day")}
            />
            1W
          </label>
        </div>
      </div>
      <div className="h-60 w-full">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[
            {
              color: "#fc7979",
              data:
                timeframe === "year"
                  ? yearData
                  : timeframe === "month"
                    ? monthData
                    : dayData,
            },
          ]}
        />
      </div>
    </div>
  );
}
