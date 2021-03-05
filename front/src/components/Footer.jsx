import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Footer=()=>{
return(
<footer>
<Container>
<Row className="border-top justify-content-between p-3">
<Col className="p-10" md="3" sm="12">
Designing Tomorrow
</Col>
<Col className="p-10" md="3" sm="12">
Site made by R.S
</Col>

</Row>

</Container>
</footer>
)

}

export default Footer;