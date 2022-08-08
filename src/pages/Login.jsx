import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate('/list')}>Login</button>
    );
}

export default Login;