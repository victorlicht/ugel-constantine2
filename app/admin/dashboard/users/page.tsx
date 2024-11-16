import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getUsersData } from "@/data/user-data";

// pages/demo-page.tsx

  
export default async function DemoPage() {
  const data = await getUsersData();

  return (
    <div className="p-6 flex flex-col gap-y-6">
      <h1 className="text-2xl font-bold">User List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
