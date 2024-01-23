import React from 'react'
import DashBorad from '../image/dashboard_icon.png'
import Transaction from '../image/transaction_icon.png'
import Schedules from '../image/schedule_icon.png'
import User from '../image/user_icon.png'
import Settings from '../image/setting_icon.png'
import './Navbar.css'


const Navbar = ({tog}) => {
  return (
    <div className='NavbarContainer'>

        <div className={tog ? 'hammenu':'NavbarBox'}>
            <div className='NavOptions'>
            <div className='NavbarHeading'><h2>Board.</h2></div>

                <ul>
                    <li> <img src={DashBorad}></img> Dashboard</li>
                    <li>  <img src={Transaction}></img>Transaction</li>
                    <li>  <img src={Schedules}></img>Schedules</li>
                    <li>  <img src={User}></img>User</li>
                    <li>  <img src={Settings}></img>Settings</li>

                </ul>
            </div>
            <div className='navbarFotter'>
                <ul>
                    <li>Help</li>
                    <li>Contact Us</li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar