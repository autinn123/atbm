import './App.css';
import React, {useState}  from 'react';
import useToken from './useToken';
import WelcomePage from './pages/WelcomePage';
import StaffPage from './pages/StaffPage';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <WelcomePage setToken={setToken} />
  }

  return (
    <StaffPage />
  );
}

export default App;
