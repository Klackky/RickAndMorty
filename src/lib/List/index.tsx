import React from "react";
import "./styles.css"

interface ListProps {
  children: React.ReactNode
  limit: number
}

const List: React.FunctionComponent<ListProps> = ({children, limit}) => {
  const elements = React.Children.toArray(children)
  const renderedElements = elements.length > limit ? elements.splice(0, limit) : elements
  return (
    <ul className="list">
      {renderedElements}
    </ul>
  );
}

export default React.memo(List);