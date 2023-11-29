const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

 export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
        
    })
    
    // console.log(res.status)
    // let msg;
    const {items} = await res.json()
    if(res.status === 200) {
        return items

    } else {
      return {
        error: 'No valid username or maximum requests has been reached (30req/m)'
      }
}
}

 export const getUser = async (login) => {
    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
        
    })
    // console.log(res.status)
    // let msg;
    const data = await res.json()
    if(res.status === 200) {
    return data
    } else {
    window.location = './notfound'
}

}

 export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
        
    })

    const data = await res.json()
    return data
}