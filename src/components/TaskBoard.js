import { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

class TaskBoard extends Component {

  render() {
    return this.props.tasks.map((task) => (
      <TaskItem key={task.id} task={task} markAsComplete={this.props.markAsComplete} />
    ));
  }
}

TaskBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  markAsComplete: PropTypes.func.isRequired,
}

export default TaskBoard;
