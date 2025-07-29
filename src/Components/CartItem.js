
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

function CartItem({data}){
    const dispatch=useDispatch();
    const removeHandler=()=>{
        dispatch(remove(data.id));
        toast.error("Item remove Successful")

    }
    return(
        <div className="CartItem">
            <div>
                <img className="images1"  src={data.image}/>

            </div>
            <div className="cart-description"> 
                <h4>{data.title}</h4>
                <p className="c-desc">{data.description.substr(0,75)+("...")}</p>
                <div className="del-icon-container">
                    <span className="price">${data.price}</span>
                    <div className="del-button">
                        <MdDelete onClick={removeHandler}/>
                    </div> 
                </div>
            </div>
            
        </div>

    )
}
export default CartItem;