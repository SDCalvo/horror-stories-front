import React from "react";
import { Box, Input, Button, Text, FormControl } from "@chakra-ui/react";
import { useData } from "../../contexts/DataContext";
import "./Home.css";

/*
Inputs:
genre,
    characters,
    setting,
    mood,
    theme,
    language,
    temperature,
    generations,
*/

export default function Home() {
  const { data, setData } = useData();
  const inputs = [
    {
      name: "genre",
      label: "Genre",
      type: "text",
      placeholder: "e.g. horror",
    },
    {
      name: "characters",
      label: "Characters",
      type: "text",
      placeholder: "Enter a list of characters",
    },
    {
      name: "setting",
      label: "Setting",
      type: "text",
      placeholder: "e.g. a haunted house",
    },
    {
      name: "mood",
      label: "Mood",
      type: "text",
      placeholder: "e.g. melancholyc",
    },
    {
      name: "theme",
      label: "Theme",
      type: "text",
      placeholder: "e.g. zombies",
    },
    {
      name: "language",
      label: "Language",
      type: "text",
      placeholder: "e.g. English",
    },
  ];

  return (
    <Box className="Container">
      <Box className="Instructions">
        <Text className="Instructions-title">
          Fill the form and then hit submit to get your story back!
        </Text>
      </Box>
      <FormControl className="Form">
        {inputs.map((input) => (
          <Box className="Form-row">
            <Text className="Form-label">{input.label}</Text>
            <Input
              className="Form-input"
              key={input.name}
              name={input.name}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              onChange={(e) => {
                setData({ ...data, [input.name]: e.target.value });
              }}
            />
          </Box>
        ))}
        <Button
          className="Form-submit-button"
          onClick={() => {
            console.log(data);
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
