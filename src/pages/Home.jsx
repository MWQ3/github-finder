import { useEffect, useContext } from "react"
import UsersList from "../components/users/UsersList"
import UsersSearch from "../components/users/UsersSearch"
import GithubContext from "../components/context/github/GithubContext"

function Home() {
  const {dispatch} = useContext(GithubContext)
  useEffect(() => {
    dispatch({type: 'CLEAR_USERS'})
  },[])
  return (
    <>
      < UsersSearch />
      < UsersList />
    </>
    
  )
}

export default Home