import { publicAxios } from "./axios.service";

//User related services
export const registerUser=(userData)=>
{
    return  publicAxios.post(`/users`,userData).then((response)=>response.data);
};