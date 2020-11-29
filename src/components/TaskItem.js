import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Button } from "react-bootstrap";

class TaskItem extends Component {
  render() {
    const colStyle = {
      alignItems: "center",
      display: "flex",
      textDecoration: this.props.task.isCompleted ? "line-through" : "none",
      background: this.props.task.isCompleted ? "lightgray" : "whitesmoke",
    };
    const buttonColStyle = {
      display: "flex",
      alignItems: "center",
      background: this.props.task.isCompleted ? "lightgray" : "whitesmoke",
    };

    const { id, date, title, isCompleted } = this.props.task;
    return (
      <Row style={rowStyle} >
        <Col xs={1} style={colStyle}>{id}</Col>
        <Col xs={5} style={colStyle}>{title}</Col>
        <Col xs={4} style={colStyle}>{date}</Col>
        <Col xs={2} style={buttonColStyle}>
          <Button variant="outline-danger" size="sm" onClick={this.props.markAsComplete.bind(this, id)} style={roundButton} className="ml-auto">
            {isCompleted ? '+' : '-'}
          </Button>
        </Col>
      </Row>
    );
  }
}

const rowStyle = {
  borderBottom: "1px gray solid",
  padding: "1rem",
  display: "flex",
}

const roundButton = {
  borderRadius: "50%",
  padding: "5px 12px",
  textDecoration: "none",
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  markAsComplete: PropTypes.func.isRequired
}

export default TaskItem
