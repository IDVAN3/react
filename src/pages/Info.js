import React from 'react'
import { Container, Tab, Nav, Row, Col, CardDeck, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const Info = ({ user }) => (
  <Container>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column mt-2">
            <Nav.Item>
              <Nav.Link eventKey="first">Основні дані</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Додаткові дані</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Контактні дані</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Інформація про хід навчання</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Військові дані</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Медичний огляд</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={10}>

          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="first">
              <div className="wrapper">
                <Container>
                  <CardDeck>
                    <div className="container">
                      <div className="row">
                        <div className="col-9">
                          <Card className="info">
                            <Card.Body id="info-body">
                              <Card.Title className="ctitle">{`${user.name} ${user.surname}`}</Card.Title>
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-5">
                                    <p>e-mail</p>
                                  </div>
                                  <div className="col-7">
                                    <p>{user.email}</p>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>

                        <div className="col-3">
                          <Card className="photo">
                            <Card.Img
                              variant="top"
                              src="data:image/jpeg;base64,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"
                            />
                          </Card>
                        </div>

                      </div> {/* row*/}

                    </div> {/* cont */}
                  </CardDeck>
                </Container>

              </div>  {/* wrap */}

            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4 ">
                    <div className="list-group">
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark">This is an item</div>
                      <div className="list-group-item list-group-item-action list-group-item-dark ">This is an item</div>
                    </div>
                  </div>
                  <div className="col-8 ">
                    <ul className="list-group list-group-flush">
                      <div className="list-group-item list-group-item-light">Cras justo odio</div>
                      <div className="list-group-item list-group-item-light">Dapibus ac facilisis in</div>
                      <div className="list-group-item list-group-item-light">Morbi leo risus</div>
                      <div className="list-group-item list-group-item-light">Porta ac consectetur ac</div>
                      <div className="list-group-item list-group-item-light">Vestibulum at eros</div>
                      <div className="list-group-item list-group-item-light">Cras justo odio</div>
                      <div className="list-group-item list-group-item-light">Dapibus ac facilisis in</div>
                      <div className="list-group-item list-group-item-light">Morbi leo risus</div>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>

          </Tab.Content>

        </Col>
      </Row>

    </Tab.Container>
  </Container>
);

export default connect(
  ({ auth }) => ({ user: auth.user })
)(Info);