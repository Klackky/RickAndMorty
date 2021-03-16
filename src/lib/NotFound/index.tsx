import React from "react";
import logo from "../../img/not-found.png"
import "./styles.css"

const NotFound: React.FunctionComponent = () => (
  <div className="not-found">
    <h3 className="not-found__title"> 
      This character does not exists yet. Request sent to the producers! 
    </h3>
    <img className="not-found__image" src={logo} alt="not-found"/>
  </div>
);

export default React.memo(NotFound);