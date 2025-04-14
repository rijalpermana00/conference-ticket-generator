import { ToggleInterface } from "./InputInterface"

export default function Toggle({
	onChange,
	checked,
	labelOnChecked,
	labelUnChecked,
	disabled,
	readonly,
}: ToggleInterface) {
	return (
		<div>
			<label className="inline-flex float-start items-center cursor-pointer">
				<input
					type="checkbox"
					className="sr-only peer"
					onChange={onChange}
					checked={checked}
					disabled={disabled}
					readOnly={readonly}
				/>
				<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
				<span className="ms-3 text-sm font-medium text-gray-900">
					{checked ? labelOnChecked : labelUnChecked}
				</span>
			</label>
		</div>
	)
}
