import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

type NumberInputProps = {
  id: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function NumberInput({ className, value, ...props }: NumberInputProps) {
  const invalidInput = isNaN(Number(value));

  return (
    <input
      {...props}
      value={value}
      className={twMerge(
        "outline-none",
        className,
        invalidInput && "outline-1 outline-red-500",
      )}
    />
  );
}

export default NumberInput;
