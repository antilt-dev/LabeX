import React from "react";
import {Container} from './styles'
import LoginIcon from '@mui/icons-material/Login';
import RocketIcon from '@mui/icons-material/Rocket';
import ButtonPrimary from "../../_atoms/ButtonPrimary";

const HomeButtons=()=>{
    const onClickLogin = ()=>{console.log('login')}
    const onClickTravels = ()=>{console.log('travels')}
  return (
   <Container>
    <ButtonPrimary 
        onClick={onClickLogin}
        children="Admin Login" 
        endIcon={<LoginIcon 
            size="small"
        />}
    />
    <ButtonPrimary 
        onClick={onClickTravels}
        children="ShoW Travels" 
        endIcon={<RocketIcon 
            size="small"
        />}
    />
   </Container>
  );
}

export default HomeButtons;