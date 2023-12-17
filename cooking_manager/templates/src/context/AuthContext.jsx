import { createContext, useState, useEffect } from "react";
import * as jwt_decode from "jwt-decode";
import PropTypes from "prop-types";

import { login, logout, updateToken } from "../services/authService";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        const storedTokens = localStorage.getItem("authTokens");
        return storedTokens ? JSON.parse(storedTokens) : null;
    });
    const [user, setUser] = useState(() => {
        const storedTokens = localStorage.getItem("authTokens");
        return storedTokens
            ? jwt_decode.jwtDecode(JSON.parse(storedTokens).access)
            : null;
    });

    const [loading, setLoading] = useState(true);

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const data = await login(
                e.target.formBasicEmail.value,
                e.target.formBasicPassword.value
            );
            setAuthTokens(data);
            setUser(data ? jwt_decode.jwtDecode(data.access) : null);

            localStorage.setItem("userId", data.user_id);
            localStorage.setItem("authTokens", JSON.stringify(data));
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const logoutUser = () => {
        logout();
        setAuthTokens(null);
        setUser(null);
    };

    useEffect(() => {
        if (loading) {
            updateToken(authTokens, setAuthTokens, setUser, setLoading);
        }

        const fourMinutes = 1000 * 60 * 4;

        const interval = setInterval(() => {
            if (authTokens) {
                updateToken(authTokens, setAuthTokens, setUser, setLoading);
            }
        }, fourMinutes);

        return () => {
            clearInterval(interval);
        };
    }, [authTokens, loading]);

    const contextData = {
        user,
        authTokens,
        loginUser,
        logoutUser: logoutUser,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
