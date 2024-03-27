import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardIcons } from "../data/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DashboardSideBar = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="  aspect-square   size-fit rounded-lg bg-red-400 p-2 "
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
      <div className="flex h-full w-[85%]  justify-center gap-y-8  lg:flex-col ">
        {dashboardIcons.map((item, index) => (
          <button
            key={index}
            onClick={item.func}
            className="mx-auto aspect-square w-fit rounded-full p-1 duration-150 hover:bg-red-200"
          >
            <FontAwesomeIcon icon={item.icon} className="text-slate-700" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardSideBar;
