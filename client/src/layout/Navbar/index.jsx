import React, { useState } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const handleOpen = ()=>{
        setIsSideBarOpen(!isSideBarOpen)
    }
  return (
    <nav id='navbar'>
        <div className="navbox">
            <div className="navleft">
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="navmid">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                </ul>
            </div>
            <div className="navright">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <span><Link to={"/wishlist"}><i class="fa-solid fa-heart"></i></Link></span>
                <span><Link to={"/basket"}><i class="fa-solid fa-cart-shopping"></i></Link></span>
                <span className='sideopener' onClick={handleOpen}><i class="fa-solid fa-bars"></i></span>
            </div>
        </div>
        <div className={isSideBarOpen ? "sidebar" : "dnone"}>
        <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                </ul>
        </div>
    </nav>
  )
}

export default Navbar