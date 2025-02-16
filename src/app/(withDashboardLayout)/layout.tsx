"use client";

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashBoardlayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return (
    <div>
      <DashboardDrawer>{children}</DashboardDrawer>
    </div>
  );
};

export default DashBoardlayout;
