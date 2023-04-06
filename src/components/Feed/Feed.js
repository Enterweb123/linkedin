import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {db} from "../../firebase";
import PostUploader from '../PostUploader/PostUploader';
import StoryReel from '../StoryReel/StoryReel';
import "./Feed.css";

// components
import Post from '../Post/Post';

const Feed = ({user}) => {
    const [posts,setPosts] = useState([]);
    // use effect one time run on component but firebase event listoner automatical listen and update
    useEffect( ()=> {
      // get data fro db
     const q  = query(collection(db,"posts"),orderBy("timestamp", "desc"));

    //  lsiten that db data change and update to component state
    // onSnapshot - Real time event Listener from firebase - listen to db change
     onSnapshot( q, (snapShot)=>{
        setPosts( 
          snapShot.docs.map( (doc) =>{
            return {
                id:doc.id,
                data:doc.data(),
            };
          })
        );
      });
    }, []);
  // console.log(posts); 

  return (
    <div className='feed'>
      {/* <StoryReel /> */}

      <PostUploader user={user} />
      
      {
        posts.map( (post)=>(
            <Post
            key={post.id}

            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            description="description"
            />
        ))
      };

    </div>
  )
}

export default Feed
