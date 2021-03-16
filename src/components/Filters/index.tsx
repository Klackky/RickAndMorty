import React, { useState, useCallback } from "react";
import { statuses as statusType } from "../../constants"
import { statuses } from "./helpers";
import connect, { ReduxProps } from "./connect";
import "./styles.css";

const Filters:React.FunctionComponent<ReduxProps> = ({ createFilters }) => {
  const [filterSelected, setFilterSelected] = useState("");

  const handleFilters = useCallback((status: string) => {
    createFilters(status)
    setFilterSelected(status)
  },[createFilters, setFilterSelected]);

  return(
    <div className="filters">
      <input 
        type="radio" 
        id={statusType.any}
        name="status" 
        value="any"
        onChange={() => handleFilters(statusType.any)}
        checked={!filterSelected || filterSelected === statusType.any}
      />
		  <label className="filter__label" htmlFor={statusType.any}> Any </label>
      {statuses.map(status => (
        <React.Fragment key={status}>
          <input 
            type="radio" 
            id={status} 
            name="status" 
            value={status}
            onChange={() => handleFilters(status)}
          />
          <label className="filter__label" htmlFor={status}>{status}</label>
        </React.Fragment>
      ))};
    </div>
  );
};

export default connect(
  Filters,
);
