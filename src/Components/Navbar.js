import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
// import img from "../Image/chatgpt.png"
import img from "../Images/chatgpt.png"

function Navbar(){
    const{cart}=useSelector((state)=>state);
    return(
        <div className="Navbar">
            <NavLink to="/Home">
                <div className="logoimg">
                    <img  className="img" src={img}/>
                </div>
                
            </NavLink>
            <div className="icon-container">
                <NavLink to="/">
                    <p className="text">Home</p>
                </NavLink>
                <div className="icon-container1">
                    <NavLink to='/cart'>
                        <FaShoppingCart className="text"/>
                    </NavLink>
                    {
                        cart.length>0&&
                        <span className="text no">{cart.length}</span>
                    }
                </div>
                
            </div>
        </div>
    )


}
export default Navbar;