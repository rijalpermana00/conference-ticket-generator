// import { FilePondFile } from "filepond"

import { InputHTMLAttributes } from "react"
import { StyleType } from "../HelperText/Style"

export interface OptionType {
	id?: string
	value: string
	label: string
	color?: string
}

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
	customStyle?: "inline"
	disabled?: boolean
	error?: string | null
	type?: "text" | "password" | "email"
	name?: string
	value?: string
	placeholder?: string
	icon?: string
	rightIcon?: string
	addon?: string
	ref?: React.Ref<HTMLInputElement>
	children?: React.ReactNode
	helperText?: React.ReactNode
    customHeight?: string
	color?: keyof StyleType["color"]
	cursor?: React.CSSProperties["cursor"]
}

export interface TextAreaInterface {
	customStyle?: "inline"
	labelWidth?: "xs" | "sm" | "md" | "lg" | "xl"
	readonly?: boolean
	disabled?: boolean
	error?: string | null
	type?: "text" | "password" | "email"
	name?: string
	value?: string
	rows?: number
	placeholder?: string
	// onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	// onChangeSelect?: ((newValue: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void) | undefined
	icon?: string
	rightIcon?: string
	addon?: string
	children?: React.ReactNode
	helperText?: React.ReactNode
	color?: keyof StyleType["color"]
	// onUpdateFiles?: (files: FilePondFile[]) => void
}

export interface RadioInterface {
	customStyle?: "inline"
	labelWidth?: "xs" | "sm" | "md" | "lg" | "xl"
	readonly?: boolean
	disabled?: boolean
	value?: string | number
	error?: string | null
	name: string
	placeholder?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	icon?: React.ReactNode
	options: OptionType[]
	children?: React.ReactNode
	// onUpdateFiles?: (files: FilePondFile[]) => void
}

export interface ToggleInterface {
	checked?: boolean
	customStyle?: "inline"
	labelWidth?: "xs" | "sm" | "md" | "lg" | "xl"
	readonly?: boolean
	disabled?: boolean
	error?: string | null
	name: string
	placeholder?: string
	labelOnChecked?: string
	labelUnChecked?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	icon?: React.ReactNode
	children?: React.ReactNode
}

export const RadioValidNumber = () => {
	const list: Array<string> = ["0", "1"]
	return list
}
