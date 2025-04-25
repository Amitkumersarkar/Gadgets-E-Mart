
import { useState } from 'react'
import './App.css'
import AllProducts from './components/Allproducts/Allproducts'
import CartContainer from './components/CartContainer/CartContainer'
import Navar from './components/Header/Navar'

function App() {
  // conditional rendering and props drilling in cart and about section
  const [isActive, setIsActive] = useState({
    // default value as an objects
    cart: true,
    status: "active",
  })
  // console.log(isActive);
  // to manage a state declare an eventHandler function
  const handleIsActiveState = (status) => {
    // conditional rendering 
    if (status == "cart") {
      // changing setIsActive value
      setIsActive({
        // give this objects
        cart: true,
        status: "cart",
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about",
      })
    }
  }
  // console.log(isActive)
  return (
    <>
      <Navar></Navar>
      <div className='flex justify-around p-4'>
        <AllProducts></AllProducts>
        <CartContainer isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>

      </div>
    </>
  )
}


export default App
