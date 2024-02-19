import {  useEffect, useState } from "react"
import UserContext from "./user.context";
import {doLoginLocalStorage, doLogoutFromLocalStorage, getDataFromLocalStorage, isLoggedIn } from "../auth/helper.auth";
import { isLocalAdminUser } from "../auth/helper.auth";
const UserProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isAdminUser,setAdminUser]=useState(false);
    /*

    userData:{
        user:{

        },
        jwtToken:""
       
    }

    */

    useEffect(() => {
        setIsLogin(isLoggedIn());
        setUserData(getDataFromLocalStorage());
        setAdminUser(isLocalAdminUser());
    },[]);


    // login
    const doLogin = (data) => {
        doLoginLocalStorage(data);
        setIsLogin(true);
        setAdminUser(isLocalAdminUser());
        setUserData(getDataFromLocalStorage());
    }

    //logout

    const doLogout = () => {
        doLogoutFromLocalStorage();
        setIsLogin(false);
        setAdminUser(false);
        setUserData(null);

    };



    return (
        <UserContext.Provider value={{

            userData: userData,
            //you can remove setUserData method
          //  setUserData: setUserData,
            isLogin: isLogin,

            // you can remove set login method
          //  setIsLogin: setIsLogin,
            isAdminUser: isAdminUser,
            login: doLogin,
            logout: doLogout

        }}>
            {children}
        </UserContext.Provider>
    )



}
export default UserProvider;