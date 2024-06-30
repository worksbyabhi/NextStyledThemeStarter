"use client";
import styled, { css } from "styled-components";

export interface GridColumnProps {
  $spanSmall?: number;
  $spanMedium?: number;
  $spanDesktop?: number;
  $alignItemsDesktop?: string;
  $alignItemsMedium?: string;
  $alignItemsSmall?: string;
}

export const GridColumn = styled.div<GridColumnProps>`
  grid-column: ${(props) =>
    `span ${props.$spanSmall || props.theme.grid.small.columns}`};
  display: ${(props) => (props.$spanSmall === 0 ? "none" : "flex")};
  flex-direction: column;
  align-items: ${(props) => props.$alignItemsSmall ?? "flex-start"};

  ${({
    theme,
    $spanMedium,
    $spanDesktop,
    $alignItemsMedium,
    $alignItemsDesktop,
  }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.medium}px`}) {
      grid-column: ${(props) =>
        `span ${
          $spanMedium || $spanDesktop || props.theme.grid.medium.columns
        }`};
      align-items: ${$alignItemsMedium ?? "flex-start"};
      display: ${$spanMedium === 0 ? "none" : "flex"};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}px`}) {
      grid-column: ${(props) =>
        `span ${$spanDesktop || props.theme.grid.large.columns}`};
      align-items: ${$alignItemsDesktop ?? "flex-start"};
      display: ${$spanDesktop === 0 ? "none" : "flex"};
    }
  `}
`;
