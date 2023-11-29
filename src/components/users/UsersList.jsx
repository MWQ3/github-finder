import { useContext } from "react"
import Loading from "../layouts/Loading"
import UsersItem from "./UsersItem"
import GithubContext from "../context/github/GithubContext"

function UsersList() {
    const {users, loading} = useContext(GithubContext)

    if(!loading) {
        return (
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.length >= 1 && (
                <>
              {users.map((user) => (
                  < UsersItem key={user.id} users={user} />

              ))}
              </>
              )}
              
          </div>
        )
    } else {
        return < Loading />
    }
}

export default UsersList