import React, { useState, useEffect } from 'react';
import NavigationBar from './home/NavigationBar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  useEffect(() => {
    if(window.localStorage.getItem('authToken')) {
      setSessionToken(window.localStorage.getItem('authToken'));
    }
  }, [])

  const updateToken = (newToken) => {
    window.localStorage.setItem('authToken', newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    window.localStorage.clear();
    setSessionToken('');
  };

  const protectedViews = () => {
    return(sessionToken === window.localStorage.getItem('authToken') ? <WorkoutIndex token={sessionToken} /> : <Auth updateToken={updateToken}/>)
  };

  return (
    <div> 
      <NavigationBar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
