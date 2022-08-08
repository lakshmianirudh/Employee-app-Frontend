import '../style/style.css';
const InputField = ({label,onChange,value,placeholder})=>{

    return(
        <div id="input">
            <label>{label}</label>
            <input className= "inbox" placeholder={placeholder} value={value}type="text" onChange={(event)=>onChange(event.target.value)}/>
        </div>
    );
};

export default InputField;