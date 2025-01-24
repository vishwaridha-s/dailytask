import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="./logo.png" width="200px" height="100px"/>
      <button id="siginbutton">Sign in</button>
      <div class="mainpage">
        <h1>Unlimited movies,Tv<br></br>shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.
        Ready to watch? Enter your email to create or restart your membership.</h3>
        <form action="/login" method="POST">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder='enter username' required/>
        <br></br>
        <label For="password">Password</label>
        <input type="password" id='password' name='password' placeholder='enter password' required/>
        <br></br>
        <button onClick='./dashbord.jsx'>get Started</button>
        <br></br>
        </form>
      </div>
    </>
  )
}

export default App
