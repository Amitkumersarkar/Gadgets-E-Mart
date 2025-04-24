import './CartContainer.css';
const CartContainer = ({ handleIsActiveState }) => {
    // console.log(handleIsActiveState)
    return (
        <div>
            <h2 className='text-xl font-bold'>CartContainer</h2>

            <div className='flex justify-center gap-7 p-2 font-semibold'>
                <div onClick={() => handleIsActiveState("cart")} className='cart-btn btn'>Cart</div>
                <div onClick={() => handleIsActiveState("about")} className='about btn'>About</div>
            </div>
        </div>
    );
};

export default CartContainer;