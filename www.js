{
  /* <Box className="post_container">
      {chosenMemberBoArticles.map((article: BoArticle) => {
        const image_path = article.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/default_art_photo.svg";
        return (
          <Stack
            className={"article_box"}
            sx={{ cursor: "pointer" }}
            onClick={() => renderChosenArticleHandler(article?._id)}
          >
            {/* for article container  */
}
//         <Box
//           className={"all_art_img"}
//           sx={{
//             backgroundImage: `url(${image_path})`,
//           }}
//         ></Box>
//         <Box className={"all_art_container"}>
//           {/* 1: for art_user_info */}
//           <Box className={"art_user_info"}>
//             <img
//               src={
//                 article.member_data?.mb_image
//                   ? `${serverApi}/${article.member_data.mb_image}`
//                   : "/auth/default_user.svg"
//               }
//             />
//             <span className={"art_user_name"}>
//               {article?.member_data?.mb_nick}
//             </span>
//           </Box>
//           {/* 2: art_info */}
//           <Box className={"art_info"}>
//             <span className={"art_info_title"}>{article?.bo_id}</span>
//             <p className={"art_info_desc"}>{article?.art_subject}</p>
//           </Box>
//           {/* 3: art date & likes & views */}
//           <Box className={"art_date_views"}>
//             <span className={"art_date"}>
//               {moment(article?.createdAt).format("YY-DD-MM HH:MM")}
//             </span>
//             <div className={"art_date_box"}>
//               <div className={"art_likes"}>
//                 <Checkbox
//                   // {...label}
//                   icon={<FavoriteBorder />}
//                   checkedIcon={<Favorite style={{ color: "red" }} />}
//                   /*@ts-ignore*/
//                   checked={true}
//                 />
//                 <span>7</span>
//               </div>
//               <div className={"art_views"}>
//                 <RemovedRedEyeIcon sx={{ mr: "10px" }} />
//                 <span>77</span>
//               </div>
//             </div>
//           </Box>
//         </Box>
//       </Stack>
//     );
//   })}
// </Box> */}
