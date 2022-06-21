import React from "react";
import {Container} from './styles';
import RowTable from "../../_atoms/RowTable";

const CandidateCard=(props)=>{
  return (
   <Container>
    <RowTable title="Name:" text={props.name}/>
    <RowTable title="Age:" text={props.age}/>
    <RowTable title="Message:" text={props.message}/>
    <RowTable title="Profession:" text={props.profession}/>
    <RowTable title="Country:" text={props.country}/>
   </Container>
  );
}

export default CandidateCard;