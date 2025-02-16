import CustomForm from "@/components/ReuseableComponent/CustomForm";
import React from "react";

const SchedulePage: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log("Scheduled Event:", data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <CustomForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SchedulePage;
