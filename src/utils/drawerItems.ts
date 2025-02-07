import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

export const DrawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: GroupIcon,
        },
        {
          title: "Doctor",
          path: `${role}/doctor`,
          icon: GroupIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: GroupIcon,
        },
        {
          title: "Appoitments",
          path: `${role}/appoitments`,
          icon: GroupIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedule`,
          icon: GroupIcon,
        },
        {
          title: "Appoitments",
          path: `${role}/appoitment`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appoitments",
          path: `${role}/appoitment`,
          icon: GroupIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/rescriptions`,
          icon: GroupIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: GroupIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
