import Modal from "@/components/Shared/HModal/Modal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi ";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SchedulesModal = ({ open, setOpen }: TProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    },
  });

  const [createSchedule] = useCreateScheduleMutation();

  const onSubmit = async (values: FormValues) => {
    const formattedValues = {
      startDate: String(values.startDate),
      endDate: String(values.endDate),
      startTime: String(values.startTime),
      endTime: String(values.endTime),
    };
    console.log("Form Submitted!", formattedValues); // Debugging

    try {
      const res = await createSchedule(formattedValues).unwrap();
      console.log("API Response:", res);

      if (res.id) {
        toast.success("Schedule Created Successfully");
        reset(); // Reset form after success
        setOpen(false);
      }
    } catch (error: any) {
      console.error("API Error:", error.message);
      toast.error("Failed to create Schedule");
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a New Schedule">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Start Date */}
        <div className="flex flex-col">
          <label
            htmlFor="startDate"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate", { required: "Start Date is required" })}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label
            htmlFor="endDate"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            {...register("endDate", { required: "End Date is required" })}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Start Time */}
        <div className="flex flex-col">
          <label
            htmlFor="startTime"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Start Time
          </label>
          <input
            type="time"
            {...register("startTime", { required: "Start Time is required" })}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* End Time */}
        <div className="flex flex-col">
          <label
            htmlFor="endTime"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            End Time
          </label>
          <input
            type="time"
            {...register("endTime", { required: "End Time is required" })}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default SchedulesModal;
