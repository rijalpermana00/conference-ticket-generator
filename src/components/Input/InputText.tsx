import clsx from "clsx"
import HelperText from "../HelperText/HelperText"
import { InputInterface } from "./InputInterface"
// import WithAddon from "./InputText.addon"
// import WithIcon from "./InputText.Icon"
import { styleInput } from "./Style"

export default function Input({
    icon,
    rightIcon,
    addon,
    helperText,
    color,
    cursor,
    customHeight,
    ...rest
}: InputInterface) {
    const inputClasses = clsx(
        styleInput.color[color ?? "default"],
        styleInput.base,
        icon && styleInput.state.withIconLeft,
        rightIcon && styleInput.state.withIconRight,
        customHeight || styleInput.state.defaultHeight,
        addon ? styleInput.state.withAddon : styleInput.rounded.lg,
        rest.disabled && styleInput.state.disabled
    );      
    return (
        <>
            <div className={clsx(addon ? "flex" : "relative w-full")}>
                {/* {addon && <WithAddon addon={addon} />} */}
                {/* {icon && <WithIcon icon={icon} position="left" />}
                {rightIcon && <WithIcon icon={rightIcon} position="right" />} */}
                <input
                    style={{ cursor }}
                    className={inputClasses}
                    {...rest}
                />
            </div>
            {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </>
    )
}
