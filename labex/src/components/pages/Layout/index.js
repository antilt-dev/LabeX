import React from "react";
import {Container} from './styles';
import Home from "../Home";
import Login from "../Login";
import Travels from "../Travels";
import TravelsAdm from "../TravelsAdm";
import NewTravel from "../NewTravel";



const Layout=()=>{
  return (
   <Container>
    <NewTravel/>
   </Container>
  );
}

export default Layout;