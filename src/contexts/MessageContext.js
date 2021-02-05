import { createContext, useState, useEffect } from "react";
import Localbase from "localbase";

export const MessageContext = createContext();

const MessageContextProvider = ({ children }) => {
  const [messageDB, setMessageDB] = useState(null);

  useEffect(() => {
    let db = new Localbase("db");
    db.collection("messages")
      .get({ keys: true })
      .then((messages) => setMessageDB(messages));
  }, []);

  return (
    <MessageContext.Provider
      value={{
        messageContext: [messageDB, setMessageDB],
        delete: function deleteMessage(msgID) {
          let db = new Localbase("db");
          db.collection("messages").doc({ id: msgID }).delete();
        },
        add: async function addMessage(msg) {
          let db = new Localbase("db");
          let messagesLength = await db
            .collection("messages")
            .get({ keys: true })
            .then((messages) => messages.length);
          db.collection("messages").add({
            text: msg,
            id: messagesLength,
          });
        },
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
