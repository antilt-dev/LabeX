import React from "react";
import {Container} from './styles';
import ButtonPrimary from "../../_atoms/ButtonPrimary";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddBoxIcon from "@mui/icons-material/AddBox";

const HeaderNewTravel=()=>{
    const onClickBack=()=>{console.log('back')}
    const onClickCreateTravel=()=>{console.log('create travel')}


  return (
   <Container>
    <h1>Create Travel</h1>
    <div>
        <ButtonPrimary
        onClick={onClickBack}
        startIcon={<ArrowBackIcon/>}
        children="Back"
        />
        <ButtonPrimary
        onClick={onClickCreateTravel}
        startIcon={<AddBoxIcon/>}
        children="Add travel"
        />
    </div>
   </Container>
  );
}

export default HeaderNewTravel;