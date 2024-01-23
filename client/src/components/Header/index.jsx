import React from 'react'
import "./index.scss"

const Header = () => {
  return (
    <header id='header'>
        <div className="headerleft">
            <h1>Search new style</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa deserunt odio <br />illo nostrum libero blanditiis expedita animi quibusdam eius quidem.</p>
            <button>Shop Now</button>
        </div>
        <div className="headerright">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
        </div>
    </header>
  )
}

export default Header