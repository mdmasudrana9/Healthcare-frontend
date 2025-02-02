import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const DoctorData = [
  {
    password: "1234561",
    doctor: {
      email: "doctor231@gmail.com",
      name: "Dr. Fahima",
      contactNumber: "+1234567890",
      address: "123 Medical Street, Cityville",
      registrationNumber: "12345",
      experience: 5,
      gender: "FEMALE",
      appointmentFee: 100,
      qualification: "MD, PhD",
      currentWorkingPlace: "City Hospital",
      designation: "Senior Consultant",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  },
  {
    password: "654321",
    doctor: {
      email: "doctor232@gmail.com",
      name: "Dr. Ahmed",
      contactNumber: "+9876543210",
      address: "456 Healthcare Ave, MedCity",
      registrationNumber: "67890",
      experience: 10,
      gender: "MALE",
      appointmentFee: 120,
      qualification: "MBBS, MS",
      currentWorkingPlace: "General Hospital",
      designation: "Chief Surgeon",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  {
    password: "abcdef",
    doctor: {
      email: "doctor233@gmail.com",
      name: "Dr. Lisa Ray",
      contactNumber: "+1122334455",
      address: "789 Care Street, HealTown",
      registrationNumber: "11223",
      experience: 8,
      gender: "FEMALE",
      appointmentFee: 90,
      qualification: "MD, Cardiologist",
      currentWorkingPlace: "HeartCare Clinic",
      designation: "Cardiology Specialist",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  },
  {
    password: "qwerty",
    doctor: {
      email: "doctor234@gmail.com",
      name: "Dr. Robert Brown",
      contactNumber: "+5566778899",
      address: "321 Med Road, DocCity",
      registrationNumber: "33445",
      experience: 15,
      gender: "MALE",
      appointmentFee: 150,
      qualification: "MD, Neurologist",
      currentWorkingPlace: "Brain Health Center",
      designation: "Neurology Consultant",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
];

const TopratedDoctor = () => {
  return (
    <Box
      sx={{
        margin: "40px 0px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        Our Top Rated Doctor
      </Typography>
      <Typography component="p" fontWeight={300} fontSize={16}>
        Explore Treatments Across Spcialities
      </Typography>

      <Container>
        <div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {DoctorData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={item.doctor.image}
                alt={item.doctor.name}
                className="w-full h-48 object-cover"
                width={200}
                height={200}
              />
              <div className="p-4">
                <Typography variant="h6" fontWeight={600}>
                  {item.doctor.name}
                </Typography>
                <Typography component="p" fontWeight={300} fontSize={14}>
                  {item.doctor.designation}
                </Typography>
                <Typography component="p" fontWeight={300} fontSize={14}>
                  {item.doctor.currentWorkingPlace}
                </Typography>
                <Typography component="p" fontWeight={300} fontSize={14}>
                  Experience: {item.doctor.experience} years
                </Typography>
                <Typography component="p" fontWeight={300} fontSize={14}>
                  Fee: ${item.doctor.appointmentFee}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default TopratedDoctor;
