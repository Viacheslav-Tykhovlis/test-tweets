import { useState, useEffect } from "react";
import { getCurrentUsers } from "../../API";
import { UserContainer } from "../../components/UserContainer/UserContainer";

export const Tweets = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const getFilter = (filter) => {
    setPage(1);
    setFilter(filter);
  };

  useEffect(() => {
    const getCurrentUs = async () => {
      try {
        const data = await getCurrentUsers(page, filter);
        setCurrentUsers((prevState) => {
          //           const users = () => {
          // // if(page === 1 && filter)

          //           }
          return page === 1 ? [...data] : [...prevState, ...data];
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getCurrentUs();
  }, [filter, page]);

  return (
    <UserContainer
      users={currentUsers}
      loadMore={loadMore}
      getFilter={getFilter}
    />
  );
};
