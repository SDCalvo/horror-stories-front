import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { DataProvider } from "./contexts/DataContext";
import Home from "./components/home/Home";
import Results from "./components/results/Results";

function App() {
  return (
    <DataProvider>
      <Box className="App">
        <Router>
          <Navbar />
          <Box className="App-header">
            <Text className="App-title">Welcome to StoryGen</Text>
            <Text className="App-subtitle">The AI powered story generator</Text>
          </Box>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<TestComponent text="About" />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </Box>
    </DataProvider>
  );
}

function TestComponent({ text }) {
  return (
    <Box bg="tomato">
      <Text>{text}</Text>
    </Box>
  );
}

export default App;
