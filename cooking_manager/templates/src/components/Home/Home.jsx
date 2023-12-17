import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

export default function Home() {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logging out...");
        try {
            logoutUser();
            navigate("/login");
            console.log("Logout successful!");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <>
            <h2>HOME</h2>
            {user ? (
                <p>Welcome, {user.username}!</p>
            ) : (
                <p>Please log in to access your account.</p>
            )}
            <button onClick={handleLogout} type='button'>
                Logout
            </button>
        </>
    );
}
