import React from "react";
import { Box, Button, Container } from "@mui/material";
import { Stack } from "@mui/system";

import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopRestaurants() {
  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">TOP Restoranlar</Box>
          <Stack flexDirection={"row"} sx={{ mt: "43px" }} m={"16px"}>
            <CssVarsProvider>
              {/* Card 1 */}
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    4-1 Yunusabad, Tashkent
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row", // yangi qo'shildi
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>

                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                </CardOverflow>
              </Card>

              {/* Card 2 */}
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/pizzar.jpg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    4-1 Yunusabad, Tashkent
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row", // yangi qo'shildi
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>

                  <Typography
                    // level="body3"    // bu ishlamadi
                    sx={{
                      fontSize: "16px", // bu ikkisi yangi qo'shildi
                      lineHeight: "1.5",

                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                </CardOverflow>
              </Card>

              {/* Card 3 */}
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/denaur.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    4-1 Yunusabad, Tashkent
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row", // yangi qo'shildi
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>

                  <Typography
                    // level="body3"    // bu ishlamadi
                    sx={{
                      fontSize: "16px", // bu ikkisi yangi qo'shildi
                      lineHeight: "1.5",

                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                </CardOverflow>
              </Card>

              {/* Card 4 */}
              <Card
                sx={{
                  minHeight: 430,
                  minWidth: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak.jpeg" loading="lazy" alt="" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    Texas De Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    4-1 Yunusabad, Tashkent
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row", // yangi qo'shildi
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>

                  <Typography
                    // level="body3"    // bu ishlamadi
                    sx={{
                      fontSize: "16px", // bu ikkisi yangi qo'shildi
                      lineHeight: "1.5",

                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <VisibilityIcon
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>

          {/* Text: See All */}
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "#FFFFFF" }}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
