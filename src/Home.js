import { css } from "@emotion/css";
import { useContext } from "react";

import Message from "./components/Message";
import MessageInput from "./components/MessageInput";

import { MessageContext } from "./contexts/MessageContext";

const Home = () => {
  const { messageContext } = useContext(MessageContext);
  const [messageDB] = messageContext;

  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 2em;
  `;

  return (
    <main className={style}>
      <div>
        {messageDB != null &&
          messageDB.map((message, index) => (
            <Message msg={message.data.text} key={"Message " + index} />
          ))}
      </div>
      <MessageInput />
    </main>
  );
};

export default Home;
