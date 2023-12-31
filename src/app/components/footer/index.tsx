import {
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <div className="footer_config">
            <Container>
                <Stack className="main_footer_container">
                    <Stack flexDirection={"row"} style={{ height: "242px" }}>
                        <Stack flexDirection={"column"} className="info">
                            <Box>
                                <img src="/papay_footer.svg" />
                            </Box>
                            <Box className="main_text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit adipisicing elit sit amet
                                consectetur adipisicing elit adipisicing elit
                            </Box>
                            <Stack className="contact_links">
                                <Box>
                                    <img src={"/icons/facebook.svg"} />
                                </Box>
                                <Box>
                                    <img src={"/icons/twitter.svg"} />
                                </Box>
                                <Box>
                                    <img src={"/icons/instagram.svg"} />
                                </Box>
                                <Box>
                                    <img src={"/icons/youtube.svg"} />
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack className="parts">
                            <Box className="part_subject">Bo'limlar</Box>
                            <Box className="divider"></Box>
                            <Box className="targets">
                                Bosh Sahifa Oshxonalar Jamiyat Yordam
                            </Box>
                        </Stack>
                        <Stack className="find_us">
                            <Box className="find">Bizni top</Box>
                            <Box className="divider"></Box>
                            <Stack className="details" sx={{ mt: "19px" }}>
                                <Box className="detail_first">L.</Box>
                                <Box className="detail_second">Uzbekistan</Box>
                            </Stack>
                            <Stack className="details" sx={{ mt: "42px" }}>
                                <Box className="detail_first">P.</Box>
                                <Box className="detail_second">
                                    +99890-777-23-32
                                </Box>
                            </Stack>
                            <Stack className="details" sx={{ mt: "9px" }}>
                                <Box className="detail_first">E.</Box>
                                <Box className="detail_second">
                                    Papays@restaurant.com
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box className="liner"></Box>
                    <Box className="copyrights">
                        Copyright Papays 2022, All rights reverved
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}
