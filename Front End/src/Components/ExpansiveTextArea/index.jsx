import { useEffect, useRef, useState } from "react";

export const ExpansiveTextArea = ({ register }) => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <textarea
      placeholder="Escrever publicação"
      ref={textAreaRef}
      value={val}
      onChange={onChange}
      rows={5}
      cols={50}
    />
  );
};
