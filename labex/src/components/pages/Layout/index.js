import React from "react";
import {Container} from './styles';
import Home from "../Home";
import Login from "../Login";
import Travels from "../Travels";
import TravelsAdm from "../TravelsAdm";



const Layout=()=>{
  return (
   <Container>
    <TravelsAdm/>
   </Container>
  );
}

export default Layout;