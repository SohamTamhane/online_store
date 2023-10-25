import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(undefined);

    return(
        <Context.Provider value={{
            cart, setCart,
            user, setUser
        }}>
            {children}
        </Context.Provider>
    )
}
export default AppContext;