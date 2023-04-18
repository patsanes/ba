import React, { FC } from "react";

type Props = {
  name: string;
  type: "button" | "submit" | "reset";
  buttonType: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
};
const Button: FC<Props> = ({
  name,
  type = "button",
  buttonType = "primary",
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <div>
      <button className={buttonType} onClick={onClick} disabled={disabled}>
        {name}
      </button>
      <style jsx>{`
        .primary {
          background: #0e488d;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          height: 41px;
          min-width: 100px;
        }
        .primary:hover {
          background: rgba(14, 72, 141, 0.8);
        }
        .primary:focus {
          background: #484f6e;
        }
        .primary:disabled {
          background: rgba(14, 72, 141, 0.34);
        }
        .secondary {
          min-width: 100px;
          background: #fff;
          color: #0e488d;
          border: 3px solid #0e488d;
          height: 41px;
          border-radius: 0.5rem;
        }
        .secondary:hover {
          border: 3px solid rgba(14, 72, 141, 0.8);
        }
        .secondary:focus {
          border: 3px solid #484f6e;
        }
        .secondary:disabled {
          border: 3px solid rgba(14, 72, 141, 0.34);
        }
      `}</style>
    </div>
  );
};

export default Button;
