import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import StandardInput from "../../_atoms/StandardInput";
import {Container} from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';


const LoginArea=(props)=>{
  const onClickSubmit =()=>{console.log('submit')}
  return (
   <Container>
      <StandardInput 
      placeholder="E-mail"
      type="email"
      icon={<AccountCircleIcon/>}
      />
      <StandardInput 
      placeholder="Password"
      type="password"
      icon={<PasswordIcon/>}
      />
      <ButtonPrimary
      onClick={props.onClick}
      children="LOGIN"
      />
   </Container>
  );
}

export default LoginArea;