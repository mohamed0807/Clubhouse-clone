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
                    src='"https://www.freeiconspng.com/uploads/left-arrow-6.jpg"' 
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
        <img src='/images/pro2.jpg' className={style.profile_image}/>
        <h4>Sano Manjiro</h4>
        <p>@manjirosano</p>
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
            <img src='images/pro2.jpg'/>
            <div>
                <p>Joined 12-Dec-2022</p>
                <p>Nominated By <span>Seijiro Atashi</span></p>
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
