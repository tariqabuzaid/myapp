import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "./theme";

export const ThemeProvider = (props: PropsWithChildren) =>
	<MuiThemeProvider theme={theme}>
		{props.children}
	</MuiThemeProvider>;
