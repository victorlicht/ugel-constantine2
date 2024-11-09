
import MetricCards from "@/components/charts/CardChartsSimple";
import { ComplaintsChartBySex } from "@/components/charts/ComplaintsCountBySexChart";
import { ComplaintsChartByDepartment } from "@/components/charts/ComplaintsCountChartByDepartment";
import { ComplaintsChart } from "@/components/charts/ComplaintsStatusChart";
import { SiteViewsChart } from "@/components/charts/SiteViewsChart";
import { SiteVisitors } from "@/components/charts/SiteVisitorsByDevicesChart";

export default function DashboardPage() {
  return (
    <div className="p-6"> {/* Adjust padding to prevent overflow */}
      {/* Dashboard Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-right mb-6">لوحة التحكم</h1>
      </div>

      {/* Metrics Cards in a Responsive Row */}
      <div className="flex flex-wrap justify-start gap-4 mb-8">
        <MetricCards />
      </div>

      {/* Full-Width Section for Complaints by Department */}
      <div className="w-full mb-8">
        <ComplaintsChartByDepartment />
      </div>

      {/* Three-Column Responsive Grid for Smaller Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SiteVisitors />
        <ComplaintsChart />
        <ComplaintsChartBySex />
      </div>

      {/* Full-Width Section for Site Views */}
      <div className="w-full mb-8">
        <SiteViewsChart />
      </div>
    </div> 
  );
}
