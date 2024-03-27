import { cryptodata } from "../data/dummy_data";
import RevenueLineChart from "../widgets/area_chart";
import BasicBars from "../widgets/barchart";
import CryptoDataCard from "../widgets/crypto_data_card";
import DashboardSideBar from "../widgets/dashboard_sidebar";
import DataTable from "../widgets/employees_table";

const DashboardPage = () => {
  return (
    <section className="grid   w-full  grid-cols-12  flex-col justify-center    sm:flex-row md:translate-x-11">
      {/* Main content  */}
      <div className=" col-span-12 flex flex-grow-0  flex-col gap-4 p-2  lg:order-2  lg:col-span-10">
        {/* Area charts */}
        <div className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-white p-0.5 max-md:flex-col">
          <RevenueLineChart />
          <BasicBars />
        </div>
        {/* Crypto data cards */}
        <div className="thumb-thin custom-scrollbar flex   gap-4 overflow-x-auto rounded-md bg-white p-2 shadow-md">
          {cryptodata.map((item, index) => (
            <CryptoDataCard key={index} cryptoData={item} />
          ))}
        </div>
        <DataTable />
      </div>

      {/* Dashboard sidebar */}
      <DashboardSideBar className="col-span-full flex h-full w-full flex-row items-center  justify-evenly py-4 md:justify-around   lg:col-span-1   lg:flex-col lg:justify-between " />
    </section>
  );
};

export default DashboardPage;
