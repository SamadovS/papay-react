import { Avatar, Box, Button, Stack } from "@mui/material";
import React from "react";

const followers = [
  { mb_nick: "Andrew", following: true },
  { mb_nick: "Usman", following: false },
  { mb_nick: "John", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const img_url = "/auth/user-profile-icon.svg";
        return (
          <Box className="follow_box">
            <Stack className="right_wrap_user">
              <Avatar
                alt="avatar"
                src={img_url}
                sx={{ width: 89, height: 89, mr: "25px" }}
              />
              <div className="name_wrap">
                <span className="username_text">User</span>
                <span className="name_text">{follower.mb_nick}</span>
              </div>
            </Stack>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant="contained"
                  className="following_already"
                  disabled
                >
                  <span>FOLLOWING</span>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="follow_btn"
                  startIcon={
                    <img
                      src="/icons/follow_icon.svg"
                      style={{ width: "40px" }}
                    />
                  }
                >
                  Follow Back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
