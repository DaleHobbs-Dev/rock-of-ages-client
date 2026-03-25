// Services to handle API calls related to the Rocks

import { fetchJSON, postJSON } from "./api.config"

export const getRocks = async () => {
    try {
        return await fetchJSON("rocks?_expand=type&_expand=user")
    } catch (error) {
        console.error("Error fetching rocks:", error);
        throw error;
    }
}

export const getMyRocks = async () => {
    try {
        return await fetchJSON("rocks?mine=true&_expand=type&_expand=user")
    } catch (error) {
        console.error("Error fetching my rocks:", error);
        throw error;
    }
}

export const collectRock = async (rock) => {
    try {
        return await postJSON("rocks", rock);
    } catch (error) {
        console.error("Error collecting rock:", error);
        throw error;
    }
}