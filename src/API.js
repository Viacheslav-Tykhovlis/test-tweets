import axios from "axios";

const BASE_URL = `https://643a9a41bd3623f1b9b71da9.mockapi.io`;

export async function getUsers() {
  const url = `${BASE_URL}/tweets`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.data);
  }
}
