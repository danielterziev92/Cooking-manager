import client from "../config/axiosConfig";

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
