import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemovedRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

export function TargetArticles(props: any) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // alert(props.test);
  return (
    <Stack className="article_wrap">
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
                <img src={"/auth/default_user.svg"} />
                <span className={"art_user_name"}>Sam</span>
              </Box>
              {/* 2: art_info */}
              <Box className={"art_info"}>
                <span className={"art_info_title"}>Software Engineer</span>
                <p className={"art_info_desc"}>Burak eng zo'r restoran!</p>
              </Box>
              {/* 3: art date & likes & views */}
              <Box className={"art_date_views"}>
                <span className={"art_date"}>
                  {moment().format("YY-DD-MM HH:MM")}
                </span>
                <div className={"art_date_box"}>
                  <div className={"art_likes"}>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      /*@ts-ignore*/
                      checked={true}
                    />
                    <span>7</span>
                  </div>
                  <div className={"art_views"}>
                    <RemovedRedEyeIcon sx={{ mr: "10px" }} />
                    <span>77</span>
                  </div>
                </div>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
