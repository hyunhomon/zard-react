import styled from "@emotion/styled";
import type { Font } from "../../themes/type";
import type { TextAlign, SizeProps, PositionProps } from "../../../schemas/styles";
import {
    parseSize,
    parsePosition,
    parseFont,
} from "../../../utils/parseStyles";

interface TextProps extends SizeProps, PositionProps {
    value?: string;
    font: Font;
    color: string;
    align?: TextAlign;
}

const StyledText = styled.span<TextProps>(
    parseSize,
    parsePosition,
    props => parseFont(props.font, props.color, props.align),
)

const Text = ({ value, font, color, align, ...props }: TextProps) => {
    return (
        <StyledText
            font={font}
            color={color}
            align={align}
            {...props}
        >
            {value}
        </StyledText>
    )
}

export default Text
