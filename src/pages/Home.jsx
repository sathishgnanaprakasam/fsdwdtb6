import { useContext } from "react"
import { AuthContext } from "../App"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(auth);

    return (
        <div>
            {
                auth.user ? (
                    <>
                        <h1>Welcome, {auth.user.email}</h1>
                        <button onClick={() => {
                            setAuth({
                                user: null
                            });
                            navigate("/login");
                        }}>Logout</button>
                    </>
                ) : (
                    <div>
                        <h1>Welcome, Guest</h1>
                        <button onClick={() => navigate("/login")}>Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default Home