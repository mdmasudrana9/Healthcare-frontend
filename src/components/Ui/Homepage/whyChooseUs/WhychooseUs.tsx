import { Typography, Grid, Box, Container } from "@mui/material";

const features = [
  {
    title: "Experienced Doctors",
    description:
      "Our doctors are highly experienced and skilled in their respective fields.",
  },
  {
    title: "Advanced Technology",
    description:
      "We use the latest technology to provide the best possible care.",
  },
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize our patients' needs and provide personalized care.",
  },
];

const WhychooseUs = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Why Choose Us
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box>
              <Typography variant="h6" component="h3">
                {feature.title}
              </Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhychooseUs;
