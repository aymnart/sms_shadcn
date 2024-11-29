import UserCard from "@/app/dashboard/components/user-card";
import { CountChart } from "./count-chart";
import { AttendanceChart } from "./attendance-chart";
import { FinanceChart } from "./finance-chart";
import { EventCalendar } from "./event-calendar";
import Announcements from "./announcements";
import { DollarSign, GraduationCap, User, Users } from "lucide-react";

export default function OverviewTab() {
  return (
    <div className="my-8 gap-4 flex flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 flex-wrap ">
          <UserCard
            title="Revenue"
            num="5296"
            stat={0}
            Icon={DollarSign}
            m={"dt"}
          />
          <UserCard title="Students" num="100" stat={-5} Icon={User} />
          <UserCard
            title="Teachers"
            num="33"
            stat={20.8}
            Icon={GraduationCap}
          />
          <UserCard title="Staff" num="7" stat={9} Icon={Users} />
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
