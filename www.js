<Box className={"menu_wrapper"}>
  <TabList
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    sx={{ borderRight: 1, borderColor: "divider" }}
  >
    <Tab
      style={{ flexDirection: "column" }}
      value={"1"}
      component={() => (
        <div className={`tab_menu ${value} `} onClick={() => setValue("1")}>
          <img src={"/icons/Pencil.svg"} />
          <span>Maqolalarim</span>
        </div>
      )}
    />
    <Tab
      style={{ flexDirection: "column" }}
      value={"2"}
      component={() => (
        <div className={`tab_menu ${value} `} onClick={() => setValue("2")}>
          <img src={"/icons/Group.svg"} />
          <span>Follower</span>
        </div>
      )}
    />
    <Tab
      style={{ flexDirection: "column" }}
      value={"3"}
      component={() => (
        <div className={`tab_menu ${value} `} onClick={() => setValue("3")}>
          <img src={"/icons/User.svg"} />
          <span>Following</span>
        </div>
      )}
    />
  </TabList>
</Box>;

<Box className="menu_wrapper">
  <Box onClick={() => setValue("1")} className="tab_menu">
    <img src="/icons/Pencil.svg" alt="icon" /> Maqolalar
  </Box>
  <Box onClick={() => setValue("2")} className="tab_menu">
    <img src="/icons/Group.svg" alt="icon" />
    Follower
  </Box>
  <Box onClick={() => setValue("3")} className="tab_menu">
    <img src="/icons/User.svg" alt="icon" />
    Following
  </Box>
</Box>;
