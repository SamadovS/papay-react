import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Facebook,
  Instagram,
  Settings,
  Telegram,
  YouTube,
} from "@mui/icons-material";

import { TabContext, TabPanel } from "@mui/lab";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import TViewer from "./tViewer";
import { Member } from "../../../types/user";
import { BoArticle } from "../../../types/boArticle";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoArticles,
  retrieveChosenSingleBoArticle,
} from "./selector";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenMember: (data: Member) => dispatch(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispatch(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispatch(setChosenSingleBoArticle(data)),
});
// REDUX SELECTOR
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenSingleBoArticleRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);
const chosenMemberBoArticleRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);

export function VisitOtherPage(props: any) {
  /** INITIALIZINGS **/
  const [value, setValue] = useState("4");

  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticleRetriever
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);
  /** HANDLERS **/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value="1">
                  <Box className="menu_name">Maqolalar</Box>
                  <Box className="menu_content">
                    <MemberPosts />
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className="bottom_box">
                        <Pagination
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBack,
                                next: ArrowForward,
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box className="menu_name">Followers</Box>
                  <Box className="menu_content">
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                  <Box className="menu_name">Following</Box>
                  <Box className="write_content">
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>

                <TabPanel value="4">
                  <Box className="menu_name">Tanlangan Maqola</Box>
                  <Box className="menu_content">
                    <TViewer text={`<h1>tViewer in the Other Page</h1>`} />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                <Box className="user_img_wrap">
                  <img
                    src="/icons/avatar.svg"
                    alt="user"
                    className="user_corner_icon"
                  />
                </Box>
                <p className="user_name">Maria</p>
                <p className="user_type">Foydalanuvchi</p>
                <Box className="social_wrap">
                  <Facebook className="social_icons" />
                  <Instagram className="social_icons" />
                  <YouTube className="social_icons" />
                  <Telegram className="social_icons" />
                </Box>
                <Box className="follow_status">
                  <span style={{ marginRight: "20px" }}>Follower: 7</span>
                  <span>Followings: 7</span>
                </Box>
                <p className="user_desc">Salom mening ismim Maria</p>
                <Button
                  style={{ background: "rgba(247, 9, 9, 0.72)" }}
                  variant="contained"
                >
                  Bekor qilish
                </Button>
              </Box>
              <Box className="menu_wrapper">
                <Box onClick={() => setValue("1")} className="tab_menu">
                  <img src="/icons/Pencil.svg" alt="icon" /> Maqolalar
                </Box>
                <Box onClick={() => setValue("2")} className="tab_menu">
                  <img src="/icons/Group.svg" alt="icon" />
                  Follower
                </Box>
                <Box onClick={() => setValue("3")} className="tab_menu">
                  <img src="/icons/User.svg" alt="icon" />
                  Following
                </Box>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
