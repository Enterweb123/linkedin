import React, { useEffect, useState } from 'react';

// import style
import "./App.css";

import Login from "./components/Login/Login";

// precistent login user data maintain
import { auth } from "./firebase";

//  cloud based event listener
import { onAuthStateChanged } from "firebase/auth";

// components -
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';

function App() {

  const [user, setUser] = useState();
  // console.log(user);

  // store login data to cloud event listener - one time only
  // onAuthStateChanged - realtime event listener
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  console.log(auth);

  return (
    <div className='app'>

      {!user ? (
        <Login setUser={setUser} />
      ) : ( 
        <>
          <Header user={user} />

          <div className='app_body'>

            <LeftSidebar user={user} />
            <Feed user={user} />
            <RightSidebar/>

          </div>

        </>
      )
      }
    </div>
  )
}

export default App
