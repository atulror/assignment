import classes from '../DataContent/PropertyItem.module.css';

const PropertyItem = (props)=>{
    return(
        <li className={classes.container}>
            <h1>{`$${props.price}/month`}</h1>
            <h2>{`${props.location}`}</h2>
            <p>{`${props.description}`}</p>
            <p>{`${props.detail}`}</p>
        </li>
    )
}
export default PropertyItem;