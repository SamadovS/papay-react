import { CloudDownload } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

export function MySettings(props: any) {
  return (
    <Stack className="my_settings_page">
      <Box className="member_media_frame">
        <img
          src="/auth/default_user.svg"
          alt="avatar"
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className="media_change_box">
          <span>Rasm Yuklash</span>
          <p>JPG, JPEG, PNG rasmlarni yuklay olasiz!</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownload />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <div className="log_input">
          <label className="spec_label">Ism</label>
          <input
            className="spec_input mb_nick"
            type="text"
            placeholder="Maria Cute"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="short_input">
          <label className="spec_label">Telefon Raqam</label>
          <input
            type="text"
            className="spec_input mb_phone"
            placeholder="+99890 1234567"
            name="mb_phone"
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Manzil</label>
          <input
            type="text"
            className="spec_input mb_address"
            placeholder="Yunusabad 1-4, Tashkent"
            name="mb_address"
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ma'lumot</label>
          <textarea
            className="spec_textarea mb_description"
            placeholder="Bu yerda sizning reklamangiz bo'lishi mumkin edi))"
            name="mb_description"
          ></textarea>
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"}>Saqlash</Button>
      </Box>
    </Stack>
  );
}
