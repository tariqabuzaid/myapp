import { Box, Button, Typography, useTheme } from "@mui/material";
import "./App.css";
import Page from "./components/Page";

function App() {
	const theme = useTheme();

	return (
		<Page>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
				bgcolor={theme.palette.background.default}
				className="App"
			>
				<Typography variant="h1" component="h1">
					Hello
				</Typography>
				<Button variant="outlined" size="xlarge">
					Click me
				</Button>
			</Box>
		</Page>
	);
}

export default App;
