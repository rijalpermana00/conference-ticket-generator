"use client"
import Form from "@/sections/Form"
import { Hero } from "@/sections/Hero"
import Ticket from "@/sections/Ticket"
import { useState } from "react"
import {
	email,
	object,
	string,
	pipe,
	InferOutput,
	parse,
	ValiError,
	optional,
} from "valibot"

const FormSchema = object({
	fullName: pipe(optional(string("Full name is required"))),
	email: pipe(
		string("Email is required"),
		email("Please enter a valid email address")
	),
	githubUsername: pipe(optional(string("Github username is required"))),
	avatar: pipe(optional(string("Avatar is required"))),
})

type FormData = InferOutput<typeof FormSchema>

export default function Home() {
	const [submit, setSubmit] = useState(false)
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		githubUsername: "",
		avatar: "",
	})
	const [errors, setErrors] = useState<
		Partial<Record<keyof FormData, string>>
	>({})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
		setErrors((prev) => ({
			...prev,
			[name]: "",
		}))
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0]
			const fileSize = file.size / 1024 / 1024

			setFormData((prev) => ({
				...prev,
				avatar: URL.createObjectURL(file),
			}))

			if (fileSize > 0.5) {
				const errorMessage =
					"File too large. Please upload a photo under 500KB"
				setErrors((prev) => ({
					...prev,
					avatar: errorMessage,
				}))
			} else {
				setErrors((prev) => ({
					...prev,
					avatar: "",
				}))
			}
		} else {
			// Only set error if user has interacted with the file input
			// but didn't select a file
			if (e.target.value === "") {
				setErrors((prev) => ({
					...prev,
					avatar: "Avatar is required",
				}))
			}
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// Create a copy of current errors to work with
		let currentErrors: Partial<Record<keyof FormData, string>> = {
			...errors,
		}
		let hasErrors = false

		// Check if avatar is missing (since it's optional in the schema but we want to require it)
		if (!formData.avatar) {
			currentErrors.avatar = "Avatar is required"
			hasErrors = true
		}

		// Check for avatar file size error (this is handled separately from schema validation)
		if (errors.avatar) {
			hasErrors = true
		}

		// Validate all fields using the schema
		try {
			const validatedData = parse(FormSchema, formData)

			// Update errors state before proceeding
			setErrors(currentErrors)

			// If we have no errors from validation and no file size errors, proceed
			if (!hasErrors) {
				console.log("Form submitted:", validatedData)
				setSubmit(true)
			}
		} catch (error) {
			if (error instanceof ValiError) {
				error.issues.forEach((issue) => {
					const path = issue.path?.[0]?.key as keyof FormData
					if (path) {
						currentErrors[path] = issue.message
						hasErrors = true
					}
				})
				setErrors(currentErrors)
			}
		}
	}

	return (
		<div className="flex flex-col gap-10 max-w-7xl mx-auto">
			{submit ? (
				<Ticket
					name={formData.fullName ?? ""}
					email={formData.email}
					githubUsername={formData.githubUsername ?? ""}
					avatar={formData.avatar ?? ""}
				/>
			) : (
				<>
					<Hero />
					<Form
						formData={formData as Required<FormData>}
						errors={errors}
						handleChange={handleChange}
						handleFileChange={handleFileChange}
						handleSubmit={handleSubmit}
					/>
				</>
			)}
		</div>
	)
}
