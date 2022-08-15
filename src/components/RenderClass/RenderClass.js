
const RendererClass = props => {
    const blockClass = [props.class]
    if (props.keepO) {
        blockClass.push('hiddenO')
    }
    return <div className={blockClass.join(' ')} key={props.index} id={props.index}></div>
}

export default RendererClass;