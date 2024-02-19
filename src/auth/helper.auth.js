
// data : save localStorage

export const doLoginLocalStorage=(data)=>{
    
    localStorage.setItem("userData",JSON.stringify(data));
   // next();
}
// data:  fetch
export const getUserFromLocalStorage=()=>
{
    const data =getDataFromLocalStorage();
    if(data!=null)
    {
        return data.user;
    }
    return null;
}
export const  isLoggedIn=()=>
{
    if(getTokenFromLocalStorage())
    {
        return true;
    }
    else 
    {
        return  false; 
    }
}

export const getTokenFromLocalStorage=()=>{

    const data =getDataFromLocalStorage();
    if(data!=null)
    {
        return data.jwtToken;
    }
    return null;

}

export const getDataFromLocalStorage=()=>{
       const data= localStorage.getItem("userData");
       if(data!=null)
       {
          return JSON.parse(data);
       }
       return null;
}


// data : remove : logout
export const doLogoutFromLocalStorage=()=>{
    localStorage.removeItem("userData");
   // next();
}

export const isLocalAdminUser=()=>
{
    if(isLoggedIn)
    {
        const data = getUserFromLocalStorage();
        console.log("1111**********************",data)
        const role= data?.roles;
        console.log("222**********************",role)
       if(role!=null)
       {
        if(role.find((role1)=>role1.roleId==='wetrsdfwetwfasfwdf'))
        {
             return true;
        }
        else
        {
            return false;
        }
       }
       
    }
    else
    {
        return false;
    }
}