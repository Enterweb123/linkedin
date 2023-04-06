import React from 'react';
import "./Post.css";

import { Avatar } from "@mui/material";
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe,ThumbUp } from '@mui/icons-material';

// icons
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// componets
import InputOption from '../InputOption/InputOption';

const Post = ({description, profilePic,image, username,timestamp,message }) => {
  
    return (
    <div className='post'>
        <div className="post_header_top"> 
            <span> <h4>{username}</h4> </span>
            <span> and Monika,mohan AND 14othe connections </span>

        </div>
        
        <div className='post_header'>
            <Avatar src={profilePic} />
            <div className='post_headers'>
              <h3> {username} </h3>
              <p> {description} </p>
              <p>  {new Date( timestamp?.toDate() ).toString().slice(0,25)} </p>
            </div>
        </div>

        <div className='post_body'>
             {message}
        </div>

        <div className='post__image'>
             <img src={image} alt="post"/>
        </div>

        <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon}
                    color="blue"
                />
                <InputOption Icon={ChatOutlinedIcon}
                    color="green"
                />
                <InputOption Icon={FavoriteRoundedIcon}
                    title="29.11 comments"
                    color="red"
                />
        </div>

        <hr/>
        <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon}
                    title="Link"
                    color="gray"
                />
                <InputOption Icon={ChatOutlinedIcon}
                    title="Link"
                    color="gray"
                />
                <InputOption Icon={ShareOutlinedIcon}
                    title="Link"
                    color="gray"
                />
                <InputOption Icon={SendOutlinedIcon}
                    title="Link"
                    color="gray"
                />
        </div>

    </div>
  );
};

export default Post;