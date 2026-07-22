import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    // useContext to get user data
    const { user } = useContext(UserContext);

    //  no user logged in
    if (!user) return <div>Please Login</div>;

    // display a welcome message
    return <div>Welcome {user.username}</div>;
}

export default Profile;