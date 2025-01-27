import React from 'react';
import User from './User';
import Authorization from './Author';

const Auth = Authorization(User);

function App() {
  const user = { name: "Sri" };
  const isAuthorization = true;

  return (
    <>
      <h1>Doctor PROFILE</h1>
      <Auth isAuthorization={isAuthorization} user={user} />
    </>
  );
}
export default App;
