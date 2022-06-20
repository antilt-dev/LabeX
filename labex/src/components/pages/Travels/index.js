import React from "react";
import HeaderTravels from "../../_molecules/HeaderTravels";
import TravelCard from "../../_molecules/TravelCard";
import {Container} from './styles';

const Travels=()=>{
  return (
   <Container>
    <HeaderTravels/>
    <TravelCard />
    <TravelCard />
    <TravelCard />
    <TravelCard />
   </Container>
  );
}

export default Travels;