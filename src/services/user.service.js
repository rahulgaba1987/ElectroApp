import { publicAxios } from "./axios.service";

//User related services
export const registerUser=(userData)=>
{
   // return  publicAxios.post(`/users`,userData).then((response)=>response.data);
    return  publicAxios.post(`/users`,userData);

    // For login
}
export const loginUser=(loginData)=>
    {
        return publicAxios
        .post(`/auth/login`,loginData);
        
    }
