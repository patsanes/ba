import React from "react";

type Props = {
  cols: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
  rows?: number;
};

const TextArea: React.FC<Props> = ({
  cols = 30,
  onChange = () => {},
  placeholder = "",
  value = "",
  rows = 8,
}) => {
  return (
    <div>
      <textarea
        className="textarea"
        cols={cols}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
      <style jsx>{`
        .textarea {
          width: 100%;
          color: rgba(120, 133, 156, 0.94);
          padding: 8px;
          background: none;
          border: 1.5px solid #0e488d;
          border-radius: 5px;
        }
        .textarea:focus-visible {
          outline: rgba(14, 72, 141, 0.8);
        }
      `}</style>
    </div>
  );
};

export default TextArea;
