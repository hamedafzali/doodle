import React, { useEffect } from "react";
import Message from "./Messaage";

const MessageBox = ({ data, user }) => {
  useEffect(() => {
    scrollToBottom();
  }, [data]);
  const messagesEndRef = React.createRef();
  const scrollToBottom = () =>
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

  if (!data) return <h1>is loading</h1>;
  return (
    <div className="app-message-container">
      {data &&
        data.map((i) => (
          <div
            key={i._id}
            className={
              user && user.name !== i.author
                ? "app-message-box"
                : "app-message-box app-message-box-right"
            }
          >
            <Message data={i} user={user} />
          </div>
        ))}
      <div key="scroolItem" ref={messagesEndRef} />
    </div>
  );
};

export default MessageBox;
