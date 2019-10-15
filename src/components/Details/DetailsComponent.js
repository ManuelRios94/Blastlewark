import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Container, Row, Col, Tab, Tabs, Dropdown} from 'react-bootstrap';
import './Details.css';


export const Details = (props) => {
    const {
        thumbnail, name, age,
        height, weight, hair_color,
        professions, friends
    } = props.citizen

    return (
        <div class="Details">
            <Dropdown.Divider />
                  <h2>Citizen Details</h2>
            <Dropdown.Divider />
            <Container>
            <Row>
                <Col>
                    <div>
                        <img src={thumbnail} alt="avatar"/>
                        <h1 className="name">{name}</h1>
                    </div>
                </Col>
                <Col>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="profile" title="Profile">
                            <Row>
                                <Col>
                                    <h4>Age</h4>
                                    <p className="age">{age}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Height</h4>
                                    <p className="height">{height}</p>
                                </Col>
                                <Col>
                                    <h4>Weight</h4>
                                    <p className="weight">{weight}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Hair Color</h4>
                                    <p className="hair_color">{hair_color}</p>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profession" title="Profession">
                            <ul className="list-group">
                                {
                                    professions.map(function(name, index){
                                        return <li className="list-group-item profession" key={ index }>{name}</li>;
                                    })
                                }
                                {
                                    isEmpty(professions) && <p>No Have Profession :(</p>
                                }
                            </ul>
                        </Tab>
                        <Tab eventKey="friends" title="Friends">
                            <ul className="list-group">
                                {
                                    friends.map(function(name, index){
                                        return <li className="list-group-item friend" key={ index }>{name}</li>;
                                    })
                                }
                                {
                                    isEmpty(friends) && <p>No Have Friend :(</p>
                                }
                            </ul>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            </Container>
        </div>
    );
}
