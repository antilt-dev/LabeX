import React from "react";
import FormCreateTravel from "../../_molecules/FormCreateTravel";
import HeaderNewTravel from "../../_molecules/HeaderNewTravel";
import {Container} from './styles'

const NewTravel=()=>{
  return (
   <Container>
    <HeaderNewTravel/>
    <FormCreateTravel/>
   </Container>
  );
}

export default NewTravel;