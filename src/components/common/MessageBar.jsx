import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const MessageBar = ({ onClick }) => {
  const [message, setMessage] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setMessage(input.value);
  };
  const clickHandler = (msg) => {
    onClick(msg);
    setMessage("");
  };

  return (
    <div className="app-message-bar">
      <Input placeholder="Message" value={message} onChange={handleChange} />
      <Button text="Send" onClick={() => clickHandler(message)} />
    </div>
  );
};

export default MessageBar;
