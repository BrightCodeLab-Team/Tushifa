import "../../../public/assets/main/css/fonts.css";

import { getServerSession } from "next-auth";
import Script from "next/script";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ControllerHeader from "@/components/layouts/controller/ControllerHeader";
import ControllerSidebar from "@/components/layouts/controller/ControllerSidebar";
import "../dashboard.css";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/auth/login");

  return (
    <>
      <main className="dashboard-layout">
        <aside className="sidebar">
          <ControllerSidebar />
        </aside>

        <div className="main-content">
          <ControllerHeader />
          <section className="page-content">{children}</section>
        </div>
      </main>

      <Script src="assets/plugins/jquery/jquery.min.js" />
      <Script src="assets/plugins/popper/popper.min.js" />
      <Script src="assets/js/main.js" />
    </>
  );
}