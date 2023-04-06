import React from 'react';
import './Header_Option.css';
import { Avatar } from '@mui/material';

const Header_Option = ({avatar, Icon, title ,onClick}) => {
  return (
    <div onClick={onClick} className="headerOption">
        { Icon && <Icon className="headerOption__icon" />       }
        { avatar && <Avatar src={avatar} className="headerOption__avatar" /> }
         <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default Header_Option
