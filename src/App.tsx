import { Box } from "@mui/material";
import "./App.css";
import { Button } from "./components/Button";

function App() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
			bgcolor="red"
			className="App"
		>
			<h1>Hello</h1>
			<Button label="Click me" />
		</Box>
	);
}

export default App;
