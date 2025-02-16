"use client";

import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { LogoutUser } from "@/services/actions/logoutUser";
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import { Stack, Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = getUserInfo();
  const isLogeedIn = isLoggedIn();
  const router = useRouter();

  const handleLogout = () => {
    // localStorage.removeItem(authKey);
    // deleteCookies([authKey, "refreshToken"]);
    // removeUser();
    // router.push("/");
    // router.refresh();
    LogoutUser(router);
  };

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        py={2}
        alignItems="center"
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          <Box component="span" color="primary.main">
            H
          </Box>
          ealthCare
        </Typography>

        <Stack direction="row" spacing={2}>
          <Typography component={Link} href="/consalting">
            Consaltation
          </Typography>
          <Typography>Heath Planse</Typography>
          <Typography>Diagonostic</Typography>
          <Typography>Medicine</Typography>
          <Typography>NGO</Typography>
        </Stack>
        {userInfo?.userId ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
