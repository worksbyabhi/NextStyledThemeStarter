import { LinkArrow } from "@/assets/images";
import { StyledLinkAnchor } from "./styled";
import { LinkAnchorProps } from "./types";

export const LinkAnchor = (props: LinkAnchorProps) => {
  const { children, ...rest } = props;
  return (
    <StyledLinkAnchor {...rest}>
      {children}
      <LinkArrow />
    </StyledLinkAnchor>
  );
};
