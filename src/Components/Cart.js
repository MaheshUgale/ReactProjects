import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center my-3 p-4">
            <h2 className="text-[25px] font-bold">Cart</h2>
            <div className="w-6/12 m-auto p-4">
                <button className="p-3 m-2 bg-black text-white cursor-pointer rounded-lg" onClick={handleClearCart}>ClearCart</button>
                <p>{cartItems.length === 0 && <h2>Cart is empty! add it</h2>}</p>
                <ItemList list={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;