import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'

function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src='https://cdn-icons-png.flaticon.com/512/2811/2811806.png' alt='search' />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite" >
            <img alt='' src='https://cdn-icons-png.flaticon.com/512/3817/3817079.png'/>
        </Link>
        
        <Link exact to="/upcoming" >
            <img alt='' src='https://cdn-icons-png.flaticon.com/512/747/747310.png'/>
        </Link>
        
        <Link exact to="/activity" >
            <img alt='' src='https://cdn-icons-png.flaticon.com/512/3119/3119338.png'/>
        </Link>
        
        <Link exact to="/profile" >
            <img alt='' style={{borderRadius:"50%",width:"30px",height:"30px",objectFit:"cover"}} src='https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg'/>
        </Link>

        
        
      </div>
    </div>
  )
}

export default Header
