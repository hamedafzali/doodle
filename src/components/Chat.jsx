import { Component } from "react";
import MessageBar from "./common/MessageBar";
import MessageBox from "./common/MessageBox";
import { getCurrentUser } from "./../services/auth";

import {
  getMessages,
  getMessagesLimited,
  sendMessages,
} from "./../services/chat";
import showMessage from "../utils/Message";
class Chat extends Component {
  state = {
    tasks: [],
    messages: [],
    //CS is a flag to control the Critical Section
    CS: false,
    user: getCurrentUser(),
    limit: 10,
  };
  componentDidMount() {
    //It adds the first task to run in the tasks queue
    //this.state.tasks.push(this.getMessagesHandler);
    //It retrieves previous messages
    this.getMessagesHandler();
    //It defines an interval for gathering data
    this.intervalID = setInterval(() => this.getMessagesHandler(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  setCS = (status) => this.setState({ CS: status });
  getMessagesHandler = async () => {
    //console.log(this.state.CS, this.state.messages);
    if (!this.state.CS) {
      this.setCS(true);

      try {
        //It loads all data when there is no message
        if (!this.state.messages.length) {
          const { data } = await getMessages();
          this.setState({ messages: data });
        } else {
          //It loads 10 recent messages after the latest retrieved
          const { data } = await getMessagesLimited(
            this.state.messages[this.state.messages.length - 1].timestamp,
            this.state.limit
          );

          //If there is new data, it will be added to previous ones.
          data.length &&
            this.setState({ messages: [...this.state.messages, ...data] });
        }
      } catch (e) {
        showMessage("unknown problem has been occured.", "error");
        console.log(e.message);
      }
    }

    this.setCS(false);
  };
  sendingHandler = async (message) => {
    this.setCS(true);
    sendMessages({ author: this.state.user.name, message })
      .then(({ data }) => {
        //If your message is posted, it is added to previous ones.
        if (data.length) {
          const newMessages = this.state.messages.concat(data);
          this.setState({ ...this.state, messages: newMessages });
        }
      })
      .catch((err) => {
        console.log(err);
        showMessage("Somthing is wrong. Please try again", "error");
      });
    this.setCS(false);
  };
  render() {
    const { messages, user } = this.state;
    return (
      <div className="app-chat">
        <MessageBox data={messages} user={user} />
        <MessageBar onClick={this.sendingHandler} />
      </div>
    );
  }
}

export default Chat;
