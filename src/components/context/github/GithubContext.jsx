import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";



const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    

    const initialState = {
        users: [],
        loading: false,
        user: {},
        repos: [],
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // getUsers was for testing purposes, we change it to searchUsers once the test is ok
    // const searchUsers = async (text) => {
    //     setLoading()
       
    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //     const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
            
    //     })
    //     console.log(res.status)
    //     // let msg;
    //     const {items} = await res.json()
    //     if(res.status === 200) {
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items,
    //     })
        
    //         // msg = 'Success'
    //     // console.log(msg)
    // } else {
    //     dispatch({
    //         type: 'REMOVE_LOADING',
    //     })
        
    //         // msg = 'Failure'
    //     // console.log(msg)
    // }
    // // return msg
    // }  

    return <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}
        >
        {children}
    </GithubContext.Provider>
}

export default GithubContext