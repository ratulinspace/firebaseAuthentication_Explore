import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }


  return (
    <div className="App">
      {
        user.email ? <button className='btn' onClick={handleSignOut}>Sign Out</button>
          :
          <button className='btn' onClick={handleGoogleSignIn}>Google Sign In</button>
      }
      <br />
      <h3>User Name: {user.displayName}</h3>
      <h4>Email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
