import React from 'react'
import './FromFirst.css'

const Form1 = ({ formData, setFormData }) => {
  return (
    <div className='fromFistConatiner'>
    <div className='UserName'>
        <h3>Enter Name*</h3>
        <input type='text' value={formData.name} placeholder='Eg. John Doe'  onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }></input>
    </div>
    <div className='UserEmail'>
        <h3>Enter Email*</h3>
        <input type='email' value={formData.email} placeholder='Eg. John@xyz.com' 
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
          ></input>
    </div>
    <div className='UserPhone'>
        <h3>Enter Phone*</h3>
        <input type='text' value={formData.phone} placeholder='Eg.9123456789'
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }></input>
    </div>
    {/* <div><button>next</button></div> */}
 



    </div>
  )
}

export default Form1