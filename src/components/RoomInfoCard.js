import React,{useState,useEffect} from 'react'
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
import {BsChatDots,BsChatDotsFill,BsFillPersonFill} from 'react-icons/bs' 

function RoomInfoCard() {
  return (
    <div>
      {data.map((item)=>(
        <div>
        <div>
            <div className={style.roomCardContainer}>
                <h6>{item.title}</h6>
                <h2>{item.sub_title}</h2>
                <div className={style.roomMembers}>
                    <div>
                        <img src='https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt=''/>
                        <img src='https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt=''/>
                    </div>
                    <div>
                        {item.members.map((person)=>(
                            <p>
                                {person.first_name} {person.last_name}  <BsChatDots/>
                            </p>
                        ))}
                        <p className='d-flex align-items-center'>
                            <span className='mr-2'>1.8</span>
                            <BsFillPersonFill/>
                            <span className='mx-2'></span>{" "}
                            <span className='mr-2'>5</span><BsChatDotsFill/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
      )}
    </div>
  )
}

export default RoomInfoCard
