import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const { setAuth } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setAuth({
            user: {
                email: email
            }
        });

        // clear the form
        setEmail("");
        setPassword("");

        // redirect to the home page
        navigate("/");
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        placeholder="Type your email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="Type your password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <br />
            <Link to="/">Go back to the home page</Link>
        </div>
    )
}

export default Login;