import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

// use auth function
const useAuth = () => {
    //  called useContext and authContext
    return useContext(AuthContext);
}

export default useAuth;