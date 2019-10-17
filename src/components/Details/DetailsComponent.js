import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Tab, Tabs, Dropdown} from 'react-bootstrap';
import './Details.css';


export const Details = (props) => {
    const {
        thumbnail, name, age,
        height, weight, hair_color,
        professions, friends
    } = props.citizen

    return (
        isEmpty(props.citizen) ? <Redirect to='/'/> :
        <div class="Details">
            <Dropdown.Divider />
                  <h2>Citizen Details</h2>
            <Dropdown.Divider />
            <Container className="box">
            <Row>
                <Col className="col-card">
                    <div className="card">
                        <h2 className="title-card">Character Card</h2>
                        <Dropdown.Divider />  
                        <div className="name">
                            <img src={thumbnail} alt="Avatar"/>
                            <h1 className="title-name">{name}</h1> 
                        </div>
                    </div>
                </Col>
                <Col>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab className="tab" eventKey="profile" title="Profile">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <h4 className="title-attr" >Age</h4>
                                    <li className="list-group-item age">{age}</li>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className="title-attr" >Height</h4>
                                    <li className="list-group-item height">{height}</li>
                                </Col>
                                <Col>
                                    <h4 className="title-attr" >Weight</h4>
                                    <li className="list-group-item weight">{weight}</li>
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <h4 className="title-attr" >Hair Color</h4>
                                    <li className="list-group-item hair_color">{hair_color}</li>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Tab>
                        <Tab className="tab" eventKey="profession" title="Profession">
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
                        <Tab className="tab" eventKey="friends" title="Friends">
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

const mapStateToProps = (state) => {
    return {
      citizen: state.selectedLocalPopulation,
    };
  }
  
  export default connect(mapStateToProps)(Details);
