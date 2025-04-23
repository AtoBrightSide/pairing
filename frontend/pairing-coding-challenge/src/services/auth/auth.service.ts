import { useMutation } from '@tanstack/react-query';
const API_URL = import.meta.env.VITE_API_URL;

type CredentialType = {
    email: string;
    password: string;
}

const loginUser = async (credentials: CredentialType) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Failed to login');
    return await response.json();
};

const signupUser = async (userInfo: CredentialType) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
    });
    if (!response.ok) throw new Error('Failed to signup');
    return await response.json();
};


export const useLogin = () => useMutation({
    mutationFn: loginUser
});
export const useSignup = () => useMutation({
    mutationFn: signupUser
});