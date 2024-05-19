import styled, { css } from "styled-components";

export interface GridContainerProps {
  asChild?: boolean;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-column: ${(props) => `span ${props.theme.grid.small.columns}`};
  width: ${(props) =>
    props.asChild
      ? "100%"
      : `calc(100% - ${props.theme.grid.small.margin * 2}px)`};
  grid-template-columns: ${(props) =>
    `repeat(${props.theme.grid.small.columns}, 1fr)`};
  margin: ${(props) => `${props.theme.grid.small.margin}px`};
  grid-gap: ${(props) => `${props.theme.grid.small.gutter}px`};

  ${({ theme, asChild }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.medium}px`}) {
      grid-column: ${(props) => `span ${props.theme.grid.medium.columns}`};
      width: ${asChild
        ? "100%"
        : `calc(100% - ${theme.grid.medium.margin * 2}px)`};
      grid-template-columns: ${`repeat(${theme.grid.medium.columns}, 1fr)`};
      margin: ${`${theme.grid.medium.margin}px`};
      grid-gap: ${`${theme.grid.medium.gutter}px`};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}px`}) {
      grid-column: ${(props) => `span ${props.theme.grid.large.columns}`};
      width: ${asChild
        ? "100%"
        : `calc(100% - ${theme.grid.large.margin * 2}px)`};
      grid-template-columns: ${`repeat(${theme.grid.large.columns}, 1fr)`};
      margin: ${`${theme.grid.large.margin}px`};
      grid-gap: ${`${theme.grid.large.gutter}px`};
    }
  `}
`;
