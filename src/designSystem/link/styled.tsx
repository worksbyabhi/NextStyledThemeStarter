import styled from "styled-components";
import { LinkVariant, StyledLinkAnchorProps } from "./types";

export const StyledLinkAnchor = styled.a<StyledLinkAnchorProps>`
  display: inline-flex;
  text-decoration: none;
  min-width: ${(props) => props.width ?? "120px"};
  height: ${(props) => props.height ?? "inherit"};
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif, Arial;
  padding: 0 1.5rem;
  border: none;
  color: ${({ theme, $variant = LinkVariant.Primary }) =>
    $variant === LinkVariant.Primary
      ? theme.colors.primary
      : theme.colors.background};
  transition: all 0.5s;
  cursor: pointer;
  align-items: center;
  gap: 6px;

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${({ theme, $variant = LinkVariant.Primary }) =>
      $variant === LinkVariant.Primary
        ? theme.colors.primary
        : theme.colors.background};
    transition: all 0.5s;
  }

  &:hover {
    svg {
      transform: translateX(4px);
    }
  }
`;
