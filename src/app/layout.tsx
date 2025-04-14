import type { Metadata } from "next"
import "@/styles/globals.scss"
import Image from "next/image"
import { Navbar } from "@/sections/Navbar"

export const metadata: Metadata = {
	title: "Conference Ticket Generator",
	description: "Conference Ticket Generator",
	icons: {
		icon: "/favicon.png", // regular icon
		shortcut: "/favicon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`relative`}>
				<div>
					<Image
						src="/assets/images/background-desktop.png"
						alt="Lines Pattern"
						layout="fill"
						objectFit="cover"
						className="absolute"
					/>
				</div>
				<div>
					<Image
						src="/assets/images/pattern-lines.svg"
						alt="Lines Pattern"
						layout="fill"
						objectFit="cover"
						className="absolute"
					/>
				</div>
				<div>
					<Image
						src="/assets/images/pattern-squiggly-line-top.svg"
						alt="Lines Top Pattern"
						width={500}
						height={500}
						className="absolute top-14 right-0"
					/>
				</div>
				<div>
					<Image
						src="/assets/images/pattern-circle.svg"
						alt="circle Pattern"
						width={230}
						height={230}
						className="absolute top-[50%] right-[400px]"
					/>
				</div>
				<div>
					<Image
						src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
						alt="squiggly line Pattern"
						width={830}
						height={830}
						className="absolute bottom-0 left-0"
					/>
				</div>
				<div className="flex flex-col min-h-screen">
					<main className="flex-grow relative">
						<div className="p-4">
							<Navbar />
							<div className="w-full my-4 px-4 mx-auto">
								{children}
							</div>
						</div>
					</main>
				</div>
			</body>
		</html>
	)
}
