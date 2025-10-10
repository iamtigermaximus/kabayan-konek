"use client";

import styled from "styled-components";
// import { breakpoints as bp } from '../../../../lib/utils/layout';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 10px;
//   height: 100%;
//   z-index: 99;
//   margin-top: 20px;

//   @media (min-width: ${bp.md}) {
//     padding: 20px 50px;
//   }
// `;
// export const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   border: 1px solid #ccc;
//   margin-top: 20px;
// `;

// export const StyledTableCell = styled.td`
//   border: 1px solid #ccc;
//   padding: 8px;
//   text-align: left;
// `;

// export const StyledTableHeader = styled.th`
//   border: 1px solid #ccc;
//   padding: 8px;
//   text-align: left;
//   background-color: #f2f2f2;
//   font-weight: bold;
// `;

export const Container = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px;
  /* height: 100vh; */
  /* background-color: orange; */
  color: black;
  /* margin: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    padding: 50px 50px;
  }
  /* Desktop and up */
  @media (min-width: 1024px) {
    padding: 80px 100px;
  }

  /* Large desktop and up */
  @media (min-width: 1440px) {
    padding: 80px 200px;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DeskTopCaseTitle = styled.h3`
  display: none; // Hide by default on mobile

  @media (min-width: 769px) {
    display: block; // Show on desktop
    /* margin: 0 0 15px 0; */
    padding: 10px;
    background-color: #2c5aa0;
    color: white;
    text-align: center;
    border-radius: 4px;
    font-size: 1.2rem;
    width: 100%;
  }
`;

// Desktop Table (7 columns) - shows on larger screens
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed; // Keep this

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box; // Add this

  &:first-child {
    width: 50%; // Equal columns for desktop
  }

  &:last-child {
    width: 50%; // Equal columns for desktop
  }
`;

export const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  box-sizing: border-box; // Add this

  &:first-child {
    width: 50%; // Match header
  }

  &:last-child {
    width: 50%; // Match header
  }
`;

// Mobile Tables Container
export const MobileTableContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

// Individual Case Section for Mobile
export const MobileCaseSection = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  color: black;
`;

export const CaseTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;
`;

// Mobile Table (2 columns) - for each case
export const MobileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  color: black;
  table-layout: fixed; // Add this for consistent column widths
`;

export const MobileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #e9ecef;
  font-weight: bold;
  text-align: left;
  color: black;
  box-sizing: border-box; // Include padding in width calculation

  &:first-child {
    width: 40%; // Explicit width for first column
  }

  &:last-child {
    width: 60%; // Explicit width for second column
  }
`;

export const MobileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  color: black;
  box-sizing: border-box; // Include padding in width calculation

  &:first-child {
    font-weight: 500;
    background-color: #f0f0f0;
    width: 40%; // Match header width
    color: black;
  }

  &:last-child {
    width: 60%; // Match header width
    color: black;
  }
`;
