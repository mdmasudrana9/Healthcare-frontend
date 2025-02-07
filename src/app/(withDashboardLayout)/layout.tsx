import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

const DashBoardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardDrawer>{children}</DashboardDrawer>
    </div>
  );
};

export default DashBoardlayout;
