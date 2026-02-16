import './App.css'
import { Component } from 'react'
import TaskList from './components/TaskList/TaskList.jsx'
import TodoEdito from './components/TodoEditor/TodoEditor.jsx'

class Filter extends Component {
  render() {
    const { filterGet } = this.props

    return (
      <>
        <input type="text" placeholder="фільтер" onChange={(e) => { filterGet(e.target.value) }} />
      </>
    )
  }
}

export default class App extends Component {
  state = {
    todos: [],
    filter: '',
    endTask: 0
  }

  newTask = (newElem) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, newElem]
    }))
  }

  deletTask = (e) => {
    const newList = this.state.todos.filter(objInfo => objInfo.task != e)

    this.setState({
      todos: newList
    })
  }

  filterInfo = (info) => {
    this.setState({
      filter: info
    })
  }

  filterFn = (filterElem) => {
    const filterLength = this.state.filter.length
    const filterPart = filterElem.slice(0, filterLength)

    if (this.state.filter === filterPart) {
      return true
    } else if (this.state.filter === '') {
      return true
    } else {
      return false
    }
  }

  endTask = (check) => {
      this.setState({
        endTask: this.state.endTask + check
      })
    }

    render() {
      const { todos, filter, endTask } = this.state
      console.log(endTask)

      return (
        <>
          <h1 className="total">всього є {todos.length} завдань</h1>
          <h1 className="total">всього виконано {endTask} завдань</h1>
          <TodoEdito todoTask={this.newTask} />
          <Filter filterGet={this.filterInfo} />
          {todos.map(elem => (
            <TaskList isDelet={this.deletTask} task={elem.task} key={elem.id} listFilter={this.filterFn} ckeckTask={this.endTask} />
          ))}
        </>
      )
    }
  }