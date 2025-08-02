import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion"
import type { TargetAndTransition, Variants, Transition, MotionProps as FMProps } from "framer-motion";
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

interface MotionProps extends SizeProps, ShapeProps, PositionProps, DisplayProps, FMProps {
    children?: React.ReactNode;

    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    exit?: TargetAndTransition;
    whileHover?: TargetAndTransition;
    whileTap?: TargetAndTransition;
    whileDrag?: TargetAndTransition;
    variants?: Variants;
    transition?: Transition;
}

const StyledMotion = styled(motion.div)<MotionProps>(
    parseSize,
    parseShape,
    parsePosition,
    parseDisplay,
)

const Motion = ({
    children,
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileDrag,
    variants,
    transition,
    ...props
}: MotionProps) => {
    return (
        <StyledMotion
            initial={initial}
            animate={animate}
            exit={exit}
            whileHover={whileHover}
            whileTap={whileTap}
            whileDrag={whileDrag}
            variants={variants}
            transition={transition}
            {...props}
        >
            {children}
        </StyledMotion>
    )
}

export default Motion
