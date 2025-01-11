import React from "react";
import { Link } from "react-router-dom";

// Create a Login component
// This page is designed to take the username and password from the user.

function Login() {

    return (
        <div className = "container">
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit"> Login </button>
            </form>

            <div className = "hyperlink">
                <Link to="/register"> Click here to Register. </Link>
                {/* <a href="www.google.com"> Click here to Register. </a> */}
            </div>
        </div>

    );
}


export default Login;