import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import addYears from 'date-fns/addYears';

class AddTask extends Component {
  state = {
    title: '',
    date: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.state.date = new Date(this.state.date).toISOString().split('T')[0];
    this.props.addTask(this.state.title, this.state.date);
    this.setState({
      title: '',
      date: '',
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onDateChange = (date) => this.setState({ date });

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Add Task..." name="title" value={this.state.title} onChange={this.onChange} required />
          </Col>
          <Col>
            <DatePicker name="date" selected={this.state.date} className="form-control" placeholderText="Select Date..." onChange={this.onDateChange} dateFormat="yyyy-MM-dd" maxDate={addYears(new Date(), 5)} minDate={new Date()} required />
          </Col>
          <Col className="text-center">
            <Button variant="primary" type="submit" className="w-75">ADD</Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask
