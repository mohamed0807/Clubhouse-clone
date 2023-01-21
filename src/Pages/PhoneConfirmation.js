import React,{useState} from 'react'
import style from '../style/phoneConfirm.module.css'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input';

function PhoneConfirmation() {
    const [ value,setValue]=useState();
    return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn} >
        <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt=''/>
      </Link>
      <h1>Enter Your Number </h1>
      <PhoneInput international defaultCountry='US' value={value} onChange={setValue}/>
      <p>By entering your number, you're aggreing to our {" "}
      <span>Terms of Service and Privacy Policy. </span>
      Thanks!
      </p>
      <Link exact to='/code_confirm' className='primaryBtn d-flex align-items:center'>
        Next <img style={{height:'20px',marginTop:'5px',paddingLeft:"5px"}} src='https://cdn-icons-png.flaticon.com/512/271/271228.png' alt='' className='ml-1'/>
      </Link>
    </div>
  )
}

export default PhoneConfirmation
