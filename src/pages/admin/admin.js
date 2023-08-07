import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveCard from "../../components/reserve_admin/reserve-card";
import Scanner from "../../components/reserve_admin/scanner";


const Admin = () => {
    const [quotas, setQuotas] = useState();

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch(
        "https://parkir-api.vercel.app/data/park"
        ).then((response) => response.json());

        setQuotas(response);
        console.log(response)
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col md={{span:5, offset:1}} className="border">
                    <h1 className="text-center">Reserve</h1>
                    {quotas &&
                    quotas.map((quota, index) => (
                        <Row key={index}>
                            <Col>
                                <ReserveCard loc={quota.name} mobil={quota.car} motor={quota.bike}/>
                            </Col>
                        </Row>
                    ))}
                </Col>

                <Col md={{span:4, offset:2}} className="border">
                    <h1 className="text-center">QR Scanner</h1>
                    <Row className="p-5">
                        <Scanner />
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Admin;