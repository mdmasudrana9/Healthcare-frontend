"use client";
import SchedulesModal from "@/app/(withDashboardLayout)/dashboard/admin/schedules/components/SchedulesModal";
import {
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
} from "@/redux/api/scheduleApi ";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";

const SchedulesPage = () => {
  const [isModalopen, setIsModalopen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllScheduleQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();
  const scheduleData = data?.schedule || [];
  console.log(scheduleData);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id).unwrap();
      if (res.id) {
        toast.success("Schedule deleted successfully");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", width: 150 },
    { field: "endDate", headerName: "End Date", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 150 },
    { field: "updatedAt", headerName: "Updated At", width: 150 },
    {
      field: "Action",
      headerName: "Action",
      width: 100,
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
        <Button onClick={() => setIsModalopen(true)}>Create Schedule</Button>
        <SchedulesModal open={isModalopen} setOpen={setIsModalopen} />
        <TextField size="small" placeholder="Search Schedule"></TextField>
      </Stack>
      {!isLoading ? (
        <Box>
          <Box sx={{ display: "flex", height: "100%" }}>
            <DataGrid rows={scheduleData} columns={columns} />
          </Box>
        </Box>
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
