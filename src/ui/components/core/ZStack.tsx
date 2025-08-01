import styled from "@emotion/styled";
import type {
    SizeProps,
    ShapeProps,
    PositionProps,
    DisplayProps,
} from "../../../schemas/styles";
import {
    parseSize,
    parseShape,
    parsePosition,
    parseDisplay,
} from "../../../utils/parseStyles";

interface ZStackProps extends SizeProps, ShapeProps, PositionProps, DisplayProps {
    children?: React.ReactNode;

    hover?: DisplayProps;
    focus?: DisplayProps;
    active?: DisplayProps;

    tabIdx?: number;
    onClick?: () => void;
}

const StyledZStack = styled.div<ZStackProps>(
    parseSize,
    parseShape,
    parsePosition,
    parseDisplay,
    props => ({
        "&:hover": parseDisplay(props.hover ?? {}),
        "&:focus": parseDisplay(props.focus ?? {}),
        "&:active": parseDisplay(props.active ?? {}),
    })
)

const ZStack = ({ children, tabIdx, onClick, ...props }: ZStackProps) => {
    return (
        <StyledZStack
            tabIndex={tabIdx}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledZStack>
    )
}

export default ZStack
