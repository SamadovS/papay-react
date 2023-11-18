import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";

export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src={"icons/line_group.svg"}
        style={{
          position: "absolute",
          left: "6%",
          // transform: "rotate(90deg)",
        }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restoranlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <CssVarsProvider>
              {/* Card 1 */}
              <Card
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "35px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="/restaurant/burak.jpeg" alt="" />
                  </AspectRatio>
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
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    4-1 Yunusabad, Tashkent
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 1234567
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <Visibility
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
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
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "35px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="/restaurant/burak.jpeg" alt="" />
                  </AspectRatio>
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
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    4-1 Yunusabad, Tashkent
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 1234567
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <Visibility
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
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
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "35px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="/restaurant/burak.jpeg" alt="" />
                  </AspectRatio>
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
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    4-1 Yunusabad, Tashkent
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 1234567
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <Visibility
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
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
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "35px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="/restaurant/burak.jpeg" alt="" />
                  </AspectRatio>
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
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Texas De Brazil
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    4-1 Yunusabad, Tashkent
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +99890 1234567
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{" "}
                    <Visibility
                      sx={{
                        fontSize: 20,
                        marginLeft: "5px",
                      }}
                    />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
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
