"use client";

import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import DoctorModal from "@/app/(withDashboardLayout)/dashboard/admin/doctor/components/Doctors";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorQuery,
} from "@/redux/api/doctorApi";
import { useDebounce } from "@/redux/hooks";

const DoctorsPage = () => {
  const [isModalopen, setIsModalopen] = useState<boolean>(false);

  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedterm = useDebounce(searchTerm, 600);
  if (!!debouncedterm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorQuery({ ...query });
  query["searchTerm"] = debouncedterm;
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctor(id).unwrap();
      if (res.id) {
        toast.success("Doctor deleted successfully");
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

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalopen(true)}>Create Doctor</Button>
        <DoctorModal open={isModalopen} setOpen={setIsModalopen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctor"
        ></TextField>
      </Stack>

      {!isLoading ? (
        <Box>
          <DataGrid rows={data?.doctors || []} columns={columns} />
        </Box>
      ) : (
        <p>Loading....</p>
      )}
    </Box>
  );
};

export default DoctorsPage;
