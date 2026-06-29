import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3002/me",
                    {
                        withCredentials: true,
                    }
                );
                // console.log(response.status)
                if (response.data.success) {
                    setUser(response.data.user);
                }
            } catch (err) {
                console.log("No active session");
                setUser(null);
                window.location.href = "http://localhost:5174/signup"
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    console.log(user);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};