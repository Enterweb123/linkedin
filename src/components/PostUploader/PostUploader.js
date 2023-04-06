import React, { useState } from 'react';
import { Avatar, LinearProgress } from "@mui/material";

// firebase storage referance
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// get storage variable from  own firebase file
import { db, storage, timestamp } from '../../firebase';

// firebase database referance
import { addDoc, collection } from 'firebase/firestore';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';

// componets
import InputOption from '../InputOption/InputOption';

// Icons
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const PostUploader = ({ user }) => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState("");

    const handleSubmit = (formevent) => {
        formevent.preventDefault();
        // console.log("handleSubmit");

        // create file uploaded destination or storage path
        const storageRef = ref(storage, `images/${image.name}`);

        // real file upload function
        const uploadTask = uploadBytesResumable(storageRef, image);

        // Live track file uploading percentage
        uploadTask.on("state_changed",
            (snapShot) => {
                const progress = Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
                setProgress(progress);

            }, (err) => {
                console.log(err);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                    // after file uploading save data to db function
                    await addDoc(collection(db, "posts"), {
                        message: input,
                        timestamp: timestamp,
                        profilePic: user.photoURL,
                        username: user.displayName,
                        image: downloadURL,
                    });

                    setProgress(0);
                    setInput("");
                    setInput("");

                });
            })

    }


    return (
        <div className='Feed__inputContainer'>


            <div className='input_feed_control'>


                <div className='Feed__input'>
                <Avatar className="photoname" src={user.photoURL} />
                    <form>
                        <input
                            className='postUploader__input'
                            type='text'
                            value={input}
                            placeholder={` What's on your mind, ${user.displayName} `}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                        
                        
                        <button type='submit' onClick={handleSubmit}>
                            random
                        </button>
                    </form>
                </div>

            </div>

            {progress > 0 && (
                <LinearProgress variant="determinate" value={progress} />
            )}

            <div className="feed_inputOptions">
                <InputOption color="#70B5f9" title='Photo'
                    Icon={ImageIcon} />
                <InputOption color="#E7A33E" title='Video'
                    Icon={SubscriptionsIcon} />
                <InputOption color="#C0CBCD" title='Event'
                    Icon={EventNoteIcon} />
                <InputOption color="#7FC15E" title='write article'
                    Icon={CalendarViewDayIcon} />
            </div>


        </div>
    )
}

export default PostUploader;
