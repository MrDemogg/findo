import './App.css';
import { Component } from 'react'
import RenderClass from './components/RenderClass/RenderClass'
class App extends Component {
  state = {
    field: [{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false},{class: 'closedBlock', keepO: false}],
    notfirstAtt: false
  }
  randomChoiceO = () => {
    let notfirstAtt = this.state.notfirstAtt;
    notfirstAtt = true;
    this.setState({
      notfirstAtt
    })
    const field = this.state.field;
    let random = Math.floor(Math.random() * field.length)
    for (let i = 0; i < field.length; i++) {
      if (field[i].keepO) {
        field[i].keepO = false;
      }
    }
    field[random].keepO = true
    this.setState({
      field
    })
  }
  render() {
    return (
      <div className="game">
        <div className="field">
          {this.state.field.map((block, index) => {
            if (this.state.notfirstAtt) {
              return <RenderClass keepO={block.keepO} index={index} class={block.class}></RenderClass>
            } else if (!this.state.notfirstAtt && index === 35){
              return 'Нажмите refresh для начала игры!'
            } else {
              return ''
            }
          })}
        </div>
        <div className="menu">
          <center><button className="menu__refresh-button" onClick={() => this.randomChoiceO()}>Refresh</button></center>
        </div>
      </div>
    )
  }
}

export default App;
