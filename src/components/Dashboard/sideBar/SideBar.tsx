import assets from "@/assets";
import SideBarItems from "@/components/Dashboard/sideBar/SideBarItems";
import { getUserInfo } from "@/services/auth.services";
import { UserRole } from "@/types";
import { DrawerItems } from "@/utils/drawerItems";

import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState<string>("");
  const { role } = getUserInfo();
  useEffect(() => {
    setUserRole(role);
  }, [role]);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        gap={1}
        alignItems="center"
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" height={40} width={40}></Image>
        <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          Health Care
        </Typography>
      </Stack>
      <List>
        {DrawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
