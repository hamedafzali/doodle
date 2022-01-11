import { Fragment } from "react";
import MessageBar from "./MessageBar";
import MessageBox from "./MessageBox";

const MessageContainer = () => {
  return (
    <Fragment>
      <MessageBox />
      <MessageBar />
    </Fragment>
  );
};

export default MessageContainer;
