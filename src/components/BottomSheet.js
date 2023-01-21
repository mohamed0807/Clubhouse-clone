import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import style from '../style/bottomSheet.module.css'
import StartRoom from './bottomSheets/StartRoom'
import NewRoom from './bottomSheets/NewRoom'

function BottomSheet(props) {
  return (
      <div className={style.container} style={{width:"500px"}}>
        <SwipeableBottomSheet style={{display:"flex",justifyContent:"center"}} 
      open={props.sheetVisible} 
      onChange={()=>{
        props.setSheetVisible(!props.sheetVisible)
        props.setItemsVisible(true)
      }}
      fullScreen={props.sheetTitle =='room detail' ? true:false}>
        
        <div className={style.bottomSheetContainer} 
        style={{backgroundColor:props.sheetTitle == "profile" ? "transparent":""}}
        >
        {props.sheetTitle=="new room" ?(
            <NewRoom 
            cardDetail={props.cardDetail}
            setSheetVisible={(item)=>{
              props.setSheetVisible(item);
              props.setItemsVisible(true);
            }}
            />
            ):props.sheetTitle=="start room" ?(
              <StartRoom 
              setSheetCreateRoom={props.setSheetCreateRoom}
              setSheetVisible={(item)=>{
                props.setSheetVisible(item);
                props.setItemsVisible(true);
              }}
            />
              ): ("")}
        </div>

        {/* <NewRoom/> */}
      </SwipeableBottomSheet>
      </div>
  )
}

export default BottomSheet
