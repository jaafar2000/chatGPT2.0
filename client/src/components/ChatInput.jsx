import React from "react";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div
      className="w-full flex items-center bg-white bg-opacity-10 max-h-40 rounded-lg px-4
    py-4 overflow-auto relative"
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            rows={1}
            className="border-0 resize-none bg-transparent outline-none w-11/12"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />

          <BiSend
            onClick={handleSubmit}
            width={20}
            alt="send-button"
            className="absolute top-4
        right-3 text-2xl hover:cursor-pointer ease-in duration-100 hover:scale-125
        "
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
