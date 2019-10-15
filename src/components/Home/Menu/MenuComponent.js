import React from 'react';
import { Container, Row, Col, Dropdown, Button, ButtonToolbar} from 'react-bootstrap';
import './Menu.css';

export const Menu = (props) => {
    return (
        <div className="Menu">
          <Container>
          <Row>
              <Col>
              <Dropdown.Divider />
                  <h2>Population List</h2>
              <Dropdown.Divider />
              <ButtonToolbar>
                <Button title="Press this to see details of the selected citizen!" className="Menu-Button" variant='success' onClick={props.onClickDetails}>Details</Button>
              </ButtonToolbar>
              <Dropdown.Divider />
              </Col>
          </Row>
          </Container>
      </div>
    );
}