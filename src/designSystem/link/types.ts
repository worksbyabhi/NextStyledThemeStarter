import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { WebTarget } from "styled-components";

export enum LinkVariant {
  Primary = "Primary",
  Secondary = "Secondary",
}

export interface StyledLinkAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  $variant?: LinkVariant;
  width?: string;
  height?: string;
}

export interface LinkAnchorProps extends StyledLinkAnchorProps {
  as?: void | WebTarget | undefined;
  children: ReactNode;
}
