import React, {useState} from "react";

const ColorPickerCopy = () => {
  const [color, setColor] = useState("#22c55e");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div>
      <h2>Color Picker & Copier</h2>

      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <input type="color" value={color} onChange={handleChange} />
        <p
          style={{
            backgroundColor: "white",
            padding: "4px",
            borderRadius: "2px",
          }}
        >
          {color}
        </p>
        <button
          onClick={handleCopy}
          style={{
            padding: "12px 16px",
            backgroundColor: color,
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Copy Color Code
        </button>
        {copied && <p style={{color: color}}>Copied!</p>}
      </div>
    </div>
  );
};

export default ColorPickerCopy;
