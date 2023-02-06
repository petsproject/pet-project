import './custom-select.css';

function CustomSelect({ value, setValue, options }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <select value={value} onChange={handleChange} className="select">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
export { CustomSelect };
