interface StyleInput {
	rounded: Record<string, string>
	size: Record<string, string>
	color: Record<string, string>
	base: string
	state: {
		disabled: string
		withIconLeft: string
		withIconRight: string
		withAddon: string
		defaultHeight: string
	}
}

export const styleInput: StyleInput = {
	rounded: {
		none: "rounded-none",
		xs: "rounded-xs",
		sm: "rounded-sm",
		md: "rounded-md",
		lg: "rounded-lg",
		xl: "rounded-xl",
		full: "rounded-full",
		default: "rounded-md",
	},
	size: {
		xs: "px-2 py-1",
		sm: "px-3 py-1.5",
		md: "px-4 py-2",
		lg: "px-5 py-2.5",
		xl: "px-6 py-3",
		default: "px-4 py-2",
	},
	color: {
		gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
		info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
		danger: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
		warning:
			"border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
		success:
			"border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
		default:
			"border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
	},
	base: "block w-full outline-none border text-sm p-3",
	state: {
		disabled: "!text-gray-700 bg-gray-200",
		withIconLeft: "pl-10",
		withIconRight: "pr-10",
		withAddon: "rounded-tr-lg rounded-br-lg",
		defaultHeight: "h-10",
	},
}
