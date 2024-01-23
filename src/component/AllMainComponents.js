import React from 'react'
import Navbar from './Navbar'
import DashBoard from './DashBoard'
import './AllMainComponents.css'

const AllMainComponents = ({handleopen,userInfo,handletoggel,tog}) => {
  return (
    <div className='AllMainComponents'>
        <Navbar tog={tog}></Navbar>
     <DashBoard handleopen={handleopen} userInfo={userInfo} handletoggel={handletoggel} tog={tog}></DashBoard>
    </div>
  )
}

export default AllMainComponents