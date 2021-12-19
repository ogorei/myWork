import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reina from '../assests/reinaSu.jpeg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import style from '../Styles/CardStyle.css';

const CardLayout =()=>{
    return (
      <div id="layout">
        <Container fluid="md">
          <Row>
            <Col xs={4} md={3} lg={3}>
              <Image roundedCircle fluid src={reina} />
            </Col>
            {/* description */}
            <Col xs={7} md={8} lg={6} align-items-center >
              <Row id="pr_text"className="align-items-center py-4">
                  <h2>Reina N. Ogo</h2>

                "多摩大学(経営情報学部)卒業後、TESOL(英語教授法・英語教育学)の資格を取得し学校法人トラベルジャーナル学園に入社。
                英語教員だけでなく、日本学生の留学支援、留学アドバイザーも務める。
                約8年勤務後、インターネット分野を独学で勉強し始め、JavaScriptをベースにしたウエブデザイナーを目指す。
                2020年12月にはCIW(JavaScript
                Specialist)認定資格を取得するなど、日々、ネット言語技術の習得に向け、尽力中。"
              </Row>
              {/* Links */}

              <Row> 
                  <Col className="d-flex justify-content-start">
                      <div className="py-3"> 
                          <a href="https://www.behance.net/ogorei" target="_blank">
                          <Button size="sm" variant="outline-success">GitHub</Button>
                          </a>
                      </div>
                      <div className="py-3"> 
                          <a href="https://github.com/reinaogo1">
                          <Button size="sm"  variant="outline-primary">Behance</Button>
                          </a>
                      </div>
                  </Col>
              </Row>



            </Col>

            <Row> </Row>
          </Row>
        </Container>
      </div>
    );
}

export default CardLayout;