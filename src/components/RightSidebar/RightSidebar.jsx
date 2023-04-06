import { Avatar } from '@mui/material';
import React from 'react';
import './RightSidebar.css';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
// componetns
import Mypages from '../Mypages/Mypages';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const RightSidebar = () => {

  const recentItem = (title,para) => (
    <>
      <div className='Right_sidebar_recentItem'>

              <FiberManualRecordRoundedIcon style={{
                fontSize:"10px"
              }}/> 

          <div className='Right_sidebar_title'> 
              <h6>{title}</h6>
              <p>{para}</p>
          </div>

      </div>
    </>
  )

  return (
    <div className='Right_sidebar'>

      <div className="sidebar_bottoms">
        <div className="show_more">
            <p>LInkedIn News</p>
            <InfoRoundedIcon style={{
                fontSize:"15px"
              }}/>
        </div>
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
      </div>
      <div className="sidebar_bottoms">
        <div className="show_more">
            <p>LInkedIn News</p>
            <InfoRoundedIcon style={{
                fontSize:"15px"
              }}/>
        </div>
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
      </div>
      <div className="sidebar_bottoms">
        <div className="show_more">
            <p>LInkedIn News</p>
            <InfoRoundedIcon style={{
                fontSize:"15px"
              }}/>
        </div>
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
        {recentItem("game On zoom","facebook,insta")}
      </div>


    </div>
  )
}

export default RightSidebar
