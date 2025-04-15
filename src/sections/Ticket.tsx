"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"

const Ticket = ({
	name,
	email,
	githubUsername,
	avatar,
}: {
	name: string
	email: string
	githubUsername: string
	avatar: string
}) => {
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
			<div className="flex flex-col gap-5 text-neutral-200 font-semibold text-center">
				<div>
					<h1 className="text-[59px] leading-none">
						Congrats,{" "}
						<span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
							{name}!
						</span>{" "}
						<br />
						Your ticket is ready.
					</h1>
				</div>
				<div className="max-w-3xl mx-auto">
					<p className="font-normal text-center text-[23px] dark:text-slate-400 text-slate-600">
						We&apos;ve emailed your ticket to <br />
						<span className="text-orange-500">{email}</span> and
						will send updates in <br />
						the run up to the event.
					</p>
				</div>
			</div>
			<div className="relative flex flex-col items-center justify-center desktop:w-[500px] w-[350px] max-w-7xl mx-auto">
				{screenSize.width > 1440 ? (
					<Image
						src="/assets/images/pattern-ticket.svg"
						alt="circle Pattern"
						width={500}
						height={400}
						className=""
					/>
				) : (
					<Image
						src="/assets/images/pattern-ticket.svg"
						alt="circle Pattern"
						width={350}
						height={400}
						className=""
					/>
				)}
				<div className="absolute p-5 desktop:pr-2 pr-0 top-0 left-0 flex flex-row justify-between gap-3 w-full h-full">
					<div className="flex flex-col justify-between">
						<div className="flex flex-row mobile:gap-3">
							<div className="flex flex-col gap-4 mobile:pt-1">
								<Image
									src="/assets/images/logo-mark.svg"
									alt="Logo"
									width={40}
									height={40}
									className="top-0 left-0 mobile:max-w-[30px] items-center"
								/>
							</div>
							<div className="flex flex-col desktop:gap-4 gap-1">
								<h1 className="text-neutral-100 desktop:text-3xl text-xl font-semibold">
									Coding Conf
								</h1>
								<p className="text-neutral-400 mobile:text-xs">
									Jan 31, 2025 / Austin, TX
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<Image
								src={avatar}
								alt="Avatar"
								width={70}
								height={70}
								className="desktop:rounded-xl rounded-lg desktop:max-w-[70px] max-w-[50px] desktop:max-h-[70px] max-h-[50px] desktop:min-w-[70px] min-w-[50px] desktop:min-h-[70px] min-h-[50px] object-fill"
							/>
							<div className="flex flex-col">
								<p className="text-neutral-200 text-xl">
									{name}
								</p>
								<div className="flex flex-row desktop:gap-2 gap-1">
									<Image
										src="/assets/images/icon-github.svg"
										alt="Avatar"
										width={20}
										height={20}
										className="rounded-lg mobile:max-w-[15px]"
									/>
									<p className="text-neutral-400 mobile:text-xs">
										{githubUsername}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative text-center content-center">
						<p className="text-neutral-500 rotate-90 text-2xl">
							#01609
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default Ticket
