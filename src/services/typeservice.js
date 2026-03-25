import { fetchJSON } from "./api.config";

export const getTypes = async () => {
    try {
        return await fetchJSON("types");
    } catch (error) {
        console.error("Error fetching types:", error);
        throw error;
    }
}
