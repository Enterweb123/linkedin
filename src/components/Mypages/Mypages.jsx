import React from 'react'
import { Avatar } from '@mui/material';
import './Mypages.css'

const Mypages = ({imgs,titles,descroptions,counts}) => {

  return (
    <div className="Mypages">

        <Avatar src={imgs} />
        <div className="Mypages_content">
           <h3>{titles} </h3>

           <div className="Mypages_counts">
                <p>{descroptions}</p>
                <h4 style={{color:"blue"}}>{counts}</h4>
           </div>
        </div>

     
    </div>
  )
}

export default Mypages
