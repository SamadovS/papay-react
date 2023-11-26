import React, { useState } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function CommunityChats() {
  /** INITIALIZATIONS **/
  const [messageList, setMessageList] = React.useState([]);

  return (
    <Stack className={"chat_frame"}>
      {/* chat top */}
      <Box className={"chat_top"}>Jonli Muloqot</Box>
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
