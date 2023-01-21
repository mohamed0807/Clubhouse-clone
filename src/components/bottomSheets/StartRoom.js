import React,{ useState} from 'react'
import style from '../../style/bottomSheet.module.css';
import {FcGlobe} from 'react-icons/fc'

function StartRoom(props) {
    const [room,setRoom]=useState("open");
  return (
    <>
    <div className={style.switch_Line}></div>
    <div className='text-right'>
        <button className={style.addTopicBtn}>+Add a Topic</button>
    </div>
    <div className={style.selectRoom}> 
        <button className={room==="open"?style.active:""}
        onClick={()=>setRoom("open")}
        >
            <div className={room==="open"?style.active:""}>
                <FcGlobe/>
            </div>
            Open
        </button>
        <button className={room==="social"?style.active:""} 
        onClick={()=>setRoom("social")}>
            <div className={room==="social"?style.active:""}>
                <FcGlobe/>
            </div>
            Social
        </button>

        <button className={room==="closed"?style.active:""} 
        onClick={()=>setRoom("closed")}>
            <div className={room==="closed"?style.active:""}>
                <FcGlobe/>
            </div>
            Closed
        </button>
    </div>
    <p>Start a Room  <span>{room==="closed"?'for people I choose':
    room==="social"?'with people I follow':"open to everyone"}</span></p>
    <div className='text-center'>
        <button className={style.letGoBtn} 
        onClick={()=>{
            props.setSheetCreateRoom(true)
            props.setSheetVisible(true)
        }}>
         Let's go
        </button>
    </div>
    </>
  )
}

export default StartRoom
