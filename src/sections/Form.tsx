"use client"
import { Info } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"

interface FormData {
	fullName: string
	email: string
	githubUsername: string
	avatar: File | null
}

const Form: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		githubUsername: "",
		avatar: null,
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFormData((prev) => ({
				...prev,
				avatar: e.target.files![0],
			}))
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log("Form submitted:", formData)
	}

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<label className="block text-xl text-neutral-300">
						Upload Avatar
					</label>
					<div
						onClick={() =>
							document.getElementById("hidden-input")?.click()
						}
						className="relative border-dashed border rounded-xl border-gray-400  py-4 bg-white/10 flex flex-col justify-center items-center gap-4 cursor-pointer"
					>
						<button
							id="button"
							className={`rounded-md ${formData.avatar ? "p-0" : "p-2 bg-gray-200/10"} focus:shadow-outline focus:outline-none`}
						>
							{formData.avatar ? (
								<Image
									className="rounded-xl"
									src={URL.createObjectURL(formData.avatar)}
									alt="Chosen avatar"
									width={55}
									height={55}
								/>
							) : (
								<Image
									src="/assets/images/icon-upload.svg"
									alt="Upload"
									width={24}
									height={24}
								/>
							)}
						</button>
						{formData.avatar ? (
							<div className="flex flex-row gap-4 text-neutral-100 items-center justify-center relative">
								<button
									className="p-1 text-xs rounded-md bg-neutral-50/10 hover:text-red-200"
									id="changeImage"
									type="button"
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											avatar: null,
										}))
									}
								>
									Remove Image
								</button>
								<button
									className="p-1 text-xs rounded-md bg-neutral-50/10 hover:text-red-200"
									id="deleteImage"
									type="button"
								>
									Change Image
								</button>
							</div>
						) : (
							<p className="text-neutral-400 flex flex-wrap justify-center">
								<span>Drag and drop or click to upload</span>
							</p>
						)}
						<input
							id="hidden-input"
							type="file"
							accept="image/jpeg,image/png"
							onChange={handleFileChange}
							className="hidden"
						/>
					</div>
					<div className="flex items-center gap-2 text-xs text-neutral-500">
						<Info size={"1rem"} />
						Upload your photo (JPG or PNG, max size: 500Kb).
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="block text-xl text-neutral-300">
						Full Name
					</label>
					<input
						type="text"
						name="fullName"
						className="h-12 rounded-xl border border-neutral-50 bg-neutral-50/10 px-4 text-neutral-300"
						value={formData.fullName}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="block text-xl text-neutral-300">
						Email Address
					</label>
					<input
						type="text"
						name="email"
						placeholder="example@email.com"
						className="h-12 rounded-xl border border-neutral-50 bg-neutral-50/10 px-4 text-neutral-300"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="block text-xl text-neutral-300">
						Github Username
					</label>
					<input
						type="text"
						placeholder="@yourusername"
						name="githubUsername"
						className="h-12 rounded-xl border border-neutral-50 bg-neutral-50/10 px-4 text-neutral-300"
						value={formData.githubUsername}
						onChange={handleChange}
					/>
				</div>
				<button
					className="h-12 w-full rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
					onClick={handleSubmit}
				>
					Generate My Ticket
				</button>
			</div>
		</div>
	)
}
export default Form
