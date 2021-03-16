import React from "react";
import debounce from "lodash/debounce";
import connect, {ReduxProps} from "./connect";
import "./styles.css";

const Search:React.FunctionComponent<ReduxProps>  = ({ makeSearch }) => {
  const handleOnChange = debounce(event => {
    makeSearch(event.target.value)
  }, 300);

  return (
    <div className="search">
      <input
        name="search"
        className="search__input"
        placeholder="Search character"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default connect(
  Search
);
