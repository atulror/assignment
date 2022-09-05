import classes from "../Filter/FilterProperties.module.css";

const FilterForm = (props) => {
  return (
    <div className={classes.container}>
      <label>Location</label>
      <input
        type="text"
        placeholder="Enter location here..."
        // passing location value to filter object in app.js file
        value={props.filters.location}
        // passing field and fieldValue through props
        onChange={(event) =>
          props.handleFilterChange("location", event.target.value)
        }
      ></input>
      <label>When</label>
      <input
        type="date"
        // passing date value to filter object in app.js file
        value={props.filters.date}
        // passing field and fieldValue through props
        onChange={(event) =>
          props.handleFilterChange("date", event.target.value)
        }
      ></input>
      <label>Max Price</label>
      <input
        type="number"
        placeholder="Enter max price"
        // passing maxPrice value to filter object in app.js file
        value={props.filters.price}
        // passing field and fieldValue through props
        onChange={(event) =>
          props.handleFilterChange("price", event.target.value)
        }
      ></input>
      <label>Property Type</label>
      {/* passing maxPrice value to filter object in app.js file */}
      {/* passing field and fieldValue through props  */}
      <select
        value={props.filters.type}
        onChange={(event) =>
          props.handleFilterChange("type", event.target.value)
        }
      >
        <option value="">Select</option>
        <option value="house">Houses</option>
        <option value="appartment">Appartments</option>
        <option value="shop">Shops</option>
        <option value="storage">Storage Houses</option>
      </select>
      <button type="submit">Search</button>
    </div>
  );
};
export default FilterForm;
