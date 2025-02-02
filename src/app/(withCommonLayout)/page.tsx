import Hero from "@/components/Ui/Homepage/heroSection/Hero";
import Specialist from "@/components/Ui/Homepage/specialist/Specialist";
import TopratedDoctor from "@/components/Ui/Homepage/topratedDoctors/TopratedDoctor";
import WhychooseUs from "@/components/Ui/Homepage/whyChooseUs/WhychooseUs";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Specialist />
      <TopratedDoctor />
      <WhychooseUs />
    </div>
  );
};

export default HomePage;
