import styled from "@emotion/styled";
import type { Font } from "../../themes/type";
import type {
  TextAlign,
  SizeProps,
  SpacingProps,
  ShapeProps,
  PositionProps,
  DisplayProps,
} from "../../../schemas/styles";
import {
  parseSize,
  parseSpacing,
  parseShape,
  parsePosition,
  parseDisplay,
  parseFont,
} from "../../../utils/parseStyles";

interface TextInputProps extends SizeProps, SpacingProps, ShapeProps, PositionProps, DisplayProps {
  value: string;
  hint?: string;
  type?: "text" | "number" | "email" | "search" | "password";
  disabled?: boolean;
  readOnly?: boolean;

  font: Font;
  valueColor: string;
  hintColor: string;
  align?: TextAlign;

  focus?: DisplayProps;
  disable?: DisplayProps;

  tabIdx?: number;
  onInput?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const StyledInput = styled.input<TextInputProps>(
  parseSize,
  parseSpacing,
  parseShape,
  parsePosition,
  parseDisplay,
  props => parseFont(props.font, props.valueColor, props.align),
  props => ({
    "&:placeholder": { color: props.hintColor },
    "&:focus": parseDisplay(props.focus ?? {}),
    "&:disabled": parseDisplay(props.disable ?? {}),
  }),
);

const TextInput = ({
  value,
  hint,
  type = "text",
  disabled,
  readOnly,
  font,
  valueColor,
  hintColor,
  align,
  focus,
  disable,
  tabIdx,
  onInput,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) => {
  return (
    <StyledInput
      tabIndex={tabIdx}
      type={type}
      value={value}
      placeholder={hint}
      disabled={disabled}
      readOnly={readOnly}
      font ={font}
      valueColor={valueColor}
      hintColor={hintColor}
      align={align}
      focus={focus}
      disable={disable}
      onChange={(e) => onInput?.(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default TextInput;
