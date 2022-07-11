import React, { useState, } from "react";
import "./App.css";
import { Button,  Label, Col, Row, Input, Container, Img} from 'reactstrap';

import {Link} from 'react-router-dom';
const styles = {
  col: {
    "background": "#627799",
    "color": "red",
    "borderRadius": "50px",
  }
}
//{}  let aa=['s','erre']
const Form1 = () => {
  const [input, setInput] = useState([{
    fname: "",
    lname: "",
    address: "",
    phonecode: "",
    phone: ""
  }]);
  const onsubmit=(e)=>{
  e.preventDefault();
  let errors=[...validata];
  errors.map((value,index)=>{
  if (input[index].fname==="") {
    errors[index].fname = "enter first name"; 
  }
  else{
    errors[index].fname=" ";
  }
  if(input[index].lname===""){
    errors[index].lname="enter your last name";
  }
  else{
    errors[index].lname=" ";
  }
setvalidata(errors);
console.log(errors)
})
}
  const [validata, setvalidata] = useState([{
    fname: "",
    lname: "",
    address: "",
    phonecode: "",
    phone: ""
  }]
  );
  const handleRemoveClick = (index) => {
    const list = [...input];
    list.splice(index, 1);
    setInput(list);
  };
  React.useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        const { name } = data.results[0];
        // setFirstName(name.first);
        // setLastName(name.last);
        console.log(name);
      });
  }, []); // <-- Have to pass in [] here!
  const addMore = (e) => {
    let newfield = {
      fname: "",
      lname: "",
      address: "",
      phonecode: "",
      phone: ""
    }
    setInput([...input, newfield])
    setvalidata([...validata,newfield])
  }
  const handlechange = (event, index) => {
    let data = [...input];
    data[index][event.target.name] = event.target.value;
    setInput(data);
    //setInput(values=>({...values,[e.target.name]:e.target.value}));
    // const [name,setname]=useState("");
    console.log(input)
  }
  return (
    <>
      <h1 style={{ "textAlign": "center" }}><font size="32" >Form</font></h1>
      {input.map((value, index) => {
        return <Container key={index} style={{ "border": '1px solid', "background": "#ebe134" }}>
          <Row>
            <Col xs="4" style={styles.col}><Label>First Name</Label></Col>
            <Col xs="8"  ><Input style={{ "borderRadius": "50px" }} type="text" name="fname" value={value.fname} placeholder="First Name" onChange={(e) => { handlechange(e, index) }}></Input>
            </Col>
          </Row>
          <Row>
            <Col xs="4"></Col>
            <Col xs="8">
              {validata[index].fname && <p>{validata[index].fname}</p>}
            </Col>
          </Row>
          <Row>
            <Col xs="4" style={styles.col}><Label>Last Name</Label></Col>
            <Col xs="8" ><Input type="text" placeholder="Last Name" name="lname" onChange={(e) => { handlechange(e, index) }}></Input>{validata.lname && <p>{validata.lname}</p>}</Col>
          </Row>
          <Row>
            <Col xs="4" style={styles.col}><Label>Address</Label></Col>
            <Col xs="8" ><Input type="text" name="address" onChange={(e) => { handlechange(e, index) }}></Input></Col>
          </Row>
          <Row>
            <Col xs="2" style={styles.col}><Label>phone no</Label></Col>
            <Col xs="2" ><Input type="number" placeholder="+91" name="phonecode" onChange={(e) => { handlechange(e, index) }}></Input></Col>
            <Col xs="8"><Input type="number" name="phone" onChange={(e) => { handlechange(e, index) }}></Input></Col>
          </Row>
          <Row>
            <Col xs="4" style={styles.col}><Label >Email</Label></Col>
            <Col xs="8">
              <Input type="email" name="Email" onChange={(e) => { handlechange(e, index) }}></Input>
            </Col>
          </Row>
          <Row>
            <Col xs="2" style={styles.col}><Label name="country">Country</Label>
            </Col>
            <Col xs="4">
              <select className="form-control" onChange={(e) => { handlechange(e, index) }}>
                <option>Choose</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
              </select>
            </Col>
          </Row>
          <Row>
          </Row>
          {input.length !== 1 && <Button onClick={handleRemoveClick}>Remove</Button>} 
        </Container>
      })}
      <Row>
        <Col xs="2" >
          <Button onClick={addMore}>Add more</Button>
          <Button onClick={onsubmit}>Submit</Button>
        </Col>
      </Row>
      <Link to="./App.js">
          <img
            src="./logo512.png"
            alt="example"
          />
        </Link>
    </>
  );
}
export default Form1;