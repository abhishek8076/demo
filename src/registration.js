import react from "react";
import { Button, Label, Col, Row, Input, Container, } from 'reactstrap';
import Form from 'react-bootstrap/Form';
// reg form funcation
const Regform = () => {
    return (
        <>
            <Container>
                <h1>Ornate Technoservice PVT LTD.</h1>
            </Container>
            <Container style={{ "background-color": "#fff", "border-radius": "5px" }}>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col xl="2">
                        <Button style={{ "background-color": "#3bb54a", "border-radius": '10px' }}>back to login</Button>
                    </Col>
                    <Col xs="12">
                        <h1>Registration</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Title</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Form.Select required>
                            <option>Choose</option>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Ms.</option>
                            <option value="4">Dr.</option>
                            <option value="5">Phd.</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Name of Authorized Representative</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" name="fname"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col><Label>Middle Name</Label></Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" name="mname"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col><Label>Surname</Label></Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" name="sname"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col><Label>Name of the organization</Label></Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" name="organization"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Is the organization at National/ State level or City level?</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Form.Select>
                            <option>Choose</option>
                            <option value="1">National Level</option>
                            <option value="2">State Level</option>
                            <option value="3">City Level</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>Email</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="email" name="email"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <Label>Contant </Label>
                    </Col>
                    <hr />
                </Row>

                <Row>
                    <Col xs="8">
                        <Label>Phone no</Label>
                    </Col>
                    <Col xs="4">
                        <Label>Mobile no</Label>
                    </Col>
                    <hr />
                </Row>
                <Row>
                    <Col xs="auto">
                        <Label>STD code</Label>
                    </Col>
                    <Col xs="auto">
                        <Input type="number" placeholder="std code"></Input>
                    </Col>
                    <Col xs="auto">
                        <Input type="number" placeholder="phone no"></Input>
                    </Col>
                    <Col xs="2"><Label>+91</Label></Col>
                    <Col xs="auto">
                        <Input type="number" placeholder="mobile no"></Input>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Label>Designation</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Input type="text" placeholder="Designation"></Input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button>Sumbit</Button>
                    
                    </Col>
                    <br/>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </>
    );
}
export default Regform;
