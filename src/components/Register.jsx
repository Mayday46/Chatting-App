import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
            </form>
            <div className="hyperlink">
                {/* Link to the Login page */}
                <Link to="/">Back to Login</Link>
            </div>
        </div>
    );
}

export default Register;
