import React from "react";
import { Link } from "react-router-dom";

// Create a Login component
// This page is designed to take the username and password from the user.
// Todo:
// 1. Needs to have a Forget Username/Password hyperlink for user to reset their Username and password.
// 2. Implementing a small check box of Remember me
// 3. https://www.istockphoto.com/vector/login-form-website-ui-account-screen-page-register-user-interface-profile-entry-gm1130240481-298849234

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
