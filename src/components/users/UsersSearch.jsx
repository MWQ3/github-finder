import { useState, useContext, useEffect } from "react"
import GithubContext from "../context/github/GithubContext"
import AlertContext from "../context/alert/AlertContext"
import { searchUsers } from "../context/github/GithubActions"


function UsersSearch() {
    const {users, dispatch} = useContext(GithubContext)

    const {alertMsg} = useContext(AlertContext)

    const [text, setText] = useState('')

    const handleTxtChng = (e) => {
        const inputValue = e.target.value
        setText(inputValue)

        // failed trials and tests
        // const users = await searchUsers(inputValue).then((usersData) => {
        //     if(inputValue.trim() !== '') {
        //     dispatch({type: 'SET_LOADING'})
        //     dispatch({type: 'GET_USERS', payload: usersData})
        // } else {
        //     dispatch({type: 'REMOVE_LOADING'})
        //     clearUsers()
        //     alertMsg('No valid username or maximum requests has been reached (30req/m)')
        // }
        // }).catch((err) => {
        //     console.log(err)
        // })

        // if(inputValue.trim() !== '') {
        //     dispatch({type: 'SET_LOADING'})
        //     const users = await searchUsers(inputValue)
        //     dispatch({type: 'GET_USERS', payload: users})
        // } else if (searchUsers.error){
        //     alertMsg('No valid username or maximum requests has been reached (30req/m)')
        // } else if(inputValue.trim() === '') {
        //     dispatch({type: 'CLEAR_USERS'})
        // }
    }
    useEffect(() => {
        const debounce = setTimeout(async () => {
            if(text.trim() !== '') {
                dispatch({type: 'SET_LOADING'})
                const users = await searchUsers(text)
    
                if (users.error) {
                    dispatch({type: 'REMOVE_LOADING'})
                    alertMsg(`${users.error}`)
                } else {
                    dispatch({type: 'GET_USERS', payload: users})
                }
            } 
            // else if(text.trim() === '') {
            //     dispatch({type: 'CLEAR_USERS'})
            // }
        }, 300) // wait for 300ms of inactivity before making the API request 
        
        return () => clearTimeout(debounce)

        }, [dispatch, text, alertMsg])

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim() === '' || (text.length > 0 && users.length === 0)) {
            alertMsg('Couldn\'t fetch the data, Please write a valid username')
            setText('')

        } else {
            // *TODO* search users
            searchUsers(text)
            setText('')
            
        }
    }

    const clearAll = () => {
        setText('')
        dispatch({type: 'CLEAR_USERS'})
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black rounded-r-box"
                        placeholder="Search..." 
                        value={text}
                        onChange={handleTxtChng}
                        />

                        <button type="submit" className="btn btn-lg w-36 absolute right-0 top-0 rounded-l-none">
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button onClick={clearAll} className="btn btn-lg btn-ghost">Clear</button>
            </div>
        )}
        
        
    </div>
  )
}

export default UsersSearch