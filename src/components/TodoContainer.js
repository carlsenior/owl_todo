import { Component, tags, useState } from '@odoo/owl'
import { TodoList } from './TodoLiist'

const todo_container_template = tags.xml`
    <t t-name="todo_container"> 
        <div>
            <TodoList />
        </div>

    </t>
`

export class TodoContainer extends Component {
    static template = todo_container_template
    static components =  { TodoList }
}