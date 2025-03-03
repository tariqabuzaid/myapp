import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "./theme";

export const ThemeProvider = (props: any) => (
	<MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);
