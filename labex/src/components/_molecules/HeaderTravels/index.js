import React from "react";
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import {Container} from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardTravelIcon from '@mui/icons-material/CardTravel';

const HeaderTravels=()=>{
  const onClickBack = ()=>{console.log('back')}
  const onClickReserve = ()=>{console.log('reserve')}
  return (
   <Container>
        <ButtonPrimary
        onCLick={onClickBack}
        children="Back"
        startIcon={<ArrowBackIcon/>}
        />
        <ButtonPrimary
        onCLick={onClickReserve}
        children="Reserve"
        startIcon={<CardTravelIcon/>}
        />
   </Container>
  );
}

export default HeaderTravels;