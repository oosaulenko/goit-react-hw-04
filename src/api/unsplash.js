import axios from "axios";

export default async function fetchList(query, page = 1){
    return await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query,
            page,
            orientation: "landscape",
        },
        headers: {
            Authorization: "Client-ID hJNrdR-DH3neUnzKR2lxpyzGePwhc-GKihZeq50aWTU",
        },
    });
}