import '../style/style.css';
import logo from '../img/kv logo.png';
import list from'../img/List.png';
const SideBar = ({label,options,placeholder,onChange}) => {
    return(
        <aside>
            <header><img src = {logo} alt ="kv logo" id = "logo"/>
            
            <nav>
                <div id="n">
                    <div id="list">
                        <img src={list}alt="list" />
                    </div>
                    
                    
                    <a href="" id="empl">Employee List</a>
                    
                </div>
                

            </nav>
        </header>
        </aside>

    );
}

export default SideBar;