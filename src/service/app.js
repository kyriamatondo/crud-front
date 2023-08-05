import axios from "axios";


export const usersApi=axios.create({
    baseURL:"http://localhost:8080"
});

export const getUsers=()=>{
    return usersApi.get("/users")
}

export const getUserById=(id)=>{
    return usersApi.get(`/users/${id}`)
}

export const deleteUser=(user)=>{
    return usersApi.delete(`users/${user.id}`)
}

export const saveUser=(user)=>{
    return usersApi.post("/users", user)
}

export const updateUser=(user)=>{
    return usersApi.put(`users/${user.id}`, user)
}


