import { css } from "@emotion/css";
import Localbase from "localbase";

const MessageInput = () => {
  let db = new Localbase("db");

  const style = css`
    width: 100%;
    position: relative;

    input {
      width: 100%;
      border: none;
      background-color: #e4e4e4;
      padding: 1em;
      border-radius: 25px;
      font-family: "Roboto", sans-serif;
      font-size: 1em;
      padding-right: 4em;

      ::placeholder {
        color: #888;
      }
    }
    button {
      font-family: "Roboto", sans-serif;
      position: absolute;
      right: 5px;
      top: 5px;
      font-size: 1.2em;
      color: white;
      border-radius: 50%;
      border: none;
      width: 40px;
      height: 40px;
      background-color: #5f6baf;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  return (
    <form
      className={style}
      onSubmit={(e) => {
        e.preventDefault();
        db.collection("messages").add({ text: e.target.message.value });
        e.target.message.value = "";
      }}
    >
      <input name="message" type="text" placeholder="Message..." />
      <button type="submit">➤</button>
    </form>
  );
};

export default MessageInput;
