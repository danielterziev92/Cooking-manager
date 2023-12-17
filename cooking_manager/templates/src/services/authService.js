import client from "../config/axiosConfig";
import * as jwt_decode from "jwt-decode";

export const login = async (email, password) => {
    try {
        const response = await client.post("/api/login/", {
            email,
            password,
        });

        if (response.status === 200) {
            const data = response.data;
            client.defaults.headers.common["Authorization"] =
                `Bearer ${data.access}`;
            return data;
        } else {
            throw new Error("Authentication failed");
        }
    } catch (error) {
        console.error("Authentication failed:", error);
        throw error;
    }
};

export const logout = () => {
    delete client.defaults.headers.common["Authorization"];
    localStorage.removeItem("authTokens");
    localStorage.removeItem("userId");
};

export const updateToken = async (
    authTokens,
    setAuthTokens,
    setUser,
    setLoading
) => {
    try {
        const response = await client.post("/api/token/refresh/", {
            refresh: authTokens?.refresh,
        });

        if (response.status === 200) {
            const data = response.data;
            client.defaults.headers.common["Authorization"] =
                `Bearer ${data.access}`;
            setAuthTokens(data);
            setUser(jwt_decode.jwtDecode(data.access));

            localStorage.setItem("authTokens", JSON.stringify(data));
        } else {
            logout();
        }

        if (setLoading) {
            setLoading(false);
        }
    } catch (error) {
        console.error("Token refresh failed:", error);
        logout();
        if (setLoading) {
            setLoading(false);
        }
    }
};

export const register = async (email, password, password2) => {
    const url = "/api/register/";

    try {
        const response = await client.post(url, {
            email,
            password,
            password2,
        });

        // success
        console.log("Registration successful:", response.data);
        return response.data;
    } catch (error) {
        // error
        console.error("Registration failed:", error.response.data);
        throw error;
    }
};
