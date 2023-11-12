import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MembersPage } from "./screens/MembersPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";

function App() {
    const [path, setPath] = useState();
    const main_path = window.location.pathname;
    // console.log("main_path", main_path);

    return (
        <Router>
            {main_path == "/" ? (
                <NavbarHome setPath={setPath} />
            ) : main_path.includes("restaurant") ? (
                <NavbarRestaurant setPath={setPath} />
            ) : (
                <NavbarOthers setPath={setPath} />
            )}

            {/* <nav>
                    <ul>
                        <li>
                            <Link to="/restaurant">RestaurantPage</Link>
                        </li>
                        <li>
                            <Link to="/community">CommunityPage</Link>
                        </li>
                        <li>
                            <Link to="/orders">OrdersPage</Link>
                        </li>
                        <li>
                            <Link to="/members">MembersPage</Link>
                        </li>
                        <li>
                            <Link to="/help">HelpPage</Link>
                        </li>
                        <li>
                            <Link to="/login">LoginPage</Link>
                        </li>
                        <li>
                            <Link to="/">HomePage</Link>
                        </li>
                    </ul>
                </nav> */}

            <Switch>
                <Route path="/restaurant">
                    <RestaurantPage />
                </Route>
                <Route path="/community">
                    <CommunityPage />
                </Route>
                <Route path="/orders">
                    <OrdersPage />
                </Route>
                <Route path="/members">
                    <MembersPage />
                </Route>
                <Route path="/help">
                    <HelpPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

function Home() {
    return <h2>Home</h2>;
}
