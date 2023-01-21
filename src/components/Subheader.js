import React from 'react'
import { Link} from 'react-router-dom'
import style from '../style/explore.module.css'

function Subheader(props) {
  return (
    <div className={style.head}>
        <Link to='/home'>
            <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt=''/>
        </Link>
        <h3>{props.pageTitle}</h3>
    </div>
  )
}

export default Subheader
