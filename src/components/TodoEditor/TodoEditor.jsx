import './TodoEditor.css'
import { Component } from 'react'

export default class TodoEdito extends Component {
    state = {
        task: '',
        id: 0
    }

    handelChang = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault()
        this.setState({
            id: this.state.id + 1,
            task: ''
        })
    }

    render() {
        const { task, id } = this.state
        const { todoTask } = this.props

        return (
            <>
                <form className='from' onSubmit={task != '' ? this.handelSubmit : ''}>
                    <label>
                        <input className='task-input' type="text" name='task' value={task} onChange={this.handelChang} placeholder='Введи нове завдання' />
                    </label>
                    <button type='submit' onClick={() => task != '' ? todoTask({id: id, task: task}) : ''} className='submit-button'>Додати нове завдання</button>
                </form >
            </>
        )
    }
}