import React from 'react'
import './FromSecond.css'
const From2 = ({ formData, setFormData }) => {
  return (
    <div>


   <div className='FromSecondContainer'>

    
    <div className='instagramLink'>
        <h3>Instagram Link(Optional)</h3>
        <input type='text' value={formData.youtube} placeholder='Eg. ..instragram.com/username'
         onChange={(e) => {
          setFormData({ ...formData, youtube: e.target.value });
        }}></input>
    </div>
    <div className='youtubeLink'>
        <h3>Youtube Link(Optional)</h3>
        <input type='text' value={From2.instagram} placeholder='Eg. ..youtube/username'
         onChange={(e) => {
          setFormData({ ...formData, instagram: e.target.value });
        }} ></input>
    </div>
   
   </div>
 
    </div>
  )
}

export default From2