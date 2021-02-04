import { css } from "@emotion/css";

const Message = ({ msg }) => {
  const style = css`
    background-color: #eee;
    padding: 1em;
    border-radius: 0px 15px 15px 15px;
    margin-bottom: 0.5em;

    p {
      color: #111;
    }
  `;
  return (
    <div className={style}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
