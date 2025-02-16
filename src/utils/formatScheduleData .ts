export type ScheduleData = {
  id: string;
  startDate: string;
  endDate: string;
  createdAt?: string;
  updatedAt?: string;
};

export type FormattedSchedule = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

export const formatScheduleData = (
  scheduleData: ScheduleData
): FormattedSchedule => {
  const start = new Date(scheduleData.startDate);
  const end = new Date(scheduleData.endDate);

  return {
    startDate: start.toISOString().split("T")[0], // YYYY-MM-DD format
    endDate: end.toISOString().split("T")[0], // YYYY-MM-DD format
    startTime: start.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }), // e.g., "11:47 PM"
    endTime: end.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }), // e.g., "12:17 AM"
  };
};
