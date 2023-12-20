import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Tabs } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "../../../css/community.css";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";

// const targetBoArticles = [1, 2, 3, 4, 5];

export function CommunityPage(props: any) {
  /** INITIALIZATIONS **/
  const [value, setValue] = React.useState("1");

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, newValue: number) => {
    console.log(value);
  };

  return (
    <div className="community_page">
      <div className="community_frame">
        <Container className="community_container">
          <Stack className="community_stack">
            {/* 1/2 for Community Chats */}
            <div className="community_chats">
              <CommunityChats />
            </div>

            {/* 2/2 Community Articles */}
            <Stack className={"community_articles"} inputMode={"text"}>
              <TabContext value={value}>
                {/* 2.1 article_tabs */}
                <Box className={"article_tabs"}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}
                    >
                      <Tab label="Barcha Maqolalar" value={"1"} />
                      <Tab label="Mashxurlar" value={"2"} />
                      <Tab label="Oshxonaga Baho" value={"3"} />
                      <Tab label="Hikoyalar" value={"4"} />
                    </Tabs>
                  </Box>
                </Box>

                {/* 2.2 article_main */}
                <Box className={"article_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles
                      targetBoArticles={[1, 2, 3, 4]}
                      test={"Maqolalar"}
                    />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles
                      targetBoArticles={[1, 2]}
                      test={"Mashxurlar"}
                    />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                </Box>

                {/* 2.3 article_bottom: pagination */}
                <Box
                  sx={{ borderTop: 1, borderColor: "divider" }}
                  className={"art_bottom"}
                >
                  <Pagination
                    count={3}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"secondary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
