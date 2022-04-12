import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(
        result => {
          const user = result.user;
          setUser(user);
        })
      .catch(error => {
        console.log(error)
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
        user.uid ? <button className='btn' onClick={handleSignOut}>Sign Out</button>
          :
          <div>
            <button className='btn' onClick={handleGoogleSignIn}>Google Sign In</button>
            <button className='btn' onClick={handleGithubSignIn}>Github Sign In</button>
          </div>
      }
      <br />
      <h3>User Name: {user.displayName}</h3>
      <h4>Email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
