import { Component, tags, useState } from "@odoo/owl";


const counter_template = tags.xml`
    <t t-name="counter">
        <div>
            <p>Counter : <t t-esc="state.value"/></p>
            <button type="button" class="btn btn-primary" t-on-click="increment">Increment</button>
        </div>
    </t>
`

export class Counter extends Component {
    static template = counter_template
    state = useState({
        value: 0
    })
    increment() {
        this.state.value++
    }
}