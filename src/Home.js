import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import Localbase from "localbase";

import Message from "./components/Message";
import MessageInput from "./components/MessageInput";

const Home = () => {
  const [messageDB, setMessageDB] = useState(null);

  useEffect(() => {
    let db = new Localbase("db");
    db.collection("messages")
      .get({ keys: true })
      .then((messages) => setMessageDB(messages));
  }, []);

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
