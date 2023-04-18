import React, { FC } from "react";

type Props = {
  autoFocus?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: "text" | "password" | "email" | "number";
  disabled?: boolean;
  inputType?: "primary" | "secondary";
};

const Input: FC<Props> = ({
  autoFocus = false,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  inputType = "primary",
}) => {
  return (
    <div>
      <input
        className={inputType}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      <style jsx>{`
        .primary {
          display: flex;
          align-items: center;
          color: rgba(120, 133, 156, 0.94);
          background: none;
          width: 100%;
          border: none;
          border-bottom: 1px solid #0e488d;
          padding: 0 8px;
        }
        .primary:focus-visible {
          outline: rgba(14, 72, 141, 0.8);
        }
        .secondary {
          padding: 0 8px;
          width: 100%;
          background: none;
          border: 1.5px solid #0e488d;
          border-radius: 5px;
          height: 40px;
        }
        .secondary:focus-visible {
          outline: rgba(14, 72, 141, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Input;
