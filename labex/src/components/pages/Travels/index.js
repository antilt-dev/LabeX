import React from "react";
import HeaderTravels from "../../_molecules/HeaderTravels";
import TravelCard from "../../_molecules/TravelCard";
import {Container} from './styles';
import {goReserve,goHome} from '../../routes/Coordinator';
import { useNavigate } from "react-router-dom";

const Travels=()=>{
  const navigate = useNavigate();
const onClickBack = ()=>{
  goHome(navigate)
}
const onClickReserve = ()=>{
  goReserve(navigate)
}  
  return (
   <Container>
    <HeaderTravels
      onClickBack={onClickBack}
      onClickReserve={onClickReserve}
    />
    <TravelCard />
    <TravelCard />
   </Container>
  );
}

export default Travels;