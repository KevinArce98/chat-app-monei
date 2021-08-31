import { createContext, useState } from "react";


interface AuthContextProps {
    isAuth: boolean;
    user: any;
    setIsSignedIn: (auth: boolean, userAuth: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({ isAuth: false, user: null } as AuthContextProps);


const AuthContextProvider = ({ children }: any) => {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<any>(null);

    const setIsSignedIn = (auth: boolean, userAuth: any) => {
        setIsAuth(auth);
        setUser(userAuth);
        localStorage.setItem('logged', JSON.stringify(auth));
    }

    return (
        <AuthContext.Provider value={{ isAuth, user, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
