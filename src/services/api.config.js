export const API_BASE_URL = "http://localhost:8088/"

const getAuthHeader = () => {
    const token = JSON.parse(localStorage.getItem("rock_token"))?.token
    return token ? { "Authorization": `Token ${token}` } : {}
}

export const fetchJSON = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: getAuthHeader()
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`)
    }
    return response.json()
}

export const postJSON = async (endpoint, body) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { ...getAuthHeader(), "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    if (!response.ok) {
        throw new Error(`Failed to post to ${endpoint}: ${response.statusText}`)
    }
    return response.json()
}