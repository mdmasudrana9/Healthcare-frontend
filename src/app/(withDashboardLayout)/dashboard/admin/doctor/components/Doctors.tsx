import Modal from "@/components/Shared/HModal/Modal";
import { useCreateDcotorMutation } from "@/redux/api/doctorApi";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyFormData";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

export type FormValues = {
  password: string;
  doctor: {
    email: string;
    name: string;
    contactNumber: string;
    address: string;
    registrationNumber: string;
    experience: number;
    gender: string;
    apointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
  };
};

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const { control, handleSubmit } = useForm<FormValues>({});

  const [createDcotor] = useCreateDcotorMutation();

  const onSubmit = async (values: FormValues) => {
    // console.log(values);
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await createDcotor(data).unwrap();
      console.log(res);
      if (res.id) {
        toast.success("Doctor Created Successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to create Doctor");
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a New Doctor">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        {/* Password Input */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        {/* Doctor Fields */}
        <div className="flex flex-col">
          <label
            htmlFor="doctor.email"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Doctor Email
          </label>
          <Controller
            name="doctor.email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.name"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Doctor Name
          </label>
          <Controller
            name="doctor.name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.contactNumber"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <Controller
            name="doctor.contactNumber"
            control={control}
            rules={{ required: "Contact Number is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.address"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <Controller
            name="doctor.address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.registrationNumber"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Registration Number
          </label>
          <Controller
            name="doctor.registrationNumber"
            control={control}
            rules={{ required: "Registration Number is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.experience"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Experience (years)
          </label>
          <Controller
            name="doctor.experience"
            control={control}
            rules={{ required: "Experience is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.gender"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <Controller
            name="doctor.gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <select
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.apointmentFee"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Appointment Fee
          </label>
          <Controller
            name="doctor.apointmentFee"
            control={control}
            rules={{ required: "Appointment Fee is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.qualification"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Qualification
          </label>
          <Controller
            name="doctor.qualification"
            control={control}
            rules={{ required: "Qualification is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.currentWorkingPlace"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Current Working Place
          </label>
          <Controller
            name="doctor.currentWorkingPlace"
            control={control}
            rules={{ required: "Current Working Place is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="doctor.designation"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Designation
          </label>
          <Controller
            name="doctor.designation"
            control={control}
            rules={{ required: "Designation is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
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

export default DoctorModal;
