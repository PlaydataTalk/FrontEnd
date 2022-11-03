import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Profile from "routes/Profile";
import SignUp from "./SignUp";
import ListPostComponent from "./ListPostComponent";
import CreatePostComponent from "./CreatePostComponent";
import SearchPostComponent from "./SearchPostComponent";
import KeywordChartComponent from "./KeywordChartComponent";
import ProfileComponent from "./ProfileComponent";
import SideNav from "SideNav";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <SideNav />}

            <Switch>
                <>
                    {isLoggedIn ? (
                        <div
                            style={{
                                maxWidth: 890,
                                width: "100%",
                                margin: "0 auto",
                                marginTop: 80,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div className="" style={{ paddingLeft: "300px" }}>
                                <Route exact path="/profile">
                                    <Profile userObj={userObj} refreshUser={refreshUser} />
                                    <a href="/main">안녕하세요</a>
                                </Route>
                                <Route exact path="/main">
                                    <ListPostComponent userObj={userObj} />
                                </Route>
                                <Route exact path="/create-post/:postId">
                                    <CreatePostComponent userObj={userObj} />
                                </Route>
                                <Route path="/search" exact component={SearchPostComponent}></Route>
                                <Route path="/keyword" exact component={KeywordChartComponent}></Route>
                                <Route exact path="/profile/:stat">
                                    <ProfileComponent userObj={userObj} />
                                </Route>
                                <Route exact path="/">
                                    <ListPostComponent userObj={userObj} />
                                </Route>
                                {/* <Redirect from="*" to="/" /> */}
                            </div>
                        </div>
                    ) : (
                        <>
                            <Route exact path="/">
                                <Auth />
                            </Route>
                            <Redirect from="*" to="/" />

                            <Route exact path="/SignUp">
                                <SignUp />
                            </Route>
                        </>
                    )}
                </>
            </Switch>

        </Router>
    );
};
export default AppRouter;