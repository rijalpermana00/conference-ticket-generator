import ErrorLabel from "../HelperText/HelperText"
import { RadioInterface } from "./InputInterface"

export function InlineRadio({
	error = null,
	name,
	onChange,
	value,
	options,
	customStyle,
	disabled,
	readonly,
}: RadioInterface) {
	return (
		<div
			className={`${customStyle ? "content-center w-full md:ms-4" : ""}`}
		>
			<div className="flex">
				{options?.map((option) => (
					<div className="flex items-center me-4" key={option.value}>
						<input
							id={`${name}-${option.value}`} // Unique id for each option
							type="radio"
							disabled={disabled}
							readOnly={readonly}
							value={option.value}
							name={name}
							className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							checked={value === option.value}
							onChange={onChange}
							aria-label={option.label}
						/>
						<label
							htmlFor={`${name}-${option.value}`} // Unique id for label
							className="ms-2 text-sm cursor-pointer font-medium text-gray-900"
						>
							{option.label}
						</label>
					</div>
				))}
			</div>
			{error && <ErrorLabel>{error}</ErrorLabel>}
		</div>
	)
}
