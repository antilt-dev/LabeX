import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import {Container} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';


const HeaderTravelsAdm=()=>{
    const onClickBack=()=>{console.log('back')}
    const onClickCreateTravel=()=>{console.log('create travel')}
    const onClickLogout=()=>{console.log('logout')}


  return (
   <Container>
    <h1>Control Painel</h1>
    <div>
        <ButtonPrimary
        onClick={onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
        />
        <ButtonPrimary
        onClick={onClickCreateTravel}
        startIcon={<AddBoxIcon/>}
        children="New travel"
        />
        <ButtonPrimary
        onClick={onClickLogout}
        startIcon={<LogoutIcon/>}
        children="Logout"
        />
    </div>
   </Container>
  );
}

export default HeaderTravelsAdm;