"use client";

import { Button } from "@/designSystem/button";
import { ButtonVariant } from "@/designSystem/button/types";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import { LinkAnchor } from "@/designSystem/link";
import { DemoGridColumn, ReverseGridColumn } from "./styled";
import { LinkVariant } from "@/designSystem/link/types";
import { Placeholder } from "@/designSystem/placeholder";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Placeholder />
      <GridColumn style={{ alignItems: "center" }}>
        <h1>Next with Styled-Component</h1>
        {process.env.NODE_ENV === "development" ? (
          <LinkAnchor
            href="https://worksbyabhi.com/NextStyledThemeStarter"
            as={Link}
            target="_blank"
          >
            Online documentation
          </LinkAnchor>
        ) : null}
      </GridColumn>
      <GridColumn>
        <h2>Grid</h2>
      </GridColumn>
      <GridColumn>
        <h3>GridContainer</h3>
        <ul>
          <li>
            <b>GridContainer</b> creates the 12 column grid. The number of
            columns at different view port is defined in{" "}
            <b>src/designSystem/theme/index.ts</b>
          </li>
          <li>
            <b>GridContainer</b> takes optional <b>$isRootParent</b> props which
            adds the margin. Ideally, it should only present at the root level
            to keep the contents from touching the border of browser.
          </li>
          <li>
            <b>GridContainer</b> within another <b>GridContainer</b> will
            re-create 12 column grid. This would be ok and have no impact when
            it is direct child of <b>{`<GridContainer $isRootParent>`}</b>
          </li>
        </ul>
      </GridColumn>
      <GridContainer style={{ background: "#c4a2fb", padding: "1rem" }}>
        <GridColumn>
          <span>
            This is a <b>GridContainer within</b>{" "}
            <b>{`<GridContainer $isRootParent>`}</b> from src/app/layout.tsx
          </span>
        </GridColumn>
      </GridContainer>
      <Placeholder height="1rem" />
      <GridColumn>
        <h3>GridColumn</h3>
        <ul>
          <li>
            <b>GridColumn</b> takes following props:
            <pre>
              {`  $spanSmall?: number;
  $spanMedium?: number;
  $spanDesktop?: number;
  $alignItemsDesktop?: string;
  $alignItemsMedium?: string;
  $alignItemsSmall?: string;
              `}
              `
            </pre>
          </li>
          <li>
            <b>$span*</b> is used to define how many grid columns this container
            will take. The defaults are maximum number of columns for that
            viewport (except for case: if $spanDesktop is defined and
            $spanMedium is not defined, then $spanMedium value would be
            $spanDesktop)
          </li>
          <li>
            <b>$alignItems*</b> is used to define the alignment of contents.
          </li>
        </ul>
      </GridColumn>
      <Placeholder />
      <GridContainer>
        <GridColumn>
          <h2>Button</h2>
        </GridColumn>
        <DemoGridColumn
          $spanDesktop={6}
          $alignItemsDesktop="center"
          $alignItemsMedium="center"
        >
          <Button>Primary button</Button>
        </DemoGridColumn>
        <ReverseGridColumn
          $spanDesktop={6}
          $alignItemsDesktop="center"
          $alignItemsMedium="center"
        >
          <Button $variant={ButtonVariant.Secondary}>Secondary button</Button>
        </ReverseGridColumn>
      </GridContainer>
      <Placeholder />
      <GridContainer>
        <GridColumn>
          <h2>LinkAnchor (component for link)</h2>
        </GridColumn>
        <DemoGridColumn
          $spanDesktop={6}
          $alignItemsDesktop="center"
          $alignItemsMedium="center"
        >
          <LinkAnchor>Primary link</LinkAnchor>
        </DemoGridColumn>
        <ReverseGridColumn
          $spanDesktop={6}
          $alignItemsDesktop="center"
          $alignItemsMedium="center"
        >
          <LinkAnchor href="" $variant={LinkVariant.Secondary}>
            Secondary link
          </LinkAnchor>
        </ReverseGridColumn>
      </GridContainer>
      <Placeholder height="2rem" />
    </>
  );
}
