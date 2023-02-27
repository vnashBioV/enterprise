import React from 'react'
import construction from '../icons/construction.png'
import { useStateContext } from '../context/DashboardStateContext'
import { Link, useNavigate  } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate();
  const {
      isEnterprise,
      setIsEnterprise,
      isTracking,
      setIsTracking,
      isShowSchedule,
      setIsShowSchedule,
      setIsShowRequest,
      isShowRequest,
      cargoLink,
      setCargoLink,
  } = useStateContext();
  return (
    <div> 
         <div className='my-referals'>
          <img src={construction} alt="construction-icon" width={50} height={50}/>
          <p style={{marginTop:"30px"}}>This page is still under construction</p>
        </div>
    </div>
  )
}
