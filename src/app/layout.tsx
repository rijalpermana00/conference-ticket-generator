import type { Metadata } from "next"
import "@/styles/globals.scss"
import Image from "next/image"
import { Navbar } from "@/sections/Navbar"
import { useEffect, useState } from "react"
import Inside from "./inside"

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
				<Inside />
				<div className="flex flex-col min-h-screen">
					<main className="flex-grow relative">
						<div className="p-4">
							<Navbar />
							<div className="w-full desktop:my-4 desktop:px-4 my-10 px-1 mx-auto">
								{children}
							</div>
						</div>
					</main>
				</div>
			</body>
		</html>
	)
}
