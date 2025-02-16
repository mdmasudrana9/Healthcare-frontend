import React, { useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import TextInput from "./TextInput";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import Dropdown from "./Dropdown";

const categories = [
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "other", label: "Other" },
];

const CustomForm: React.FC<{ onSubmit: (data: any) => void }> = ({
  onSubmit,
}) => {
  const [formState, setFormState] = useState({
    name: "",
    date: "",
    time: "",
    category: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formState.name ||
      !formState.date ||
      !formState.time ||
      !formState.category
    ) {
      setError("Please fill in all fields");
      return;
    }

    setSubmitted(true);
    setError("");
    onSubmit(formState);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Name"
          value={formState.name}
          onChange={(val) => handleChange("name", val)}
          placeholder="Enter your name"
        />
        <DatePicker
          label="Date"
          value={formState.date}
          onChange={(val) => handleChange("date", val)}
        />
        <TimePicker
          label="Time"
          value={formState.time}
          onChange={(val) => handleChange("time", val)}
        />
        <Dropdown
          label="Category"
          value={formState.category}
          onChange={(val) => handleChange("category", val)}
          options={categories}
        />

        {error && (
          <div className="flex items-center gap-2 p-4 rounded-md bg-red-50 text-red-700 border border-red-200">
            <AlertCircle className="h-4 w-4" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {submitted && !error && (
          <div className="flex items-center gap-2 p-4 rounded-md bg-green-50 text-green-700 border border-green-200">
            <Check className="h-4 w-4" />
            <p className="text-sm">Form submitted successfully!</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
