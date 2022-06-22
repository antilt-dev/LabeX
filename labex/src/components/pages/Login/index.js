import React, { useState } from "react";
import LoginArea from "../../_molecules/LoginArea";
import {Container} from './styles';
import { goAdmTravels, goBack } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { urlLogin } from "../../constants/urlsAPI";

const Login=()=>{
  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [placeEmail,setplaceEmail] = useState("E-mail")
  const [placePassword,setPlacePassword] = useState("Password")
  const [loginError,setLoginError] = useState(false)

  const handleEmail = (e)=>{
      setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
      setPassword(e.target.value)
  }
  const onClickBack = ()=>{
    goBack(navigate)
  }
  const onLogin = ()=>{
    const body ={
      email,
      password
    }
  
    axios.post(urlLogin,body)
    .then((res)=>{
      localStorage.setItem("token",res.data.token);
      setPassword('')
      setEmail('')
      goAdmTravels(navigate)
    })
    .catch((err)=>{
      console.log(err.response.data)
      setplaceEmail("check your credentials");
      setPlacePassword("check your credentials");
      setPassword('');
      setEmail('');
      setLoginError(true);
    })
    
  }
  return (
   <Container>
      <h1>Admin Login</h1>
      <LoginArea 
        //email props
        handleEmail={handleEmail}
        valueEmail={email}
        placeholderEmail={placeEmail}
        //comum prop
        error={loginError} 
        //password props
        handlePassword={handlePassword}
        valuePassword={password}
        placeholderPassword={placePassword}
        //buttons props
        onClickLogin={onLogin}
        onClickBack={onClickBack}
      />
   </Container>
  );
}

export default Login;