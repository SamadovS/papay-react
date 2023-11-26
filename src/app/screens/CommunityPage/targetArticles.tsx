import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemovedRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

export function TargetArticles(props: any) {
  // alert(props.test);
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        // const art_img_url = "/community/default_article.svg";
        return (
          <Link className={"article_box"} href={``}>
            {/* for article photo  */}
            <Box className={"all_art_img"}></Box>

            {/* for article container  */}
            <Box className={"all_art_container"}>
              {/* 1: for art_user_info */}
              <Box className={"art_user_info"}>
                <img src={"/aut/default_user.svg"} />
                <span className={"art_user_name"}>Sam</span>
              </Box>

              {/* 2: art_info */}
              <Box className={"art_info"}>
                <span className={"art_info_title"}>Evaluation</span>
                <p className={"art_info_desc"}>Rayxon eng zo'r restoran!</p>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
