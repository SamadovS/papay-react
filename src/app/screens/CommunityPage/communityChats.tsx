import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";

export function CommunityChats() {
  /** INITIALIZATIONS **/
  const [messageList, setMessageList] = useState([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    socket.connect();
    console.log(">>>>>>>>> PRINTED");

    socket?.on("connect", function () {});
    console.log("CLIENT>>> connected");

    socket?.on("newMsg", (new_message: any) => {
      console.log("CLIENT>>> new message");
      alert(new_message);
    });

    socket?.on("greetMsg", (new_message: any) => {
      console.log("CLIENT>>> greet message");
    });

    socket?.on("infoMsg", (msg: any) => {
      console.log("CLIENT>>> info message");

      setOnlineUsers(msg.total);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Stack className={"chat_frame"}>
      {/* chat top */}
      <Box className={"chat_top"}>Jonli Muloqot {onlineUsers}</Box>
      {/* chat content */}
      <Stack className={"chat_content"}>
        <Box className={"chat_main"}>
          <Box className={"msg_left_box"}>
            <div className={"msg_left"}>Bu yer jonli muloqot</div>
          </Box>
          <Box className={"msg_right_box"}>
            <div className={"msg_right"}>Sen menga xabar yozdingmi?</div>
          </Box>
          <Box className={"msg_left_box"}>
            <Avatar alt={"maria"} src={"/community/cute_girl.jpg"} />
            <div className={"msg_left"}>Bu yer jonli muloqot</div>
          </Box>
        </Box>
      </Stack>
      {/* chat bottom */}
      <Box className={"chat_bottom"}>
        <input
          type="text"
          name={"xabar"}
          className={"msg_input"}
          placeholder={"Xabar jo'natish"}
        />
        <button className={"send_msg_btn"}>
          <SendIcon style={{ color: "#fff" }} />
        </button>
      </Box>
    </Stack>
  );
}
