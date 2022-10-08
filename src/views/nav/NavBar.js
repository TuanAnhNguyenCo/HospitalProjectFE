import './nav.scss'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    let activeStyle = {
        "backgroundColor": "#04AA6D",
    };
    return (
        <ul className='nav-bar'>
            <li><NavLink to="/" 
               
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
                end
                >
                Trang chủ
            </NavLink></li>
            <li><NavLink to="/about"
                
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                About
            </NavLink></li>
            <li><NavLink to="/contact"
                
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                Contact
            </NavLink></li>
           
        </ul>
    )
}
export default NavBar
