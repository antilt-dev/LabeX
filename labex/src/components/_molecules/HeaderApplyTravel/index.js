import React from "react";
import {Container} from './styles';
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddBoxIcon from "@mui/icons-material/AddBox";

const HeaderApplyTravel=()=>{

    const onClickBack=()=>{console.log('back')}
    const onClickApplyTravel=()=>{console.log('create travel')}

  return (
   <Container>
    <h1>Apply to Travel</h1>
    <div>
        <ButtonPrimary
        onClick={onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
        />
        <ButtonPrimary
        onClick={onClickApplyTravel}
        startIcon={<AddBoxIcon/>}
        children="Apply"
        />
    </div>
   </Container>
  );
}

export default HeaderApplyTravel;