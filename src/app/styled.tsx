import { GridColumn } from "@/designSystem/grid";
import styled from "styled-components";

export const ReverseGridColumn = styled(GridColumn)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

export const DemoGridColumn = styled(GridColumn)`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
`;
