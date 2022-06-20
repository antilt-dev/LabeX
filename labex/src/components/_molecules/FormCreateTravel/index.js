import React from "react";
import {Container} from './styles';
import { Select,
        FormControl,
        InputLabel,
        FilledInput,
        MenuItem,
        TextField,
        Stack,
     } from "@mui/material";
    

const FormCreateTravel=()=>{
  return (
   <Container>
        <FormControl fullWidth  variant="filled">
            <InputLabel   htmlFor="component-filled">Name</InputLabel>
            <FilledInput  id="component-filled"  />
        </FormControl>
        <FormControl fullWidth variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Planet</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled-label"
                label="Planet"
            >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={1}>Mercury</MenuItem>
                <MenuItem value={2}>Venus</MenuItem>
                <MenuItem value={3}>Earth</MenuItem>
                <MenuItem value={4}>Mars</MenuItem>
                <MenuItem value={5}>Jupiter</MenuItem>
                <MenuItem value={6}>Saturn</MenuItem>
                <MenuItem value={7}>Uranus</MenuItem>
                <MenuItem value={8}>Neptune</MenuItem>
                <MenuItem value={9}>Pluto</MenuItem> 
            </Select>
        </FormControl>
        <TextField 
            variant="filled"
            fullWidth
            id="date"
            label="Departure"
            type="date"
            InputLabelProps={{shrink: true}}
        />
        <TextField
            id="filled-multiline-static"
            label="Description"
            multiline
            rows={1}
            placeholder="Description"
            variant="filled"
            fullWidth
        />
        
   </Container>
  );
}

export default FormCreateTravel;