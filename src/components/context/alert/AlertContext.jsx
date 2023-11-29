import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const alertMsg = (msg) => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: {msg}
        })

        setTimeout(() => {dispatch({type: 'REMOVE_ALERT'})}, 2000)
    }

    return <AlertContext.Provider value={{
        alert: state,
        alertMsg,
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext