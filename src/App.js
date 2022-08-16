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
            let field = this.state.field;
            field[index].class = 'openedBlock'
            this.setState(() => {
                return field
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
                                } else if (!this.state.notfirstAtt && index === 35) {
                                    return 'Нажмите refresh для начала игры!'
                                } else {
                                    return ''
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
