import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
const [show, handleShow] = useState(false);
useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else handleShow(false);
    })
    return () => {
        window.removeEventListener("scroll", null);
    };
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix Logo" />
        <img className='nav__avatar' src="https://yt3.ggpht.com/ytc/AKedOLQ93Thsn1XgksJT2R-Zw-67XQBb2VwZqphYV7lI=s900-c-k-c0x00ffffff-no-rj" alt="Netflix avatar" />
    </div>
  )
}

export default Nav