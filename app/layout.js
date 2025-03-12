import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
	title: "RightSource360 - Your guide to Right Source",
	description: "Your guide to Right Source",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
