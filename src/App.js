import TaskBoard from './components/TaskBoard';
import { Component } from 'react';
import AddTask from './components/AddTask';
import { Container, Jumbotron } from 'react-bootstrap';

class App extends Component {
  taskType = {
    id: Number,
    title: String,
    date: String,
    isCompleted: Boolean
  }
  state = {
    tasks: []
  }

  markAsComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(t => {
        if (t.id === id) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      })
    })
  }

  addTask = (title, date) => {
    const id = this.state.tasks.length === 0 ? 1 : this.state.tasks.length + 1;
    this.setState({ tasks: [...this.state.tasks, { id, title, date, isCompleted: false }] });
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>TASK BOARD</h1>
          <AddTask addTask={this.addTask} />
        </Jumbotron>
        <Container className="text-right font-weight-bold">{this.state.tasks.filter(t => !t.isCompleted).length} task(s) pending</Container>
        {this.state.tasks.length > 0 && <Container><TaskBoard tasks={this.state.tasks} markAsComplete={this.markAsComplete} /></Container>}
        {this.state.tasks.length === 0 && <Container className="font-weight-bold">Please Add Tasks to Continue!!!</Container>}
      </Container>
    );
  }
}

export default App;
