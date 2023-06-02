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

export const LoggingInUser = async (Email) => {

    const response = await fetch(
        `https://localhost:7005/api/Users/GetByEmail/${Email}`, GetConfig);


    if (response.ok) {
        const loginResponse = await response.json();
        return loginResponse;
    } else {
        return false
    }

}

const API = {
    LoggingInUser
}

export default API;









