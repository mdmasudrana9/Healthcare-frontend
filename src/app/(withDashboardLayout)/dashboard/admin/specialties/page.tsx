"use client";

import SpecialtiesModal from "@/app/(withDashboardLayout)/dashboard/admin/specialties/components/SpecialtiesModal";

import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const SpecialtiesPage = () => {
  const [isModalopen, setIsModalopen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalopen(true)}>Create Speciality</Button>
        <SpecialtiesModal open={isModalopen} setOpen={setIsModalopen} />
        <TextField size="small" placeholder="Search Specialities"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
