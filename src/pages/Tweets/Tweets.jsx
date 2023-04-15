import { useState, useEffect } from "react";
import { getUsers } from "../../API";
import { UserContainer } from "../../components/UserContainer/UserContainer";

export const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  console.log(users);
  return <>{<UserContainer users={users} />}</>;
};
