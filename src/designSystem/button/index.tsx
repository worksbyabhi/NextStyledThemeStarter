import styled, { css } from "styled-components";
import { ButtonVariant } from "./types";

export interface ButtonProps {
  $variant?: ButtonVariant;
  width?: string;
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  min-width: ${(props) => props.width ?? "120px"};
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height ?? "44px"};
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif, Arial;
  padding: 0 1.5rem;
  border: none;
  background-color: ${({ theme, $variant = ButtonVariant.Primary }) =>
    $variant === ButtonVariant.Primary
      ? theme.colors.primary
      : theme.colors.background};
  color: ${({ theme, $variant = ButtonVariant.Primary }) =>
    $variant === ButtonVariant.Primary
      ? theme.colors.background
      : theme.colors.primary};
  transition: all 0.5s;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 6px 6px 0px ${(props) => props.theme.colors.secondary};
  }
`;
