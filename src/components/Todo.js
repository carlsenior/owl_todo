import { Component, tags } from '@odoo/owl'

const todo_template = tags.xml`
    <div>
        <p t-att-class="props.todo.done  ? 'text-decoration-line-through text-muted' : ''">
            <t t-esc="props.todo.id"></t>  
            <t>. </t>
            <t t-esc="props.todo.description"></t>  
        </p>
        </div>
`

export class Todo extends Component {
    static props = {
        todo: {
            type: Object,
            shape: {
                id: Number, 
                description: String,
                done: Boolean
            }
        }
    }
    static template = todo_template
}