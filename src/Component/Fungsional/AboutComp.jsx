import React, {useContext} from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
function AboutComp() {
    
    return (
        <div>
            <div>
                <Jumbotron>
                    <h1 className="display-3">About Us</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col><CardComp id="1" judul="Belajar React" tanggal="15/06/2020" /></Col>
                        <Col><CardComp id="2" judul="Belajar Golang" tanggal="16/06/2020" /></Col>
                        <Col><CardComp id="3" judul="Belajar React Native" tanggal="17/06/2020" /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutComp