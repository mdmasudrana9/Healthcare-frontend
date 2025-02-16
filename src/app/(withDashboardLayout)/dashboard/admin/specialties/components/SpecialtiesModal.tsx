import Modal from "@/components/Shared/HModal/Modal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyFormData";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
  title: string;
  image: FileList;
};

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      title: "",
      image: undefined,
    },
  });

  const [createSpecialty] = useCreateSpecialtyMutation();

  const onSubmit = async (values: FormValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res);
      if (res.id) {
        toast.success("Specialty Created Successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to create specialty");
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create a New Specialty">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Input */}
        <div className="flex flex-col">
          <label
            htmlFor="title"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <Controller
            name="image"
            control={control}
            rules={{ required: "Image is required" }}
            render={({ field: { onChange, onBlur, ref, name } }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files)}
                onBlur={onBlur}
                ref={ref}
                name={name}
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

export default SpecialtiesModal;
