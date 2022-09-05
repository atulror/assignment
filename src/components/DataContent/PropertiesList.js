import classes from "./PropertiesList.module.css";
import PropertyItem from "./PropertyItem";

const PropertiesList = (props) => {
  return (
    <ul className={classes.container}>
      {props.items.map((data) => (
        <PropertyItem
          key={data.id}
          price={data.price}
          location={data.location}
          description={data.description}
          detail={data.detail}
        />
      ))}
    </ul>
  );
};
export default PropertiesList;
