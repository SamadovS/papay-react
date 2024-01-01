import React from "react";
import { TabPanel } from "@mui/lab";
import { Box, Stack } from "@mui/material";

// REDUX
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrieveFinishedOrders } from "./selector";

// REDUX SELECTOR
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);
const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  // INITIALIZATION
  // const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/fish.jpg`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Baliq</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/close.svg"}
                        />
                        <p>3</p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/pause.svg"}
                        />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box finished"}>
                <div>
                  <span>Maxsulot narxi = </span>
                  <span>$ 21</span>
                </div>
                <div>
                  <span>Yetkazish xizmati = </span>
                  <span>$ 2</span>
                </div>
                <div>
                  <span>Jami narx = </span>
                  <span>$ 23</span>
                </div>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
