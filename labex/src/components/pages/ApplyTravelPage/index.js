import React from "react";
import {Container} from './styles';
import HeaderApplyTravel from "../../_molecules/HeaderApplyTravel";
import FormApplyTravel from "../../_molecules/FormApplyTravel";

const ApplyTravelPage=()=>{
  return (
   <Container>
    <HeaderApplyTravel />
    <FormApplyTravel/>
   </Container>
  );
}

export default ApplyTravelPage; 