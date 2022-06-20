import React from "react";
import {Container} from './styles';
import { TextField,InputAdornment } from "@mui/material";


const StandardInput=(props)=>{
  return (
   <Container>
        <TextField 
        variant="outlined"
        placeholder={props.placeholder} 
        required
        fullWidth
        type={props.type}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             {props.icon}
            </InputAdornment>
          ),
        }}
         />
   </Container>
  );
}

export default StandardInput;