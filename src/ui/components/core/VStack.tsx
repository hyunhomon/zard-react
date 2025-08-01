import styled from "@emotion/styled";
import type {
    SizeProps,
    SpacingProps,
    ShapeProps,
    LayoutProps,
    PositionProps,
    DisplayProps,
} from "../../../schemas/styles";
import {
    parseSize,
    parseSpacing,
    parseShape,
    parseLayout,
    parsePosition,
    parseDisplay,
} from "../../../utils/parseStyles";

interface VStackProps extends SizeProps, SpacingProps, ShapeProps, LayoutProps, PositionProps, DisplayProps {
    children?: React.ReactNode;

    hover?: DisplayProps;
    focus?: DisplayProps;
    active?: DisplayProps;

    tabIdx?: number;
    onClick?: () => void;
}

const StyledVStack = styled.div<VStackProps>(
    parseSize,
    parseSpacing,
    parseShape,
    parseLayout,
    parsePosition,
    parseDisplay,
    props => ({
        "&:hover": parseDisplay(props.hover ?? {}),
        "&:focus": parseDisplay(props.focus ?? {}),
        "&:active": parseDisplay(props.active ?? {}),
    })
)

const VStack = ({ children, tabIdx, onClick, ...props }: VStackProps) => {
    return (
        <StyledVStack
            dir="c"
            tabIndex={tabIdx}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledVStack>
    )
}

export default VStack
