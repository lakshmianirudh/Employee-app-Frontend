import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../components/Sidebar";
import {MdOutlineEdit} from "react-icons/md";
import { useGetEmployeeByIdQuery } from "../services/api";
import '../style/style.css';
const EmployeeDetails = () => {
    const params = useParams();
    
    const { data, error, isLoading } = useGetEmployeeByIdQuery(params.id);
    console.log(data);
    
    const navigate = useNavigate();
    return(
        
<div>
            <SideBar/>
            <main>
                
            <section id="sec1">
                <h1 id="heading">Employee Details</h1>
                <button id="ce" onClick={(e)=>{e.stopPropagation();navigate(`/update/${data.data.id}`)}}><div id="bc"><MdOutlineEdit className="plus"/></div>< div id="ce2"><h4>Edit</h4></div></button>
            </section>
            <div className="details">
                <div id="d">Employee Name<br/>{data?.data?.name}</div>
                <div id="d">Employee Id <br/>{data?.data?.id}</div>
                <div id="d">Role<br/>{data?.data?.role}</div>
                <div id="d">Status<br/><div className={data?.data?.status}>{data?.data?.status}</div></div>
                <div id="d">JoiningDate<br/>{data?.data?.joiningDate}</div>
                <div id="d">State<br/>{data?.data?.employeeaddress.state}</div>
                <div id="d">District<br/>{data?.data?.employeeaddress.district}</div>
                
            </div>
            
            
            </main>
           
        </div>
       
    );
}

export default EmployeeDetails;