import { Box } from "@chakra-ui/react";
import "./App.css";
import { Allroutes } from "./routes/Allroutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box className="App" w={"80%"} margin={"auto"} pb={"20px"} bg={"#FAFAFA"}>
      <Navbar />
      <Allroutes />
    </Box>
  );
}

export default App;
