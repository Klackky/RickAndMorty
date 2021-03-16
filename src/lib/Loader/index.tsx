import React from "react";
import loader from "../../img/loader.gif"
import "./styles.css"

const NotFound: React.FunctionComponent = () => (
  <div className="loader">
    <h3 className="loader__title"> 
      Loading... Patience please! 
    </h3>
    <img className="loader__image" src={loader} alt="loader"/>
  </div>
);

export default React.memo(NotFound);