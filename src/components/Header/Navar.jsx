
const Navar = () => {
    return (
        <div className="flex justify-between w-11/12 mx-auto p-5 border-b-1">
            <h1 className="text-2xl font-semibold"><i>Gadgets-E-Mart</i></h1>
            <div className="flex justify-center gap-5 font-bold">
                <ul className=" flex gap-5 ">
                    <a className="hover:text-emerald-500" href="">Home</a>
                    <a className="hover:text-emerald-500" href="">About</a>
                    <a className="hover:text-emerald-500" href="">Product</a>
                    <a className="hover:text-emerald-500" href="">Cart</a>
                </ul>
                <span>$</span>
            </div>
        </div>
    );
};

export default Navar;