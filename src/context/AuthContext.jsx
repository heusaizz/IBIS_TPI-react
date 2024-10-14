import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);  // "admin", "employee", "client" a crear desp y vincular con app jsx, crear rutas basadas en los reoles

    const login = (userRole) => {
        setRole(userRole);
    };

    return (
        <AuthContext.Provider value={{ role, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
