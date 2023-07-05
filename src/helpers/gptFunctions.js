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
  try {
    const response = await axios.post("http://localhost:3000/story", body);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getStory };
