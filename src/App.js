import './App.css';
import {Component} from 'react';
import RenderClass from './components/RenderClass/RenderClass';
import randomChoiceO from './components/randomChoiceO/randomChoiceO';

const mockData = {
    field: [{class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }, {class: 'closedBlock', keepO: false}, {class: 'closedBlock', keepO: false}, {
        class: 'closedBlock',
        keepO: false
    }],
    notfirstAtt: false
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = null;
        this.openBlock = (index) => {
            this.setState(() => {
                return this.state.field[index].class = 'openedBlock'
            })
        }
    }

    componentDidMount() {
        this.setState(mockData)
    }

    render() {
        return (
            <div className="game">
                <div className="field">
                    {this.state ?
                        this.state.field.map((block, index) => {
                                if (this.state.notfirstAtt) {
                                    return (
                                        <RenderClass
                                            key={index}
                                            block={block}
                                            index={index}
                                            stateField={this.state}
                                            openBlock={this.openBlock}
                                        />
                                    );
                                }
                            }) : 'Нажмите refresh для начала игры!'
                    }
                </div>
                <div className="menu">
                    <center>
                        <button className="menu__refresh-button"
                                onClick={() => {
                                    this.setState(randomChoiceO(this.state))
                                }}>Refresh
                        </button>
                    </center>
                </div>
            </div>
        );
    }
}

export default App;
