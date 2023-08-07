import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { updateData } from "../../util/updateData";

const ReserveCard = (props) => {
    return (
        <div className="mt-4">
            <h3>{props.loc}</h3>
            <Container fluid className={`${props.loc}`}>
                <Row>
                    <Col className="ps-0">
                        <Card>
                            <Card.Body>
                                <h1 className="text-center">{props.mobil}</h1>
                                <h6 className="text-center">Mobil</h6>
                                <div>
                                    <button onClick={() => updateData({car: props.mobil-1, bike:props.motor}, "https://parkir-api.vercel.app/data/park", props.loc.split(' ').pop())} type="button" className="btn btn-danger float-start">-</button>
                                    <button onClick={() => updateData({car: props.mobil+1, bike:props.motor}, "https://parkir-api.vercel.app/data/park", props.loc.split(' ').pop())} type="button" className="btn btn-primary float-end">+</button>
                                </div>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col className="ps-0">
                        <Card>
                            <Card.Body>
                                <h1 className="text-center">{props.motor}</h1>
                                <h6 className="text-center">Motor</h6>
                                <div>
                                    <button onClick={() => updateData({car: props.mobil, bike:props.motor-1}, "https://parkir-api.vercel.app/data/park", props.loc.split(' ').pop())} type="button" className="btn btn-danger float-start">-</button>
                                    <button onClick={() => updateData({car: props.mobil, bike:props.motor+1}, "https://parkir-api.vercel.app/data/park", props.loc.split(' ').pop())} type="button" className="btn btn-primary float-end">+</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ReserveCard;