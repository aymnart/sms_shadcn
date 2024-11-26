import UserCard from "@/components/user-card";
import { CountChart } from "./count-chart";
import { AttendanceChart } from "./attendance-chart";
import { FinanceChart } from "./finance-chart";
import { EventCalendar } from "./event-calendar";
import Announcements from "./announcements";

export default function OverviewTab() {
  return (
    <div className="my-8 gap-4 flex flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 ">
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:ml-4 lg:w-1/3 flex flex-col gap-8">
        <div className="w-fit">
          <EventCalendar />
        </div>

        <Announcements />
      </div>
    </div>
  );
}
