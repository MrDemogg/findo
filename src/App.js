import './App.css';
import { Component } from 'react'
import RenderClass from './components/RenderClass/RenderClass'
class App extends Component {
  state = {
    field: [{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false}]
  }
  render() {
    return (
      <div className="field">
        {this.state.field.map((block, index) => {
          return <RenderClass keepO={block.keepO} index={index} class={block.class}></RenderClass>
        })}
      </div>
    )
  }
}

export default App;
