import { LineChart } from "@mui/x-charts/LineChart";

const revenueData = [
  4, 3, 2.5, 2.78, 1.89, 2.39, 3.49, 0.045, 0.546, 6.512, 0.321, 2.122,
];
const xLabels = [
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
];

export default function RevenueLineChart() {
  return (
    <label className="container  rounded-md p-1 shadow-md   ">
      <span className="flex flex-row gap-2">
        <img src="assets/bitcoin.svg" alt="bitcoin img" className="size-10" />
        <span className="flex flex-col">
          <h6 className="text-xs font-bold uppercase text-gray-500">bitcoin</h6>
          <h5 className="font-bold">$4.86B</h5>
        </span>
      </span>
      <div className="w-full h-60">
        <LineChart
          grid={{ horizontal: true, vertical: true }}
          leftAxis={{ label: "" }}
          series={[
            {
              color: "#fc7979",
              data: revenueData,
              area: true,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>{" "}
    </label>
  );
}
