import { useContext, createContext, useReducer } from "react";
import { defaultState, reducer } from "./reducer";

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useData = () => useContext(AppContext)