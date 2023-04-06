import React from 'react'
import "./Header.css";
import LogoIcon from '../../img/linkedin.png';

// mui components
import { Avatar, IconButton } from "@mui/material";
import HeaderOption from '../HeaderOption/Header_Option';

// mui icons
import {Logout} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

// logout auth import for button use
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";


const Header = ({ user }) => {
  return (
    <div className='header'>

       <div className='header_left'> 
             <img src={LogoIcon} alt="logo" />
             <div className="header__search">
              <SearchIcon />
              <input type="text" />
             </div>
        </div>

      <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title="home"/>
            <HeaderOption Icon={PeopleAltIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption 
            avatar={user.photoURL}  title={user.displayName} />

            <HeaderOption onClick={() => signOut(auth)} Icon={Logout} title="Logout"/>
      </div>

    </div>
  )
}

export default Header;
