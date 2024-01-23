import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="footerbox">
            <div className="footertop">
                <div className="one">
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="" />
                    <p>Asorem ipsum adipolor sdit amet, <br /> consectetur adipisicing elitcf sed do <br /> eiusmod tem.</p>
                </div>
                <ul className="two">
                    <h4>Quick Links</h4>
                    <li>About</li>
                    <li>Offers & Discounts</li>
                    <li>Get Coupon</li>
                    <li>Contact Us</li>
                </ul>
                <ul className='two'>
                    <h4>New Products</h4>
                    <li>Woman Cloth</li>
                    <li>Fashion Accessories</li>
                    <li>Man Accessories</li>
                    <li>Rubber made Toys</li>
                </ul>
                <ul className='two'>
                    <h4>Support</h4>
                    <li>Frequently Asked Questions</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Report a Payment Issue</li>
                </ul>
            </div>
            <div className="footerbottom">
                <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
                <div className="icons">
                    <div className="icon"><i class="fa-brands fa-twitter"></i></div>
                    <div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className="icon"><i class="fa-brands fa-behance"></i></div>
                    <div className="icon"><i class="fa-solid fa-globe"></i></div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer