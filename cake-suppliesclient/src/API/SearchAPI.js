const GetConfig = {
    credentials: "include",
    method: "GET",
    headers: { "Content-Type": "application/json" },
}

const GetPostConfig = (body) => {
    var config = {
        body: JSON.stringify(body),
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
    }
    return config
}

export const SearchItemCustomer = async (Name) => {
    const response = await fetch(
        `https://localhost:7005/api/Items/SearchItemsByName/${Name}`, GetConfig);

    if (response.ok) {
        const GetCustomerItemResponse = await response.json();
        return GetCustomerItemResponse;
    } else {
        return false
    }
}


const API = {
    SearchItemCustomer
}

export default API;