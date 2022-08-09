import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { useLoginMutation } from "../services/api";
import {setStorage} from "../services/utils";
import sideImage from "../img/side-image.png";
import logo from "../img/kv logo.png";
const Login = () => {
    const [login,result] = useLoginMutation();
    const navigate = useNavigate();
    const[credentials,setCredentials] = useState({
        name : '',
        password : ''
    })
    useEffect(()=>{
        if(result.isSuccess){
            console.log(result.data.data.idToken);
            setStorage("AuthToken",result.data.data.idToken);
            navigate('/list');
        }

    },[result])
    const onChangeValue = (key,value) => {
        setCredentials({...credentials,
            [key]: value,
            });}
    
    return(
        <main className="login">
        <div id="si">
        <img  src={sideImage} alt="sideimage"/>

        </div>
        <div id="sh">
        <img src={logo} alt="logo"/>
        <InputField value={credentials.name} id="username" placeholder="UserName" label="Username" onChange={(value)=>onChangeValue("name",value)} />
        <InputField  value={credentials.value} id="username" placeholder="Password" label="Password" onChange={(value)=>onChangeValue("password",value)}/>
        <button id="lb" onClick={() => login(credentials)}>Login</button>
        </div>
        </main>
        
    );
}

export default Login;