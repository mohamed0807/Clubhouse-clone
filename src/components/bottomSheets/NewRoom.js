import React, { useState } from 'react';
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile,AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill,BsMicFill } from 'react-icons/bs';


function NewRoom(props) {
    const [micMuteVisible,setMicMuteVisible]=useState(false);
    const [itemsVisible,setItemsVisible]=useState(true);
    const card=props.cardDetail;
      return (
        
    <div className={style.roomDetailContainer}>
        <div className={style.head}>
            <div className={"d-flex align-items-center"}>
                <a
                href='#'
                onClick={()=>{
                    props.setSheetVisible(false)
                }}>
                    <img alt='' src='https://cdn-icons-png.flaticon.com/512/271/271220.png' className={style.arrow_icon}/>
                </a>
                <span>Hallway</span>
            </div>
            <div>
                <AiOutlineFile/>
                <img className={style.profile_img} src='https://i.pinimg.com/736x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt='profile pic'/>
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
                    <img src='https://i.pinimg.com/736x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg' alt='profile pic'/>
                        
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
            <img src='https://cdn-icons-png.flaticon.com/512/624/624837.png' alt='' />
            Leave Quietly
        </button>
        <div>
            <button>
                <AiOutlinePlus/>
            </button>
            <button>
                <img src='https://cdn-icons-png.flaticon.com/512/3898/3898664.png' alt=''/>
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
