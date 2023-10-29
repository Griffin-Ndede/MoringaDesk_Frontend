import "./navBar.css"
import { Link } from 'react-router-dom';


function navBar(){
    return(
        <>
            <div id="navbar">
                <img id="menu" alt="menu icon" src="https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png" />
                <img id="navLogo" alt="Moringa logo" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" />
                <img id="navUser" alt="user icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                <img id="notifications" alt="notifications" src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" />
                <div id="notifDot"></div>
            </div>
            <div id="navBackground">
                <div id="navPanel">
                    <h3 id="Navigate">Navigate</h3>
                    <div className="linkDiv"><Link className="navLinks" to={'/'}>Home</Link></div>
                    <div className="linkDiv"><Link className="navLinks" to={'/FAQs'}>Questions</Link></div>
                    <div className="linkDiv"><Link className="navLinks" to={'/tags'}> Tags</Link></div>
                    <div className="linkDiv"><Link className="navLinks" to={'/user'}> User</Link></div>
                    <div className="linkDiv"><Link className="navLinks" to={'/questions'}>QN</Link></div>
                    <div id="logOut"><button id="logOutButton">Logout</button></div>
                </div>
            </div>
        </>
    )
}

export default navBar