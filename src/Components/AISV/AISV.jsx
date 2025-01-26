import React from 'react'
import './AISV.css'
import AISV_logo from '../../assets/AISV_Logo.png'

const AISV = () => {
  return (
    <div className='aisv'>
        <div className="aisv-left">
            <h2>Located in Vienna, American International School (AISV) empowers each student to become positively impactful global citizens. </h2>
        </div>
        <div className="aisv-right">
            <img src={AISV_logo} alt="" className='aisv-img'/>
        </div>
    </div>
  )
}

export default AISV