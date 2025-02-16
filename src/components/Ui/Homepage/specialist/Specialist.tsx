import { Box, Container, Stack, Typography } from "@mui/material";
import image from "@/assets/svgs/Neurology.svg";
import Image from "next/image";
const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Spcialities
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={16}>
            Explore Treatments Across Spcialities
          </Typography>
        </Box>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {specialties.slice(0, 5).map((specialty: any) => (
            <div key={specialty.id} className="p-4 border rounded-lg shadow-md">
              <h6 className="text-lg font-semibold mb-2">{specialty.title}</h6>
              <div className="w-full h-32 relative">
                <Image
                  src={specialty.icon || image}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Specialist;
