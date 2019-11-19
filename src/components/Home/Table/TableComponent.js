import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "react-table/react-table.css";
import ReactTable from "react-table";

import { filterCaseInsensitive } from "../../../utils/tableFunctions";

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Age",
    accessor: "age",
    filterable: false
  },
  {
    Header: "Hair Color",
    accessor: "hair_color"
  }
];

export const Table = props => {
  return (
    <div className="Table">
      <Container>
        <Row>
          <Col>
            <ReactTable
              filterable
              defaultFilterMethod={filterCaseInsensitive}
              data={props.localPopulationList}
              columns={columns}
              defaultPageSize={10}
              getTrProps={(state, rowInfo, column) => {
                return {
                  onClick: (e, t) => {
                    props.onClick(e, t, rowInfo);
                  },
                  style: {
                    background:
                      rowInfo && rowInfo.index === props.index
                        ? "#2998AE"
                        : "#F8FAFA"
                  }
                };
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
