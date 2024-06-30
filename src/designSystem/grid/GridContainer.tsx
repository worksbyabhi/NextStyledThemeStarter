"use client";
import styled, { css } from "styled-components";

export interface GridContainerProps {
  $isRootParent?: boolean;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-column: ${(props) => `span ${props.theme.grid.small.columns}`};
  max-width: ${({ theme, $isRootParent }) =>
    $isRootParent ? `calc(100% - ${theme.grid.small.margin * 2}px)` : "100%"};
  grid-template-columns: ${(props) =>
    `repeat(${props.theme.grid.small.columns}, 1fr)`};
  margin: ${({ theme, $isRootParent }) =>
    $isRootParent ? `0 ${theme.grid.small.margin}px` : "0"};
  grid-gap: ${(props) => `${props.theme.grid.small.gutter}px`};

  ${({ theme, $isRootParent }) => css`
    @media screen and (min-width: ${`${theme.breakpoints.medium}px`}) {
      grid-column: ${(props) => `span ${props.theme.grid.medium.columns}`};
      max-width: ${$isRootParent
        ? `calc(100% - ${theme.grid.medium.margin * 2}px)`
        : "100%"};
      grid-template-columns: ${`repeat(${theme.grid.medium.columns}, 1fr)`};
      margin: ${$isRootParent ? `0 ${theme.grid.medium.margin}px` : "0"};
      grid-gap: ${`${theme.grid.medium.gutter}px`};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}px`}) {
      grid-column: ${(props) => `span ${props.theme.grid.large.columns}`};
      max-width: ${$isRootParent
        ? `${
            theme.grid.large.maxWidth
              ? `${theme.grid.large.maxWidth}px`
              : `calc(100% - ${theme.grid.large.margin * 2}px)`
          }`
        : "100%"};
      grid-template-columns: ${`repeat(${theme.grid.large.columns}, 1fr)`};
      margin: ${$isRootParent ? `0 ${theme.grid.large.margin}px` : "0"};
      grid-gap: ${`${theme.grid.large.gutter}px`};
    }

    @media screen and (min-width: ${`${
        theme.breakpoints.large + theme.grid.large.margin * 2
      }px`}) {
      grid-column: ${(props) => `span ${props.theme.grid.large.columns}`};
      max-width: ${$isRootParent
        ? `${
            theme.grid.large.maxWidth
              ? `${theme.grid.large.maxWidth}px`
              : `calc(100% - ${theme.grid.large.margin * 2}px)`
          }`
        : "100%"};
      grid-template-columns: ${`repeat(${theme.grid.large.columns}, 1fr)`};
      margin: ${$isRootParent ? `0 auto` : "0"};
      grid-gap: ${`${theme.grid.large.gutter}px`};
    }
  `}
`;
