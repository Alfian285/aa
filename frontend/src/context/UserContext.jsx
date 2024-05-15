import * as React from 'react';

export const UserAuthContext = React.createContext(null);

export default function UserContext({ children }) {
    const [user, setUser] = React.useState([]);

    return (
        <UserAuthContext.Provider value={{ user, setUser }}>
            {children}
        </UserAuthContext.Provider>
    )
}