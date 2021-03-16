
import React, { useEffect, useState } from "react";
import { Character } from "../../types";
import InfiniteScrollHOC from "../InfiniteScrollHOC";
import Header from "../../lib/Header";
import Search from "../Search";
import Filters from "../Filters";
import List from "../../lib/List";
import CharacterCard from "../../lib/CharacterCard";
import Loader from "../../lib/Loader";
import NotFound from "../../lib/NotFound";
import connect, { ReduxProps } from "./connect";
import "./styles.css";

const CharactersOverview:React.FunctionComponent<ReduxProps> = ({loadAllCharacters, characters, isNotFoundError, isLoading }) => {
  const [expandedCard, toggleExpandedCard] = useState("")

  useEffect(() => {
    loadAllCharacters();
  }, [loadAllCharacters]);

  const handleCardClick = (id: string) => {
    toggleExpandedCard(expandedCard === id ? "" : id)
  }

  const renderContent = () => {
    if(isNotFoundError || (!isLoading && !characters.length)) return <NotFound />
    if(isLoading && !characters.length) return <Loader />
    return (
      <List limit={characters.length}>
      {characters.map((character: Character, idx: number) => (
        <CharacterCard
          onClick={() => handleCardClick(character.id)}
          key={`${character.id}_${idx}`}
          isExpanded={expandedCard === character.id}
          {...character}
        />
      ))}
    </List>
    )
  }

  return (
    <div className="characters-overview">
      <Header />
      <div className="characters-overview__search">
        <Search />
        <Filters />
      </div>
      {renderContent()}
    </div>
  );
}
export default connect(
  InfiniteScrollHOC(CharactersOverview),
)
