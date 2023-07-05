import axios from "axios";

async function getStory(data) {
  const {
    genre,
    characters,
    setting,
    mood,
    theme,
    language,
    temperature,
    generations,
  } = data;
  const body = {
    genre,
    characters,
    setting,
    mood,
    theme,
    language,
    temperature,
    generations,
  };
  const response = await axios.post("http://localhost:3000/story", body);
  return response.data;
}

export { getStory };
