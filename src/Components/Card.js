import { useDispatch } from "react-redux";
import { add,remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import { CartSlice } from "../redux/slices/CartSlice";
import { Store } from "../redux/slices/Store";
import { useSelector } from "react-redux";
function Card({data}){
    const {cart}=useSelector((state)=>state);
    console.log("printing Cart");
    console.log(cart);
    const dispatch=useDispatch();

    const removeHandler=()=>{
        dispatch(remove(data.id));
        toast.error("Item Remove from Cart");

    }
    const addHandler=()=>{
        dispatch(add(data));
        toast.success("Item Ad to Cart");
    }
    return(
        <div className="single-cart">
            <div>
                <p className="card-title">{data.title.substr(0,17)+("...")}</p>
            </div>
            <div>
                <p className="card-desc">
                    {data.description.split(" ").slice(0,8).join(" ")+("...")} 
                </p>
            </div>
            <div className="myimg">
                <img className="images" src={data.image}/>
            </div>
            <div className="price-container">
                <div>
                    <p className="price">
                        ${data.price}
                    </p>
                </div>
                <div>
                    
                    {
                        cart.some((p)=>p.id  == data.id)?
                        (
                            <div>
                                <button className="Button" onClick={removeHandler}>
                                    Remove Item
                                </button>
                            </div>
                        ):
                        (
                            <div>
                                <button className="Button" onClick={addHandler}>
                                    Add To Cart
                                </button>
                            </div>
                        )  
                    }

                </div>
            </div>

        </div>



    )

}
export default Card;