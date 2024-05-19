import styled, { css } from "styled-components";

export interface GridColumnProps {
  spanSmall?: number;
  spanMedium?: number;
  spanDesktop?: number;
}

export const GridColumn = styled.div<GridColumnProps>`
  grid-column: ${(props) =>
    `span ${props.spanSmall || props.theme.grid.small.columns}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme, spanMedium, spanDesktop }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.medium}px`}) {
      grid-column: ${(props) =>
        `span ${spanMedium || props.theme.grid.medium.columns}`};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}px`}) {
      grid-column: ${(props) =>
        `span ${spanDesktop || props.theme.grid.large.columns}`};
    }
  `}
`;
