import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import { Link } from 'react-router-dom'
import { BsAt,BsPlus,BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'

function Profile() {
  return (
    <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
            <div className={`${exploreStyle.head} text-right mb-0`}>
                <Link to='/home'>
                    <img 
                    src='https://cdn-icons-png.flaticon.com/512/271/271220.png'
                    alt='' 
                    className={exploreStyle.arrow_icon}
                    />
                </Link>
                <div className={style.actionBtn}>
                    <BsAt/>
                    <BsUpload/>
                    <AiOutlineSetting/>
                </div>
            </div>
        </div>
        <img src='https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt='' className={style.profile_image}/>
        <h4>John Doe</h4>
        <p>@doejohn</p>
        <div className={style.follow}>
            <p>
                <span>0 </span>Followers
            </p>
            <p>
                <span>51</span> Following
            </p>
        </div>
        <button>Add a Bio</button>
        <div className='mb-4'>
           <button className='mb-0'>
                <AiOutlineTwitter/> Add Twitter
           </button>
           <button className='mb-0'>
                <AiOutlineInstagram/> Add Instagram
           </button>
        </div>
        <div className={style.nominated}>
            <img src='https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt=''/>
            <div>
                <p>Joined 12-Dec-2022</p>
                <p>Nominated By <span>John Doe</span></p>
            </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
            <BsPlus/>
        </button>
    </div>
  )
}

export default Profile
