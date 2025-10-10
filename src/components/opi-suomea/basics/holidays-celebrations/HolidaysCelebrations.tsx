"use client";
import React from "react";
import {
  CaseTitle,
  Container,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  SectionTitle,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./HolidaysCelebrations.styles";

const finnishHolidays = [
  { finnish: "Uudenvuodenpäivä", english: "New Years Day, January 1" },
  { finnish: "Loppiainen", english: "Epiphany, January 6" },
  { finnish: "Pitkäperjantai", english: "Good Friday" },
  { finnish: "Pääsiäispäivä", english: "Easter Sunday" },
  { finnish: "Toinen pääsiäispäivä", english: "Easter Monday" },
  { finnish: "Vappu", english: "May Day, May 1" },
  { finnish: "Helatorstai", english: "Ascension Day" },
  { finnish: "Helluntaipäivä", english: "Pentecost Sunday" },
  {
    finnish: "Juhannusaatto",
    english: "Midsummer Eve, Friday between June 19 and 25",
  },
  {
    finnish: "Juhannuspäivä",
    english: "Midsummer Day, Saturday between June 20 and 26",
  },
  {
    finnish: "Pyhäinpäivä",
    english: "All Saints' Day, Saturday between October 31 and November 6",
  },
  { finnish: "Itsenäisyyspäivä", english: "Independence Day, December 6" },
  { finnish: "Jouluaatto", english: "Christmas Eve, December 24" },
  { finnish: "Joulupäivä", english: "Christmas Day, December 25" },
  {
    finnish: "Toinen joulupäivä, tapaninpäivä",
    english: "St Stephen's Day, December 26",
  },
];

const HolidaysCelebrations = () => {
  return (
    <Container>
      <Title>Finnish Holidays and Celebrations</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          Official holidays and celebrations in Finland throughout the year.
        </p>
      </div>

      {/* Finnish Holidays */}
      <SectionTitle>Holidays in Finland</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {finnishHolidays.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Holidays in Finland</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {finnishHolidays.map((row, index) => (
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

export default HolidaysCelebrations;
