import { useNavigate } from "react-router-dom";
import { removeStorage } from "../services/utils";
import {MdOutlineLogout} from "react-icons/md";
import Button from "./Button";

const Logout = ({label}) => {
    const navigate = useNavigate();
    const logout = () =>{
        removeStorage("AuthToken");
        navigate('/');
    }
    return(
        <MdOutlineLogout className="logout" onClick={logout}/>
    );
}

export default Logout;