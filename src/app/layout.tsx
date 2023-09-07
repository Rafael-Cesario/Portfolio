import StyledComponentsRegistry from "@/lib/registry";
import { StyledGlobal } from "@/styles/styled-global";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

export const metadata: Metadata = {
	title: "Rafael",
	description: "My personal portfolio",
};

const roboto_slab = Roboto_Slab({
	subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br" className={roboto_slab.className}>
			<body>
				<StyledComponentsRegistry>
					<StyledGlobal />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
