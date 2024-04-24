import { createContext, useState, useContext, useEffect } from 'react';
import { SessionManager } from '../common/SessionManager';

type AuthenticationContextType = {
    isAuthenticated: boolean,
    setIsAuthenticated: (isAuthenticated: boolean) => void,
    userId: string|null,
    setUserId: (userId: any) => void
}

const AuthenticationContext = createContext({ 
    isAuthenticated: false, setIsAuthenticated: (isAuthenticated: boolean) => {},
    userId: null, setUserId: (userId: any) => {}
} as AuthenticationContextType);

interface AuthenticationProviderProps {
    children: any
}

const AuthenticationProvider = (props: AuthenticationProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState<string|null>(null);
    
    SessionManager.getUserId()
        .then(setUserId)
        .catch(() => setUserId(null))
        .finally(() => setIsAuthenticated(!!userId));

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated, setIsAuthenticated,
            userId, setUserId
        }} >
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthenticationContext);
}

export { AuthenticationProvider, AuthenticationContext }