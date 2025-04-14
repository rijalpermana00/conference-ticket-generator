import { LabelStyle } from "./Style"

interface LabelInterface {
	color?: keyof typeof LabelStyle.color
	children?: React.ReactNode
}

export function LabelWrapper({ children, color }: LabelInterface) {
	return (
		<div className={`mb-2 block`}>
			<Label color={color}>{children}</Label>
		</div>
	)
}

export default function Label({ children, color }: LabelInterface) {
	const labelStyle = color
		? LabelStyle.color[color]
		: LabelStyle.color.default
	return (
		<label className={`block text-sm font-bold ${labelStyle}`}>
			{children}
		</label>
	)
}
