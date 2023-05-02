import React from "react";

function MessageSelf() {
  var props2 = { name: "You", message: "This is a Sample Message" };

  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props2.message}</p>
        <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p>
      </div>
    </div>
  );
}

export default MessageSelf;
