type TimePickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const TimePicker: React.FC<TimePickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="time"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TimePicker;
