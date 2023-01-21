import React, { useState } from 'react';
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile,AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill,BsMicFill } from 'react-icons/bs';


function NewRoom(props) {
    const [micMuteVisible,setMicMuteVisible]=useState(false);
    const [itemsVisible,setItemsVisible]=useState(true);
    const card=props.cardDetail;
    console.log("hello there")
      return (
        
    <div className={style.roomDetailContainer}>
        <div className={style.head}>
            <div className={"d-flex align-items-center"}>
                <a
                href='#'
                onClick={()=>{
                    props.setSheetVisible(false)
                }}>
                    <img src='/images/arrow.png' className={style.arrow_icon}/>
                </a>
                <span>Hallway</span>
            </div>
            <div>
                <AiOutlineFile/>
                <img className={style.profile_img} src='/images/pro2.jpg'/>
            </div>
        </div>
    <div className={style.roomDetailCard}>
        <div
        className='d-flex align-items-center justify-content-between flex-wrap'
        style={{padding:"0.5em 1em"}}>
            {card.members.map((item)=>(
                <div className={style.memberContainer}>
                    {micMuteVisible ? (
                        <div className={style.audioIcon}>
                            <BsMicMuteFill/>
                        </div>
                    ) : (
                        " "
                        )}
                    <img src='/images/pro2.jpg'/>
                        
                    <p>
                    
                        <span>*</span>
                        {item.first_name}
                    </p>    
                 </div>
                 
        ))}
            
        </div>
    </div>
    <div className={style.footer}>
        <button onClick={()=>{
            props.setSheetVisible(false);
        }}>
            <img src='/images/hand-peace.png'/>
            Leave Quietly
        </button>
        <div>
            <button>
                <AiOutlinePlus/>
            </button>
            <button>
                <img src='images/stopHandIcon.png'/>
            </button>
            <button onClick={()=>setMicMuteVisible(!micMuteVisible)}>
                {micMuteVisible?<BsMicMuteFill/>:<BsMicFill/>}
            </button>
        </div>
    </div>
        
    </div>
  )
}

export default NewRoom
