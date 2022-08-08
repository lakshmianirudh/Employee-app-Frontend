import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';
import '../style/style.css';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { useCreateEmployeeMutation } from '../services/api';
const CreateEmployee = () => {
    const [createEmployee,result] = useCreateEmployeeMutation();
    console.log(result);
    useEffect(()=>{
        if(result.isSuccess){
            navigate('/list')
        }
    },[result]);
     
    const [state,setState] = useState({
        name : '',
        
        joiningDate:'',
        role:'',
        status:'',
        departmentId:'92704119-d223-41bd-84c6-bcb2051a0c88'
    });
    useEffect(() => {
        console.log(state);
          }, [state]);
    const onChangeValue = (key,value) => {
        setState({...state,
            [key]: value,
            });}

    const navigate = useNavigate();
    
    return (
        <div>
            <SideBar/>
            <main>
            <section id="sec1">
                <h1 id="heading">Create Employee</h1>
            </section>
            <section id="sec2">
                <div id = "f">
                
                <InputField value={state.name} id="name" placeholder="Employee Name" label="Employee Name" onChange={(value)=>onChangeValue("name",value)} />
                <InputField value={state.id} id="empid" placeholder="Employee Id" label="Employee Id" />
                <InputField value={state.joiningDate} id="joiningDate" placeholder="Joining Date" label="Joining Date" onChange={(value)=>{onChangeValue("joiningDate",value)}}/>
                <InputSelect value={state.role} id="role" label="Role" placeholder="role" options={[
                    {key:'DEV',label:'Developer'},
                    {key:'qa',label:'qa'}
                ]} onChange={(value)=>{onChangeValue("role",value)}}/>
                <InputSelect label="Status" value={state.status} placeholder="status" id="status"options={[
                    {key:'Active',label:'Active'},
                    {key:'Inactive',label:'Inactive'},
                    {key:'Probation',label:'Probation'}
                ]} onChange={(value)=>{onChangeValue("status",value)}}/>
                <InputField value={state.experience} id="experience" placeholder="Experience" label="Experience" />
                <InputField value='' placeholder="Address" label="Address"/>
                
               
               
                <div id="input">
                    <label  >Upload ID Proof
                    <br />
                    <input type="file" id="proof" name="proof" style={{display:"none"}}/>
                    <div className="choose-file">
                        <label >Choose File</label>
                        <label className="browse" >Browse</label>
                    </div>
                </label>
                </div>
                
                </div>
                <div id="b">
                    <Button id="b1" label="Create" onClick={()=> {createEmployee(state);}}/>
                    <Button id="b2" label="Cancel" onClick={()=> navigate('/')}/>
                   
                    
                </div>
            </section>       
            </main>
               
        </div>

    );
}

export default CreateEmployee;