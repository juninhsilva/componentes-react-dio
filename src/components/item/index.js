const Item = (props) => {
    let className = "list-group-item list-group-action list-group-item-";
    if (props.tipo) { 
        className += props.tipo;
    }
    return (
        <a href={props.url} className={className}>{props.text}</a>
    )
}
export default Item;