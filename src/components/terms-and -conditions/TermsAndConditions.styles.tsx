import styled from "styled-components";
import { breakpoints as bp } from "@/utils/layout";

export const Container = styled.div`
  color: gray;
  padding: 20px 50px;
  text-align: left;
  margin-top: 30px;

  @media (min-width: ${bp.md}) {
    padding: 40px 100px;
  }

  @media (min-width: ${bp.lg}) {
    padding: 40px 200px;
  }

  @media (min-width: ${bp.xl}) {
    padding: 40px 250px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: ${bp.md}) {
  }
`;
