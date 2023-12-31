import "./navBar.css"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getData1, getData2 } from "./myStore";

function NavBar({ tags }){
    const [ showPanel, setShowPanel ] = useState(false);
    const navigate = useNavigate()
    const user = useSelector((state)=> state.value2?.id)
      
    function toggle() {
        setShowPanel((showPanel) => !showPanel);
        console.log(showPanel)
    }
    
    const dispatch = useDispatch();
    const sendData = (id) => {
    dispatch(getData1(id));
    };

    const sendData1 = () => {
        dispatch(getData2({id: 0}));
        };

    if(user !== 0){
    return(
        <>
            <div id="navbar">
                <img id="menu" alt="menu icon" src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" onClick={toggle}/>
                <img id="navLogo" alt="Moringa logo" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" />
                <Link to={'/user'}><img id="navUser" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" /></Link>
                <img id="notifications" alt="notifications" src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" />
                <div id="notifDot"></div>
            </div>
            {showPanel ? 
                <>
                <div id="navBackground" onClick={toggle}></div>
                    <div id="navPanel"> 
                        <h3 id="Navigate">Navigate</h3>
                        <div className="linkDiv"><Link className="navLinks" to={'/home'} onClick={toggle}>Home</Link></div>
                        <div className="linkDiv"><Link className="navLinks" to={'/FAQs'} onClick={toggle}>Questions</Link></div>
                        <div className="linkDiv"><Link className="navLinks" to={'/tags'} onClick={toggle}> Tags</Link></div>
                        <div id="tagNames">
                            {tags.map(tag => (
                                <div className="linkDiv1"><Link className="navLinks1" to={`/tags/${tag.name}`} onClick={()=>{sendData(tag.id); toggle()}}>{tag.name}</Link></div> 
                            ))}
                        </div>
                        <div className="linkDiv"><Link className="navLinks" to={'/user'} onClick={toggle}> User</Link></div>
                        <div id="logOut" onClick={()=>{sendData1(); navigate('/'); window.location.reload()}}><button id="logOutButton">Logout</button></div>
                    </div>
                </>
                :
                <> </>
            }
                
        </>
        )}
}

export default NavBar