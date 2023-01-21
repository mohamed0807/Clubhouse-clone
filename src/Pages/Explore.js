import React from 'react'
import style from '../style/explore.module.css'
import {DownOutlined,FireOutlined} from '@ant-design/icons'
import data from '../data/Explore.json'
import {Input} from 'antd'
import Subheader from '../components/Subheader'

function Explore() {
    const{ people , conversation } = data;

  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <Subheader pageTitle="EXPLORE"/>
        <Input style={{
          width:"90%",
          backgroundColor:"white",
          borderRadius:"0.8em",
          padding:"0.3em 1em",
          border:"none",
          boxShadow:"none"
        }}
        size="large"
        placeholder='Find People and Clubs'
        prefix={<img src='images/search.png' width="15px"/>}></Input>
      </div>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((item)=>(
        <div>
                <div className='d-flex align-items-center'>
                <img src='/images/pro2.jpg'/>
                <div className='ml-2'>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>
            </div>
            <button>Follow</button>
        </div>
        
        ))}
        <button className={style.showMore}>
            Show More People <DownOutlined/>
        </button>
      </div>
      <h6>FIND CONVERSATION ABOUT ...</h6>
            <div className='row mx-0' className={style.concon}>
              {conversation.map((item)=>(
                <div className='colo-6 px-2 mb-3'>
                  <div className={style.conversationCard}>
                    <h6>
                      <FireOutlined/>
                      {item.title}
                    </h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Explore
