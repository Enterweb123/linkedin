import { Avatar } from '@mui/material';
import React from 'react';
import './LeftSidebar.css';

// componetns
import Mypages from '../Mypages/Mypages';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
const sidebar = ({user}) => {

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'> # </span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>

      <div className="sidebar_top">
        <img src={user.photoURL} alt="" />
        <Avatar className='sidebar_avatar'
         src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

       <div className="sidebar_starts">
        <div className="sidebar_start">
          <p>Who viewd you</p>
          <p className='sidebar_startNumber'>
            2,589
          </p>
        </div>

        <div className="sidebar_start">
          <p>Views on post</p>
          <p className='sidebar_startNumber'>
            8,589
          </p>
        </div>
      </div>

      <div className="sidebar_bottoms">

        <p>My pages(3)</p>
         <Mypages imgs="https://thumbs.dreamstime.com/b/closeup-bengal-cat-profile-view-black-background-50946262.jpg" titles="cat teams" descroptions="improve cat health" counts="10" />
         <Mypages imgs="https://thumbs.dreamstime.com/b/closeup-bengal-cat-profile-view-black-background-50946262.jpg" titles="cat teams" descroptions="improve cat health" counts="10" />
         <Mypages imgs="https://thumbs.dreamstime.com/b/closeup-bengal-cat-profile-view-black-background-50946262.jpg" titles="cat teams" descroptions="improve cat health" counts="10" />

      </div>

      <div className="sidebar_bottom">
        <p>recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}

        <h6 style={{color:"blue"}}>Groups</h6>
        <h6 style={{color:"blue"}}>Events</h6>
        <h6 style={{color:"blue"}}>Followed Hastags</h6>

        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
        
        <div className="show_more">
           <p> show more</p>
           <KeyboardArrowDownRoundedIcon/>
        </div>
      </div>


    </div>
  )
}

export default sidebar
