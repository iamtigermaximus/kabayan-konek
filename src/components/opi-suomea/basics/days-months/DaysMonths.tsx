"use client";

import React from "react";
import {
  CaseTitle,
  Container,
  DeskTopCaseTitle,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./DaysMonths.styles";

const daysData = [
  {
    english: "Monday, on Monday",
    finnish: "Maanantai, Maanantaina",
  },
  {
    english: "Tuesday, on Tuesday",
    finnish: "Tiistai, Tiistaina",
  },
  {
    english: "Wednesday, on Wednesday",
    finnish: "Keskiviikko, Keskiviikkona",
  },
  {
    english: "Thursday, on Thursday",
    finnish: "Torstai, Torstaina",
  },
  {
    english: "Friday, on Friday",
    finnish: "Perjantai, Perjantaina",
  },
  {
    english: "Saturday, on Saturday",
    finnish: "Lauantai, Lauantaina",
  },
  {
    english: "Sunday, on Sunday",
    finnish: "Sunnuntai, Sunnuntaina",
  },
];

const monthsData = [
  {
    english: "January, in January",
    finnish: "Tammikuu, Tammikuussa",
  },
  {
    english: "February, in February",
    finnish: "Helmikuu, Helmikuussa",
  },
  {
    english: "March, in March",
    finnish: "Maaliskuu, Maaliskuussa",
  },
  {
    english: "April, in April",
    finnish: "Huhtikuu, Huhtikuussa",
  },
  {
    english: "May, in May",
    finnish: "Toukokuu, Toukokuussa",
  },
  {
    english: "June, in June",
    finnish: "Kesäkuu, Kesäkuussa",
  },
  {
    english: "July, in July",
    finnish: "Heinäkuu, Heinäkuussa",
  },
  {
    english: "August, in August",
    finnish: "Elokuu, Elokuussa",
  },
  {
    english: "September, in September",
    finnish: "Syyskuu, Syyskuussa",
  },
  {
    english: "October, in October",
    finnish: "Lokakuu, Lokakuussa",
  },
  {
    english: "November, in November",
    finnish: "Marraskuu, Marraskuussa",
  },
  {
    english: "December, in December",
    finnish: "Joulukuu, Joulukuussa",
  },
];

const DaysMonths = () => {
  return (
    <Container>
      {/* Main title of the page */}
      <Title>Days and Months</Title>

      {/* Days Section - Desktop */}
      <DeskTopCaseTitle>Days of the Week</DeskTopCaseTitle>

      {/* Desktop Table for Days */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {daysData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Days */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Days of the Week</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {daysData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Months Section - Desktop */}
      <DeskTopCaseTitle>Months of the Year</DeskTopCaseTitle>

      {/* Desktop Table for Months */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {monthsData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Months */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Months of the Year</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {monthsData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>
    </Container>
  );
};

export default DaysMonths;
