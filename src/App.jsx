import { Box } from "@chakra-ui/react";
import "./App.css";
import { Allroutes } from "./routes/Allroutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Allroutes />
    </Box>
  );
}

export default App;
