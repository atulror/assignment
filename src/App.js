import { Fragment, useState } from "react";
import dayjs from "dayjs";
import { DUMMY_DATA } from "./components/DATA/Data";

import Layout from "./components/Header/Layout";
import FilterForm from "./components/Filter/FilterProperties";
import PropertiesList from "./components/DataContent/PropertiesList";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setAllData] = useState(DUMMY_DATA);

  const [filters, setFilters] = useState({
    location: "",
    date: "",
    price: "",
    type: "",
  });

  const handleFilterChange = (field, fieldValue) => {
    // debugger;
    const newFilters = {
      ...filters,
      [field]: fieldValue,
    };

    setFilters(newFilters);

    let filteredData = DUMMY_DATA;
    // iterating over newFilters for updating data for each key
    Object.keys(newFilters).forEach((filterKey) => {
      if(filterKey !== ""){
      filteredData = filteredData.filter((item) => {
        switch (field) {
          case "location":
            if (
              item.location
                .toLowerCase()
                .includes(newFilters[filterKey].toLowerCase())
            ) {
              return item;
            }
          case "date":
            if (dayjs(item.date).isSameOrAfter(dayjs(newFilters[filterKey]))) {
              return item;
            }
          case "price":
            if (item.price <= newFilters[filterKey]) {
              return item;
            }
          case "type":
            if (item.type === newFilters[filterKey]) {
              return item;
            }
        }
      });
    }
    });
    setAllData(filteredData);
  };

  return (
    <Fragment>
      <Layout />
      {/* receiving input value, field and field value of filters through handlers in filter for, */}
      <FilterForm handleFilterChange={handleFilterChange} filters={filters} /> 
      <PropertiesList items={allData} />
    </Fragment>
  );
}

export default App;
