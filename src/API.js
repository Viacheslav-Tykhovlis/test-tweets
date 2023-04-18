import axios from "axios";

const BASE_URL = `https://643a9a41bd3623f1b9b71da9.mockapi.io`;

export async function getCurrentUsers(page) {
  const url = new URL(`${BASE_URL}/tweets`);
  url.searchParams.append("completed", false);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", 9);

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.data);
  }
}

export async function plusFollower(user, followers) {
  const url = `${BASE_URL}/tweets/${user}`;
  try {
    const { data } = await axios.put(url, {
      followers: followers + 1,
      isFollowed: true,
    });
    return data;
  } catch (error) {
    console.log(error.data);
  }
}

export async function minusFollower(user, followers) {
  const url = `${BASE_URL}/tweets/${user}`;
  try {
    const { data } = await axios.put(url, {
      followers: followers - 1,
      isFollowed: false,
    });
    return data;
  } catch (error) {
    console.log(error.data);
  }
}
