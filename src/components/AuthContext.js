import React, { createContext, useContext, useState, useEffect } from 'react';
import getAxiosConfig from './axiosConfig';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            verifyToken(token);
        } else {
            setLoading(false);
        }
    }, []);

    const verifyToken = async (token) => {
        try {
            const axiosInstance = await getAxiosConfig()
            const response = await axiosInstance.get('http://localhost:3001/verify-token');
            if (response.status === 200) {
                const userData = response.data;
                setUser({ authenticated: true, ...userData });

            } else {
                localStorage.removeItem('token');
            }
        } catch (err) {
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    async function setTokenToLocalStorage(token) {
        localStorage.setItem('token', token);
    }

    const login = async (userData) => {
        try {
            const axiosInstance = await getAxiosConfig()
            const response = await axiosInstance.post(`http://localhost:3001/login`, userData);
            const { token } = response.data;
            await setTokenToLocalStorage(token)
            if (response.status === 201 && token) {
                await verifyToken(token)
            }

        } catch (error) {
            throw new Error('Invalid credentials.')
        }
    };

    const signUp = async (userData) => {
        try {
            const axiosInstance = await getAxiosConfig()
            await axiosInstance.post(`http://localhost:3001/signup`, userData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const values = {
        user,
        loading,
        login,
        logout,
        signUp,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};