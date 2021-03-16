import React from "react";
import classNames from "classnames";
import {Character} from "../../types";
import './styles.css';

interface CharacterCardProps extends Character {
  onClick: () => void
  isExpanded?: boolean
}

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({ name, species, location, image, status, gender, isExpanded, origin, onClick}) => (
    <li className="card">
      <div 
        className={classNames("card__inner", isExpanded && "card__showMore")} 
        onClick={onClick}
      >
        <h2 className="card__title"> {name} </h2>
        <div className="card__image-container">
          <img src={image} alt={name}/>
        </div>
        <p className={`card__status--${status.toLowerCase()}`}> {status} </p>
        <button className="card__button" type="button" onClick={onClick}> {isExpanded ? "Show less" : "Show more"} </button> 
      </div>
      <ul className={classNames("card__expander", isExpanded && "card__expander--active")}> 
        <li className="card__text"> <b>Species:</b> {species} </li>
        <li className="card__text"> <b> Gender: </b> {gender} </li>
        <li className="card__text"> <b> Location:</b> {location.name} </li>
        <li className="card__text"> <b> Origin: </b> {origin.name} </li>
      </ul>
    </li>
);

export default CharacterCard;