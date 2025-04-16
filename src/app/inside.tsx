"use client"
import type { Metadata } from "next"
import "@/styles/globals.scss"
import Image from "next/image"
import { useEffect, useState } from "react"

export const metadata: Metadata = {
	title: "Conference Ticket Generator",
	description: "Conference Ticket Generator",
	icons: {
		icon: "/favicon.png", // regular icon
		shortcut: "/favicon.png",
	},
}

export default function Inside() {
	const [screenSize, setScreenSize] = useState({
		width: 0,
		height: 0,
	})

	useEffect(() => {
		function handleResize() {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<>
			<div>
				{screenSize.width > 1440 ? (
					<Image
						src="/assets/images/background-desktop.png"
						alt="Lines Pattern"
						layout="fill"
						objectFit="cover"
						className="absolute"
					/>
				) : (
					<Image
						src="/assets/images/background-mobile.png"
						alt="Lines Pattern"
						layout="fill"
						objectFit="cover"
						className="absolute"
					/>
				)}
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
				{screenSize.width > 1440 ? (
					<Image
						src="/assets/images/pattern-squiggly-line-top.svg"
						alt="Lines Top Pattern"
						width={500}
						height={500}
						className="absolute top-14 right-0"
					/>
				) : (
					<Image
						src="/assets/images/pattern-squiggly-line-top.svg"
						alt="Lines Top Pattern"
						width={150}
						height={150}
						className="absolute top-10 right-0"
					/>
				)}
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
				{screenSize.width > 1440 ? (
					<Image
						src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
						alt="squiggly line Pattern"
						width={530}
						height={530}
						className="absolute bottom-0 left-0"
					/>
				) : (
					<Image
						src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
						alt="squiggly line Pattern"
						width={250}
						height={250}
						className="absolute bottom-0 left-0"
					/>
				)}
			</div>
		</>
	)
}
