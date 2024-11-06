import { auth } from "@/lib/auth/config";
import Redirect from "@/components/Redirect";
import arabicText from "@/public/locales/arabic.json";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
    return redirect("/auth/login");
  } else {
    return <Redirect to="/admin/dashboard" message={arabicText.redirectMessages.redirectDashboard} />;
  }
}
