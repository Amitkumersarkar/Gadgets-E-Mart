import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css';
const CartContainer = ({ handleIsActiveState, isActive }) => {
    // console.log(isActive)
    return (
        <div>
            <h2 className='text-2xl font-bold'>CartContainer</h2>

            <div className='flex gap-5 p-2 font-semibold'>
                {/* declare ternary operator */}
                <div onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn active" : "btn"}`}>Cart</div>
                <div onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? "btn" : "btn active"}`}>About</div>
            </div>
            {/* another conditional rendering */}
            {
                isActive.cart ? <Cart></Cart> : <About></About>
            }


        </div>
    );
};

export default CartContainer;