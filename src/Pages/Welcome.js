import React from "react";
import style from '../style/welcome.module.css'
import { Link } from "react-router-dom";


function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomeinfo}>
        <p>
            We're working hard to get clubhouse ready for everyone while we wrap up the finishing touches,we're adding people gradually to make sure nothing breaks
        </p>
        <p>
            Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have a friend ont he app who can let you in. We are so gratefull you're here and can't wait to have you join!
        </p>
        <p>
            Programmer
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link 
          exact 
          to="/invite" 
          className="primaryBtn d-flex align-items-center mb-3">
            Get Your Username{" "}
            {/* <img src="https://i.pinimg.com/564x/30/1c/62/301c62489c327fa359c51b3a5104c680.jpg" alt=""></img> */}
        </Link>
        <Link>
          Have an invite text? Sign in
        </Link>
      </div>
    </div>
  )
}

export default Welcome
