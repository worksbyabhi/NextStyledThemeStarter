import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

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
  children: ReactNode;
}
