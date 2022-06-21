import React from "react";
import {Container} from './styles';
import { Select, FormControl, FilledInput, MenuItem, InputLabel} from "@mui/material";
import {countries} from '../../constants/countries';
import { useState } from "react";

const FormApplyTravel=()=>{

const [country,setCountry] = useState('')

const onChangeCountry = (e)=>{
    setCountry(e.target.value)
}

const countriesRender = countries.map((item)=><MenuItem key={item.label} value={item.label}>{item.label}</MenuItem>)

  return (
   <Container>
    <FormControl fullWidth  variant="filled">
        <InputLabel>Travel</InputLabel>
        <Select  
        defaultValue="Select your Country" 
        onChange={(e)=>onChangeCountry(e)}
        >{countriesRender}
        </Select>
    </FormControl>

    <FormControl fullWidth  variant="filled">
        <InputLabel>Name</InputLabel>
        <FilledInput/>
    </FormControl>  

    <FormControl fullWidth  variant="filled">
        <InputLabel>Age</InputLabel>
        <FilledInput/>
    </FormControl> 

    <FormControl fullWidth  variant="filled">
        <InputLabel>Message</InputLabel>
        <FilledInput/>
    </FormControl> 

    <FormControl fullWidth  variant="filled">
        <InputLabel>Profession</InputLabel>
        <FilledInput/>
    </FormControl> 
    
    <FormControl fullWidth  variant="filled">
        <InputLabel>Country</InputLabel>
        <Select 
        label="Planet" 
        defaultValue="Select your Country" 
        onChange={(e)=>onChangeCountry(e)}
        >{countriesRender}
        </Select>
    </FormControl>

   </Container>
  );
}

export default FormApplyTravel;