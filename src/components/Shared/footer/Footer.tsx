import { Box, Stack, Typography, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import twitter from "@/assets/landing_page/twitter.png";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consalting">
            Consaltation
          </Typography>
          <Typography color="#fff">Heath Planse</Typography>
          <Typography color="#fff">Diagonostic</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">NGO</Typography>
        </Stack>
        <Stack direction="row" gap={4} justifyContent="center" py={3}>
          <Image src={Facebook} alt="logo" width={30} height={30} />
          <Image src={instagram} alt="logo" width={30} height={30} />
          <Image src={linkedin} alt="logo" width={30} height={30} />
          <Image src={twitter} alt="logo" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dotted text-white"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          color="white"
          py={3}
        >
          &copy; 2025 HealthCare. All Rights Reserved
          <Typography
            color="white"
            component={Link}
            href="/"
            variant="h4"
            fontWeight={600}
          >
            <Box component="span" color="primary.main">
              H
            </Box>
            ealthCare
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy, Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
