import React, { useEffect } from "react";
import { Avatar, Box, Button, Container, Stack } from "@mui/material";

export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Tavsiya qilingan maqolalar</Box>
          <Stack className={"article_main"} flexDirection={"row"}>
            {/* Right part */}
            <Stack className={"article_container"}>
              {/* Most viewed */}
              <Box className={"article_category"}>Ko'p ko'rilgan</Box>
              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage:
                      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt1EInzip1NZ71yE0yKJ99ZtDqzzO-7iqtw&usqp=CAU")',
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Sam</span>
                    </div>
                    <span className={"article_title"}>
                      Eng qiziqarli va shirin taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage:
                      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt1EInzip1NZ71yE0yKJ99ZtDqzzO-7iqtw&usqp=CAU")',
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Sam</span>
                    </div>
                    <span className={"article_title"}>
                      Eng qiziqarli va shirin taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>

              {/* Most liked */}
              <Box className={"article_category"}>Ko'p yoqtirilgan</Box>
              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage:
                      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt1EInzip1NZ71yE0yKJ99ZtDqzzO-7iqtw&usqp=CAU")',
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Sirojiddin</span>
                    </div>
                    <span className={"article_title"}>
                      Jizzax somsalari mazzali
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className={"article_img"}
                  sx={{
                    backgroundImage:
                      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt1EInzip1NZ71yE0yKJ99ZtDqzzO-7iqtw&usqp=CAU")',
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Sirojiddin</span>
                    </div>
                    <span className={"article_title"}>
                      Jizzax somsalari mazzali
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>

            {/* Left part */}
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Mashxurlar</Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
