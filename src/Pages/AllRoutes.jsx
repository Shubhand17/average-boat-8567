import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home'
import { Order } from './Order'
import { Otp } from './Otp'
import { Address} from './Address'
import Products from './Product'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path ="/cart" element={<Cart/>}></Route> */}
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/otp" element={<Otp />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/address" element={<Address />}></Route>
         
           

        </Routes>

    )
}