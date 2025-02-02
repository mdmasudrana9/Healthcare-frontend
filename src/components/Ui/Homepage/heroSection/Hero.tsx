import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const Hero = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography fontWeight={600} variant="h3" component="h1">
          Come From
        </Typography>

        <Typography
          fontWeight={600}
          color="primary.main"
          variant="h3"
          component="h1"
        >
          Preventive Care
        </Typography>
        <Typography fontWeight={400} variant="h6" component="p" py={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam a
          velit voluptate magni repellendus accusamus, vitae, non unde, tempora
          fugiat similique aliquid ut. Ipsa similique, recusandae inventore
          necessitatibus dicta cumque.
        </Typography>
        <Button>Make Appoitment</Button>
        <Button variant="outlined" sx={{ marginLeft: "3px" }}>
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", top: "-30px", left: "200px" }}>
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box sx={{ mt: 5 }}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="heart"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="heart"
            />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "220px", left: "150px" }}>
          <Image
            src={assets.images.doctor3}
            height={240}
            width={240}
            alt="doc3"
          />
        </Box>
        <Box
          sx={{ position: "absolute", bottom: "-50px", right: 0, zIndex: "-1" }}
        >
          <Image
            src={assets.images.stethoscope}
            height={240}
            width={240}
            alt="doc3"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default Hero;
