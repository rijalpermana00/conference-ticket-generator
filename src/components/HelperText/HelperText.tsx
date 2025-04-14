import { ReactNode } from "react"
import { Style, StyleType } from "./Style"
import clsx from "clsx"

interface HelperTextInterface {
	children: ReactNode
	color?: keyof StyleType["color"]
}
export default function HelperText({ children, color }: HelperTextInterface) {
	const colorStyle = color ? Style.color[color] : Style.color.default
	return <p className={clsx(`mt-1 text-sm ${colorStyle}`)}>{children}</p>
}
