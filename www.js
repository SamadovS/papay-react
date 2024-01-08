{
  /* <Stack className="my_page_right">
              <Box className="order_info_box">
                <a onClick={() => setValue("5")} className="settings_btn">
                  <Settings />
                </a>
                <Box className="user_img_wrap">
                  <img
                    // alt="user"
                    className="user_corner_icon"
                    src={
                      chosenMember?.mb_type === "RESTAURANT"
                        ? "/icons/resto.png"
                        : "/icons/avatar.svg"
                    }
                  />
                </Box>
                <p className="user_name">{chosenMember?.mb_nick}</p>
                <p className="user_type">{chosenMember?.mb_type}</p>
                <Box className="social_wrap">
                  <Facebook className="social_icons" />
                  <Instagram className="social_icons" />
                  <YouTube className="social_icons" />
                  <Telegram className="social_icons" />
                </Box>
                <Box className="follow_status">
                  <span style={{ marginRight: "20px" }}>
                    Followers: {chosenMember?.mb_subscriber_cnt}
                  </span>
                  <span>Followings: {chosenMember?.mb_follow_cnt}</span>
                </Box>
                <p className="user_desc">
                  {chosenMember?.mb_description ?? "Salom, men yangi user man"}
                </p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab AIP tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"4"}
                      component={() => (
                        <Button
                          variant={"contained"}
                          onClick={() => setValue("4")}
                        >
                          Maqola Yozish
                        </Button>
                      )}
                    />
                  </TabList>
                </Box>

                <Box className={"my_page_menu"}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab AIP tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"1"}
                      component={() => (
                        <div
                          className={`menu_box ${value} `}
                          onClick={() => setValue("1")}
                        >
                          <img src={"/icons/Pencil.svg"} />
                          <span>Maqolalarim</span>
                        </div>
                      )}
                    />
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"2"}
                      component={() => (
                        <div
                          className={`menu_box ${value} `}
                          onClick={() => setValue("2")}
                        >
                          <img src={"/icons/Group.svg"} />
                          <span>Follower</span>
                        </div>
                      )}
                    />
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"3"}
                      component={() => (
                        <div
                          className={`menu_box ${value} `}
                          onClick={() => setValue("3")}
                        >
                          <img src={"/icons/User.svg"} />
                          <span>Following</span>
                        </div>
                      )}
                    />
                  </TabList>
                </Box>
              </Box>
            </Stack> */
}
