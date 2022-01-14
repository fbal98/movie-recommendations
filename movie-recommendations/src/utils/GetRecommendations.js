import axios from "axios";
const BASE_URL = process.env.RECOMMENDATION_API_BASE_URL;

console.log(BASE_URL);

export default function GetRecommendations(moviesList) {
  if (!moviesList || moviesList.length < 1) {
    return;
  } else {
    const a = axios
      .post(`http://127.0.0.1:5000/recommend/${JSON.stringify(moviesList)}`, {
        headers: { "Content-Type": "text/plain" },
      })
      .catch((e) => console.log(e));
    return a;
  }
}
