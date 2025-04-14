import HelperText from "../HelperText/HelperText"
import { TextAreaInterface } from "./InputInterface"
import { styleInput } from "./Style"
import clsx from "clsx"

export default function TextArea({
	name,
	value,
	placeholder,
	onChange,
	rows,
	customStyle,
	disabled,
	readonly,
	helperText,
	color,
}: TextAreaInterface) {
	const colorClass = color
		? styleInput.color[color]
		: styleInput.color.default

	return (
		<div className={clsx(customStyle ? "content-center w-full md:ms-4" : "")}>
			<textarea
				className={clsx(
					colorClass,
					disabled ? "bg-gray-200" : "",
					"block w-full outline-none border text-sm  p-3 rounded-lg"
				)}
				placeholder={placeholder}
				value={value ?? ""}
				disabled={disabled}
				readOnly={readonly}
				rows={rows ?? 4}
				name={name}
				onChange={onChange}
			>
				{value ?? ""}
			</textarea>
			{helperText && <HelperText color={color}>{helperText}</HelperText>}
		</div>
	)
}
