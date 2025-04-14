type LabelStyleType = {
	color: {
		default: string
		info: string
		danger: string
		warning: string
		success: string
	}
}

export const LabelStyle: LabelStyleType = {
	color: {
		default: "text-gray-900 dark:text-white",
		info: "text-cyan-500 dark:text-cyan-600",
		danger: "text-red-700 dark:text-red-500",
		warning: "text-yellow-500 dark:text-yellow-600",
		success: "text-green-700 dark:text-green-500",
	},
}
