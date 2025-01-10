import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopup/LoginPopUp'
//import Verify from './pages/Verify/Verify'


const App = () => {

const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/> : <></>}
     <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
         < Route path='/' element={<Home/>} />
         < Route path='/cart' element={<Cart/>} />
         < Route path='/order' element={<PlaceOrder/>} />
        {/*<Route path='/Verify' element={<Verify/>}/>*/}
 
       </Routes>
     </div>
     <Footer/>
    </>
  )
}

export default App
