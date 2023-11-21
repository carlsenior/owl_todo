import { Component, tags } from "@odoo/owl";
import { MyComponent } from "./components/MyComponent";
import { Counter } from './components/Counter'
import { TodoContainer } from './components/TodoContainer'

const APP_TEMPLATE = tags.xml/*xml*/ `
<main t-name="App" class="p-4">
  <TodoContainer />
</main>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { TodoContainer };
}
