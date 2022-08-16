import {Component} from 'react';

class RendererClass extends Component {
    constructor(props) {
        super(props);
        this.openBlock = () => {
            props.openBlock(props.index)
        };
    }

    render() {
        let blockClass = [this.props.block.class];
        if (this.props.block.keepO) {
            blockClass.push('hiddenO');
        }
        return (
            <div
                className={blockClass.join(' ')}
                onClick={this.openBlock}
            />
        );
    }
}


export default RendererClass;