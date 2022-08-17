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
    notfirstAtt: false,
    atts: 0,
    win: false,
    winText: ''
};

class App extends Component {
    atts = 0;
    winText = '';
    constructor(props) {
        super(props);
        this.state = null;
        this.openBlock = (index) => {
            console.log(this.state.field[index].class)
            if (!this.state.win && this.state.field[index].class !== 'openedBlock') {
                let field = this.state.field;
                field[index].class = 'openedBlock'
                console.log(index)
                this.attCount(index)
                this.setState(() => {
                    return field
                })
            }
        }
        this.attCount = (index) => {
            console.log(mockData.atts)
            let atts = this.state.atts;
            let win = this.state.win;
            let winText = this.state.winText;
            const field = this.state.field;
            console.log(atts + '   ' + win + '   ' + winText + '   ' + field + '     ' + field[index].keepO)
            if (field[index].keepO ) {
                win = true
            }
            win ? winText = `Победа! "О" найдена за ${atts} попыток !` : atts++
            this.setState(() => {
                return {atts, winText, win}
            })
            this.winText = winText
            this.atts = atts
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
                        <p>{this.winText}</p>
                        <p>{this.atts} - попыток</p>
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
