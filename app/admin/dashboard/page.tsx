
import MetricCards from "@/components/charts/CardChartsSimple";
import { ComplaintsChartBySex } from "@/components/charts/ComplaintsCountBySexChart";
import { ComplaintsChart } from "@/components/charts/ComplaintsStatusChart";

export default function DashboardPage() {
  return (
    <div className="p-6 flex flex-col gap-y-6"> {/* Adjust padding to prevent overflow */}
      {/* Dashboard Heading */}
      <div className="">
        <h1 className="text-3xl font-bold text-right">لوحة التحكم</h1>
      </div>

      {/* Metrics Cards in a Responsive Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
        <MetricCards />
      </div>

      {/* Three-Column Responsive Grid for Smaller Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ComplaintsChart />
        <ComplaintsChartBySex />
      </div>
  </div>
 
  );
}
