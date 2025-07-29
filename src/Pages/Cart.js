import { useSelector } from "react-redux";
// import { CartSlice } from "../redux/slices/CartSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CartItem from "../Components/CartItem";




function Cart(){
    const {cart}=useSelector((state)=>state);
    console.log("the cart Data IS:",cart)
    const[totalamount,setTotalAmount]=useState(0);
    return(
        <div className="cart-item-container">
            {
                cart.length>0?
                (
                    <div className="wrapper">

                        <div className="cartItem1">
                            {
                                cart.map((data)=>{
                                    return<CartItem data={data}/>

                                })
                            }
                        </div>
                        <div className="your-cart">
                            <div>
                                <div>YOUR CART</div>
                                <h2>SUMMARY</h2>
                                <p>Total Items:{cart.length}</p>
                            </div>

                            <div>
                                <div>Total Amount:{totalamount}</div>
                                <button>Check Now</button>
                            </div>
                            
                            
                        </div>

                    </div>
                    
                ):
                (
                    <div className="cart-is-empty">
                        <p className="cart-empty">Your Cart Is Empty!</p>
                        <NavLink to="/Home">
                            <button className="butt  shopnow-button">
                                Shop Now
                            </button>

                        </NavLink>
                        


                    </div>
                    
                )

            }
        </div>
    )
        

}
export default Cart;