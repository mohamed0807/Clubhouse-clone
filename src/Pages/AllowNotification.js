import React from 'react'
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

function AllowNotification() {
  return (
    <div className={style.phoneConfirmationContainer}>
      <div className='text-center'>
        <h1 className='mb-4'>Last, important step!</h1>
        <h1 className='mb-3'>Enable notification to know when people are talking</h1>
      <div className={style.notificationContainer}>
        <div className='p-3'>
            <h3>"ClubHouse" Would Like to Send Notification</h3>
            <p>Notifications may include alerts, Sounds, and icon badges</p>
        </div>
        <div className={style.actionBtn}>
            <Link exact to="/home">
                Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <img src='https://cdn-icons-png.flaticon.com/512/636/636047.png' alt='' className={style.hand_icon}/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default AllowNotification
