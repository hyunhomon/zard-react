import styled from "@emotion/styled";
import type { SizeProps, ShapeProps, PositionProps, DisplayProps } from "../../../schemas/styles";
import {
    parseSize,
    parseShape,
    parsePosition,
    parseDisplay,
} from "../../../utils/parseStyles";

interface ImageProps extends SizeProps, ShapeProps, PositionProps, DisplayProps {
    src: string;
    alt: string;
    fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const StyledImage = styled.img<ImageProps>(
    parseSize,
    parseShape,
    parsePosition,
    parseDisplay,
    ({ fit }) => ({ objectFit: fit })
)

const Image = ({ src, alt, fit = "cover", ...props }: ImageProps) => {
    return (
      <StyledImage
        src={src}
        alt={alt}
        fit={fit}
        {...props}
      />
    );
};

export default Image;
