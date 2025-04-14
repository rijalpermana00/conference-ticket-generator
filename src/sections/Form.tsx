"use client"
import { Info } from "lucide-react"
import Image from "next/image"
import React from "react"

type FormData = {
	fullName: string
	email: string
	githubUsername: string
	avatar: string
}

interface FormProps {
	formData: FormData
	errors: Partial<Record<keyof FormData, string>>
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent) => void
}

const Form: React.FC<FormProps> = ({
	formData,
	errors,
	handleChange,
	handleFileChange,
	handleSubmit,
}) => {
	return (
		<div className="w-full max-w-md mx-auto">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<label className="block text-xl text-neutral-300">
						Upload Avatar
					</label>
					<div
						onClick={() => {
							document.getElementById("hidden-input")?.click()
						}}
						className="relative border-dashed border rounded-xl border-gray-400  py-4 bg-white/10 flex flex-col justify-center items-center gap-4 cursor-pointer"
					>
						<button
							id="button"
							className={`rounded-md ${formData.avatar ? "p-0" : "p-2 bg-gray-200/10"} focus:shadow-outline focus:outline-none`}
						>
							{formData.avatar ? (
								<Image
									className="rounded-xl max-w-[55px] max-h-[55px] min-w-[55px] min-h-[55px] object-fill"
									src={formData.avatar}
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
									onClick={(e) => {
										e.stopPropagation()
										handleChange({
											target: {
												name: "avatar",
												value: "",
											},
										} as React.ChangeEvent<HTMLInputElement>)
										const fileInput =
											document.getElementById(
												"hidden-input"
											) as HTMLInputElement
										if (fileInput) {
											fileInput.value = ""
										}
									}}
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
					<span
						className={`${errors.avatar ? "text-red-500" : "text-neutral-500"} text-sm flex gap-2`}
					>
						{errors.avatar
							? <Info size={"1rem"} /> + errors.avatar
							: "Upload your photo (JPG or PNG, max size: 500Kb)."}
					</span>
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
					{errors.fullName && (
						<span className="text-red-500 text-sm">
							{errors.fullName}
						</span>
					)}
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
					{errors.email && (
						<span className="text-red-500 text-sm flex gap-2">
							<Info size={"1rem"} />
							{errors.email}
						</span>
					)}
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
					{errors.githubUsername && (
						<span className="text-red-500 text-sm">
							{errors.githubUsername}
						</span>
					)}
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
