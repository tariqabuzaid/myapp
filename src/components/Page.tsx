import { Container } from "@mui/material";

export type PageProps = {
	children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
	return (
		<Container sx={{ height: "100vh" }} maxWidth={false} disableGutters>
			{children}
		</Container>
	);
};

export default Page;
