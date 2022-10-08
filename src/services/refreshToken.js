const api = process.env.REACT_APP_API

const refreshToken = async () => {

    if (localStorage.getItem("refresh_hstoken") == undefined)
        return false

    const res = await fetch(`${api}/token/refresh`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("refresh_hstoken")}`
        }
    })
    if (res.status === 200) {
        const data = await res.json()
        localStorage.setItem("hs_token", data['access_token'])
        localStorage.setItem("refresh_hstoken", data['refresh_token'])
        return true
    } else
        return false


}
export default refreshToken