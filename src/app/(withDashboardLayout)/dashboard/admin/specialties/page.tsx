"use client";

import SpecialtiesModal from "@/app/(withDashboardLayout)/dashboard/admin/specialties/components/SpecialtiesModal";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalopen, setIsModalopen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res.id) {
        toast.success("Specialty delete succesfully");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "title", headerName: "ID", width: 70 },
    {
      field: "icon",
      headerName: "Icon",
      width: 70,
      renderCell: ({ row }) => {
        return (
          <Box>
            {row.icon ? (
              <Image src={row.icon} alt="icon" width={40} height={40} />
            ) : (
              <span>No Icon</span>
            )}
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      width: 70,
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)}>
            <GridDeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  // console.log(data);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalopen(true)}>Create Speciality</Button>
        <SpecialtiesModal open={isModalopen} setOpen={setIsModalopen} />
        <TextField size="small" placeholder="Search Specialities"></TextField>
      </Stack>

      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
