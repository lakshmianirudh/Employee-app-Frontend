import { useNavigate } from "react-router-dom";
import '../style/style.css';
import SideBar from "../components/Sidebar";
import { useDeleteEmployeeByIdMutation, useGetEmployeeQuery } from "../services/api";
import {MdOutlineAdd, MdOutlineDelete,MdOutlineEdit} from "react-icons/md";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteEmployeeByIdMutation();
    const { data, error, isLoading } = useGetEmployeeQuery();
    console.log(data);
    
    
    return(
        <div>
            <SideBar/>
            <main>
                
            <section id="sec1">
                <h1 id="heading">Employee List</h1>
                <button id="ce" onClick={() => navigate('/create')}><div id="bc"><MdOutlineAdd className="plus"/></div>< div id="ce2"><h4>Create Employee</h4></div></button>
            </section>
            
            {data ? (
                <table>
                <thead>
                  <tr className='tablehead'>
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Joining Date</th>
                    <th>Status</th>
                    <th>Role</th>
                    {/* <th>Experience</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    data.data.map(element => {
                      return (
                        <tr key={element.id} onClick = {()=>{navigate(`/details/${element.id}`)}}>
                          <td>{element.name}</td>
                          <td>{element.id}</td>
                          <td>{element.joiningDate}</td>
                          <td><span className={element.status}>{element.status}</span></td>
                          <td>{element.role}</td>
                          {/* <td>{element.experience}</td> */}
                          <td>
                            <div>
                                
                                <span  
                                className="delete"
                                onClick={(e)=>{ e.stopPropagation();deleteEmployee(element.id)}}
                                ><MdOutlineDelete/></span>
                                <span 
                                className="edit"
                                onClick={(e)=>{e.stopPropagation();navigate(`/update/${element.id}`)}}
                                ><MdOutlineEdit/></span>
                              
                            </div>
                          </td>
                          
                          
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            ):null}
            
            
            </main>
           
        </div>
       
    );
}

export default EmployeeList;