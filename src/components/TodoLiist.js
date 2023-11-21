import {Component, tags, useState} from '@odoo/owl'
import { Todo } from './Todo'

const todo_list_template = tags.xml`
    <t t-name="todo_list_template">
        <div class="bg-white border border-primary rounded mt-3 p-3">
            <input type="text" class="form-control mb-3" placeholder="Add a todo" t-on-keyup="addTodo" />
            <t t-foreach="todoList" t-as="todo" t-key="todo.id">
                <Todo todo="todo" />
            </t>
        </div>
    </t>
`

export class TodoList extends Component {
    static template = todo_list_template
    static components = { Todo }

    setup() {
        this.nextId = 0;
        this.todoList = useState([])
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todoList.push({
                id: ++this.nextId,
                description: ev.target.value,
                done: false
            })
            ev.target.value = ""
        }
    }
}