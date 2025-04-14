export function inputLabelWidth(width: string | undefined) {
	switch (width) {
		case "xs":
			return "w-20"
		case "sm":
			return "w-30"
		case "md":
			return "w-50"
		case "lg":
			return "w-60"
		case "xl":
			return "w-80"
		default:
			return "w-40"
	}
}
