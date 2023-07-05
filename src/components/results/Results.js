import React from "react";
import { useData } from "../../contexts/DataContext";
import { Box, Text } from "@chakra-ui/react";

export default function Results() {
  const { data } = useData();
  const { gptResult } = data;

  return (
    <Box className="results-container">
      <Text className="results-text">Results</Text>
      {gptResult &&
        Object.keys(gptResult).map((key, index) => (
          <Box key={index} className="result-item">
            <Text key={index} className="result-text">
              {gptResult[key]}
            </Text>
          </Box>
        ))}
    </Box>
  );
}
