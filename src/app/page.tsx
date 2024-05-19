"use client";

import { GridColumn, GridContainer } from "@/designSystem/grid";

export default function Home() {
  return (
    <GridContainer>
      <GridColumn style={{ alignItems: "center" }}>
        <h1>Next with Styled-Component</h1>
      </GridColumn>
    </GridContainer>
  );
}
