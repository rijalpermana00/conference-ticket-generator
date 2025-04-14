export interface StyleType {
	color: {
		gray: string;
		info: string;
		success: string;
		danger: string;
		warning: string;
		default: string;
	};
}

export const Style: StyleType = {
	color: {
		gray: "text-gray-500",
		info: "text-cyan-700",
		success: "text-green-600",
		danger: "text-red-600",
		warning: "text-yellow-500",
		default: "text-gray-500",
	},
}
