import React from "react"
import { useTheme } from "@emotion/react"

import HStack from "../core/HStack"
import Text from "../core/Text"

interface ButtonProps {
    label: string,
    icon?: React.ReactNode,
    variant?: "fill" | "outline" | "disabled",
    onClick: () => void
}

const Button = ({label, icon, variant = "fill", onClick}: ButtonProps) => {
    const theme = useTheme()

    return (
        <HStack
            p={14}
            gap={6}
            r={10}
            bgColor={
                variant === "fill" ? theme.colors.primary
                : variant === "outline" ? theme.colors.bgWeak
                : theme.colors.bgRegular }
            olColor={
                variant === "outline" ? theme.colors.outline
                : undefined }
            onClick={onClick}
        >
            {icon}
            <Text value={label} font={theme.fonts.ms} color={
                variant === "fill" ? theme.colors.ctElevated
                : variant === "outline" ? theme.colors.ctStrong
                : theme.colors.ctWeak }/>
        </HStack>
    )
}

export default Button
