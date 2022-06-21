import React from "react";
import CandidateCard from "../../_molecules/CandidateCard";
import HeaderTravels from "../../_molecules/HeaderTravels";
import TravelCard from "../../_molecules/TravelCard";
import {Container} from './styles';

const Travels=()=>{
  return (
   <Container>
    <HeaderTravels/>
    <TravelCard />
    <TravelCard />
   </Container>
  );
}

export default Travels;