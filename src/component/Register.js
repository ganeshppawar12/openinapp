import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthentication';
import{Link, useNavigate} from 'react-router-dom'
import git from '../image/git.png'
import x from '../image/x.png'
import linked from '../image/linked.png'
import discord from '../image/discord.png'
import google from '../image/google-icon 1.png'
import apple from '../image/apple 1.png'
import CircularIndeterminate from "./progresser";



const Login = () => {

const  [email, setEmail] = useState("");
const [password, setPassword]= useState("");
const [error,setError] = useState("");
const {signUp,googleSignIn} = useUserAuth()
const navigate = useNavigate();
const [loaded, setloaded] = useState(false);


const handleSubmit =async (e)=>{
  e.preventDefault();
  setError("")
  try{
    setloaded(true);

    await signUp(email, password);
    navigate('/')
    setloaded(false);

  }catch(err){
    setError(err.message)

  }
}

const handleGoogleSignin = async (e) => {
  e.preventDefault();
  try {
    setloaded(true);

    await googleSignIn();
    navigate("/dashboard");
    setloaded(false);

  } catch (err) {
    setError(err.message);
    
  }
};
  return (
    <div className="LoginContainer">
   { loaded ?  <CircularIndeterminate></CircularIndeterminate>:
   <>
             <div className="loginleftSide">

             <div className="loginLogo">
        <h3>LOGO</h3>
      </div>
      <div className="LoginTitel">

      <h1>Board.</h1>
     </div>
     <div className="loginSocialIcon">

<img src={git}></img>
<img src={x} ></img>
<img src={linked} ></img>
<img src={discord}></img>

</div>
     </div>

     <div className="fromrightSection">
        <div className="loginbox">
          <div className="SignIn">
          <h3>Sign In</h3>
          <p>Sign in to your account</p>
        </div>
        <div className="DirectLogin">
            <div className="googleLink" onClick={handleGoogleSignin}><img src={google}></img><p>Sign in with Google</p></div>
            <div className="googleLink"><img src={apple}></img><p>Sign in with Apple</p></div>

          </div>
          <div className="loginfrom">
            <div className="loginfrombox">
            <p>Email address</p>
            <input type='email' placeholder='johndoe@2gmail.com' onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <div  className="loginfrombox">

            <p>password</p>
            <input type='password'  onChange={(e)=> setPassword(e.target.value)}></input>
          </div>
      
          <div className="loginSign">
            <button onClick={handleSubmit}>Register</button>
          </div>
        </div>
        <div className="Doyouhave">
          <p> have a account? <Link to='/'><span className="register">Login</span></Link>  </p>
        </div>
      </div>
     </div>
     </>
}
    </div>
  )
}

export default Login