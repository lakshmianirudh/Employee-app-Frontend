import '../style/style.css';
const InputSelect = ({label,options,placeholder,onChange}) => {
    return(
        <div id="input">
            <label >{label}</label>
                <select className="inbox" name={label} placeholder={placeholder} onChange={(event)=>onChange(event.target.value)}>
                    {
                        options.map((item)=>(<option key={item.key}  >{item.label}</option>))
                    }
                    </select>
            
        </div>

    );
}

export default InputSelect;