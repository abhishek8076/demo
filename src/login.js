import React, { useState, } from "react";
import './login.style.css';
import ReactDOM from 'react-dom/client';

import { Button,  Label, Col, Row, Input, Container,Form} from 'reactstrap';
const Login=()=>{
    return(
        <>
        <h1>Ornate Technoservice PVT LTD</h1>
    <div className="form">
     <Form>
       <Container>
         <Label>Username </Label>
         <Input type="text" name="uname" required />
       
       <div className="input-container">
         <Label>Password </Label>
         <Input type="password" name="pass" required />
       </div>
       <div className="button-container">
        <br/>
         <Input type="submit"  style={{"background":"#5ed3db"}}/>
       </div>
       </Container>
     </Form>
   </div>
        </>
    )
}
export default Login;