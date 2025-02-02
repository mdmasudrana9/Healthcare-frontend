import { Stack, Container, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
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
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
