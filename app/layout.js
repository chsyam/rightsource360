import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import WhatsappSVG from "@/components/icons/Whatsapp";
import LinkedInSVG from "@/components/icons/LinkedIn";
import { X } from "lucide-react";

export const metadata = {
	title: "RightSource360 - Your guide to Right Source",
	description: "Your guide to Right Source",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<div className="flex justify-end items-center gap-1 my-1 mx-3">
					<div className="cursor-pointer">
						<WhatsappSVG height={20} width={20} />
					</div>
					<div className="cursor-pointer">
						<LinkedInSVG height={25} width={25} />
					</div>
					<div className="cursor-pointer">
						<X strokeWidth={3} height={25} width={25} />
					</div>
				</div>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
