import { ChangeEventHandler } from "react";

const options = new Array(1000).fill(null).map((_, i) => 1000 - i);

export const LengthSelector: React.FC<{
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: number;
}> = ({ onChange, value }) => {
  return (
    <div>
      <span>My name is </span>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span> characters long.</span>
    </div>
  );
};
