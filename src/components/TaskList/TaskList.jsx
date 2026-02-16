import './TaskList.css'
import { Component } from 'react'

export default class TaskList extends Component {
    state = {
        check: true
    }

    handelChangeCheck = (e) => {
        this.setState({
            check: !this.state.check
        })

        if (this.state.check) {
            this.props.ckeckTask(1)
        } else {
            this.props.ckeckTask(-1)
        }
    }
    render() {
        const { task, isDelet, listFilter } = this.props


        return (
            <>
                <div className="task-box" style={listFilter(task) ? { display: 'flex' } : { display: 'none' }}>
                    <p className="task-info">{task}</p>
                    <input type="checkbox" value={this.state.check} onChange={(e) => this.handelChangeCheck(e)} />
                    <button onClick={() => { isDelet(task) }}>Видалити завдання</button>
                </div>
            </>
        )
    }
}