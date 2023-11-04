import { createContext, useContext } from 'react'

export const ContextAPI = createContext({})

export const APIProvider = ({ children }) => {
    return (
        <ContextAPI.Provider>

            { children }
        </ContextAPI.Provider>
    )
}

export const useAPI = () => useContext(ContextAPI)