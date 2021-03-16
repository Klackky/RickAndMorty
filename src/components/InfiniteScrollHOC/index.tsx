import React, { useEffect } from "react";

interface InfiniteScrollProps {
  loadAllCharacters: (isInfiniteScroll: boolean) => void
  isLoading: boolean
}

const BOTTOM_OFFSET = 200;

const InfiniteScrollHOC = <P extends object>(Component: React.ComponentType<P>) => {
  const InfiniteScroll:React.FunctionComponent<P & InfiniteScrollProps> = (props) => {
    const { loadAllCharacters, isLoading } = props;
    useEffect(() => {
      const loadCharacters = () => {
        if (!isLoading &&
          window.pageYOffset + window.innerHeight + BOTTOM_OFFSET > document.body.scrollHeight) {
          loadAllCharacters(true);
        }
      };

      window.addEventListener("scroll", loadCharacters);

      return () => {
        window.removeEventListener("scroll", loadCharacters);
      };

    }, [loadAllCharacters, isLoading]);
      return <Component {...props as P} />;
  };
 
  return InfiniteScroll;
};

export default InfiniteScrollHOC;
