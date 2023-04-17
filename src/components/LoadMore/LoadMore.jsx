import { Load } from "./LoadMore.styled";

export const LoadMore = ({ loadMore }) => {
  return <Load onClick={loadMore}>Load More</Load>;
};
