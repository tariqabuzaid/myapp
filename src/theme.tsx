import { createTheme } from "@mui/material/styles";
import { sizes } from "./sizes";

declare module "@mui/material/Button" {
	interface ButtonPropsSizeOverrides {
		xlarge: true;
		xxlarge: true;
	}
}

export const palette = {
	aqua: {
		50: "#D9F3F3",
		100: "#96F6F1",
		200: "#00EFEA",
		300: "#00E5E5",
		400: "#00DCE0",
		500: "#00D4DE",
		600: "#00C3CB",
		700: "#008486",
		701: "#00ADB0", //previous 700 value
		800: "#009897",
		900: "#007368"
	},
	juice: {
		50: "#FFF3E0",
		100: "#FFE0B2",
		200: "#FFCD80",
		300: "#FFB84D",
		400: "#FFA826",
		500: "#FF9700",
		600: "#F88D00",
		700: "#F67D00",
		800: "#EF6D00",
		900: "#E65200"
	},
	lapis: {
		50: "#EFE5FD",
		100: "#CEC5F4",
		200: "#AC9EEE",
		300: "#8876E8",
		400: "#6959E3",
		500: "#443CDD",
		600: "#3538D7",
		700: "#1530CE",
		800: "#002BC7",
		900: "#001FBD"
	},
	grape: {
		50: "#F0E5FC",
		100: "#D7C0F7",
		200: "#BD95F2",
		300: "#A167EE",
		400: "#8B40EA",
		500: "#7200E5",
		600: "#6700D7",
		700: "#5600D7",
		800: "#4400D2",
		900: "#1600CB"
	},
	navy: {
		50: "#E5E5EB",
		100: "#B9BDCF",
		200: "#8393AE",
		300: "#626A8F",
		400: "#454D7A",
		500: "#273267",
		600: "#212C5F",
		700: "#1A2455",
		800: "#131B49",
		900: "#0A0B33"
	},
	bley: {
		100: "#F4F6FB",
		500: "#D9DDE8",
		600: "#9EA7BF",
		700: "#697186"
	},
	dark: {
		50: "#FDFDFD",
		100: "#F8F8F8",
		200: "#F3F3F3",
		300: "#EEEEEE",
		400: "#CFCFCF",
		500: "#B2B2B2",
		600: "#888888",
		700: "#737373",
		800: "#535353",
		900: "#303030"
	},

	background: {
		200: "#F4F6FB",
		400: "#ECEFF3"
	},

	default: "#0A0B33",
	primary: "#008486",
	secondary: "#8B40EA",
	tertiary: "#EF6D00",
	info: "#697186",
	infolight: "#F4F6FB",

	divider: "#E0E0E0",
	purewhite: "#FFFFFF",
	white: "#FAFAFC"
};

const theme = createTheme({
	cssVariables: true,
	palette: {
		primary: {
			main: palette.aqua[700],
			contrastText: palette.purewhite
		},
		secondary: {
			main: palette.grape[400],
			contrastText: palette.purewhite
		},
		background: {
			default: palette.background[400],
			paper: palette.bley[100]
		},
		warning: {
			main: palette.juice[800]
		},
		info: {
			main: palette.bley[700],
			light: palette.bley[500],
			dark: palette.navy[900],
			...palette.bley
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { size: "small" },
					style: {
						height: sizes.dimension.small,
						"& > svg": { fontSize: sizes.icon.small },
						"& > span > svg": { fontSize: sizes.icon.small }
					}
				},
				{
					props: { size: "medium" },
					style: {
						height: sizes.dimension.medium,
						"& > svg": { fontSize: sizes.icon.medium },
						"& > span > svg": { fontSize: sizes.icon.small }
					}
				},
				{
					props: { size: "large" },
					style: {
						height: sizes.dimension.large,
						"& > svg": { fontSize: sizes.icon.large },
						"& > span > svg": { fontSize: sizes.icon.medium }
					}
				},
				{
					props: { size: "xlarge" },
					style: {
						fontSize: "1.125rem",
						lineHeight: 1.75,
						padding: "0 1.75rem",
						height: sizes.dimension.xlarge,
						"& > svg": { fontSize: sizes.icon.xlarge },
						"& > span > svg": { fontSize: sizes.icon.large }
					}
				},
				{
					props: { size: "xxlarge" },
					style: {
						fontSize: "1.25rem",
						lineHeight: 1.75,
						padding: "0 2.125rem",
						height: sizes.dimension.xxlarge,
						"& > svg": { fontSize: sizes.icon.xxlarge },
						"& > span > svg": { fontSize: sizes.icon.xlarge }
					}
				}
			],
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "0.5rem",
					boxShadow: "none",
					paddingTop: 0,
					paddingBottom: 0
				}
			}
		}
	}
});

export default theme;
