import { useState, useEffect } from "react";
import { getCurrentUsers } from "../../API";
import { UserContainer } from "../../components/UserContainer/UserContainer";

export const Tweets = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    const getCurrentUs = async () => {
      try {
        const data = await getCurrentUsers(page);
        setCurrentUsers((prevState) => {
          return page === 1 ? [...data] : [...prevState, ...data];
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getCurrentUs();
  }, [page]);

  return <UserContainer users={currentUsers} loadMore={loadMore} />;
};
