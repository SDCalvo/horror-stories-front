import React from "react";
import {
  Box,
  Input,
  Button,
  Text,
  FormControl,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useData } from "../../contexts/DataContext";
import "./Home.css";
import Loading from "../loading/Loading";
import { getStory } from "../../helpers/gptFunctions.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { data, setData } = useData();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [requestError, setRequestError] = React.useState(null);
  const navigate = useNavigate();
  const inputs = [
    {
      name: "genre",
      label: "Genre",
      type: "text",
      placeholder: "e.g. horror",
      required: false,
    },
    {
      name: "characters",
      label: "Characters",
      type: "text",
      placeholder: "Enter a list of characters",
      required: false,
    },
    {
      name: "setting",
      label: "Setting",
      type: "text",
      placeholder: "e.g. a haunted house",
      required: false,
    },
    {
      name: "mood",
      label: "Mood",
      type: "text",
      placeholder: "e.g. melancholyc",
      required: false,
    },
    {
      name: "theme",
      label: "Theme",
      type: "text",
      placeholder: "e.g. zombies",
      required: false,
    },
    {
      name: "language",
      label: "Language",
      type: "text",
      placeholder: "e.g. English",
      required: false,
    },
    {
      name: "temperature",
      label: "Temperature",
      type: "number",
      placeholder: "e.g. 0.9",
      required: true,
    },
    {
      name: "generations",
      label: "Generations",
      type: "number",
      placeholder: "e.g. 1",
      required: true,
    },
  ];

  async function handleSubmit() {
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Reset errors
    setLoading(true);
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
    const response = await getStory(body);
    setData({ ...data, gptResult: response });
    setLoading(false);
    navigate("/results");
    try {
      const response = await getStory(body);
      if (response instanceof Error) {
        throw response;
      }
      setData({ ...data, gptResult: response });
      setLoading(false);
      navigate("/results");
    } catch (error) {
      setLoading(false);
      setRequestError(error.message);
    }
  }

  function validate(values) {
    const errors = {};
    inputs.forEach((input) => {
      if (input.required && !values[input.name]) {
        errors[input.name] = `Please enter ${input.label}`;
      }
    });
    return errors;
  }

  return (
    <Box className="Container">
      {loading ? (
        <Loading />
      ) : (
        <Box
          h="100%"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box className="Instructions">
            <Text className="Instructions-title">
              Fill the form and then hit submit to get your story back!
            </Text>
          </Box>
          <FormControl className="Form">
            {inputs.map((input) => (
              <Box className="Form-row" key={`${input.name}-row`}>
                <Text className="Form-label" key={`${input.label}-text`}>
                  {input.label}
                </Text>
                <Input
                  className="Form-input"
                  key={`${input.name}-input`}
                  name={input.name}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={(e) => {
                    setData({ ...data, [input.name]: e.target.value });
                    setErrors({ ...errors, [input.name]: null }); // Clear specific error
                  }}
                  isInvalid={!!errors[input.name]}
                />
                {errors[input.name] && (
                  <Text key={`${input.name}-error`} color="red.500">
                    {errors[input.name]}
                  </Text>
                )}
              </Box>
            ))}
            {requestError && (
              <Alert status="error">
                <AlertIcon />
                {requestError}
              </Alert>
            )}
            <Button className="Form-submit-button" onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
        </Box>
      )}
    </Box>
  );
}
