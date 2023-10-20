const CustomSelectOption = ({ options, value, onChange }: { options: { value: string; label: string }[], value: string, onChange: (value: string) => void}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelectOption;