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
  SubTitle,
  Title,
} from "./Directions.styles";

const directionsData = [
  {
    english: "Ahead, forward",
    finnish: "Edessä, eteenpäin",
  },
  {
    english: "Behind, backward",
    finnish: "Takana, taaksepäin",
  },
  {
    english: "Left",
    finnish: "Vasen",
  },
  {
    english: "To the left, turn left",
    finnish: "Tasemmalle, käänny vasemmalle",
  },
  {
    english: "Right",
    finnish: "Oikea",
  },
  {
    english: "To the right, turn right",
    finnish: "Oikealle, käänny oikealle",
  },
  {
    english: "North",
    finnish: "Pohjoinen",
  },
  {
    english: "East",
    finnish: "Itä",
  },
  {
    english: "South",
    finnish: "Etelä",
  },
  {
    english: "West",
    finnish: "Länsi",
  },
  {
    english: "North-east",
    finnish: "Koillinen",
  },
  {
    english: "North-west",
    finnish: "Luode",
  },
  {
    english: "South-east",
    finnish: "Kaakko",
  },
  {
    english: "South-west",
    finnish: "Lounas",
  },
];

const navigationData = [
  {
    english: "Which way",
    finnish: "Mikä suuntaan",
  },
  {
    english: "Where is",
    finnish: "Missä on",
  },
  {
    english: "Over there (nearby, pointable)",
    finnish: "Tuolla",
  },
  {
    english: "Over there (far away, out of sight)",
    finnish: "Siellä",
  },
  {
    english: "Can you show me on the map?",
    finnish: "Voitko näyttää minulle kartalla?",
  },
  {
    english: "Welcome",
    finnish: "Tervetuloa",
  },
  {
    english: "Entrance",
    finnish: "Sisään",
  },
  {
    english: "Exit",
    finnish: "Ulos",
  },
  {
    english: "Emergency exit",
    finnish: "Varauloskäynti",
  },
  {
    english: "Push",
    finnish: "Työnnä",
  },
  {
    english: "Pull",
    finnish: "Vedä",
  },
  {
    english: "Bathroom",
    finnish: "Vessa, WC",
  },
  {
    english: "Reserved",
    finnish: "Varattu",
  },
  {
    english: "Escalator",
    finnish: "Rullaportaat",
  },
  {
    english: "Elevator",
    finnish: "Hissi",
  },
  {
    english: "Queue number",
    finnish: "Vuoronumero",
  },
];

const Directions = () => {
  return (
    <Container>
      <Title>Directions and Navigation</Title>
      {/* <div>
        <p style={{ padding: "10px 0" }}>
          Directional and navigational terms in Finnish with their English equivalents.
        </p>
      </div> */}

      <DeskTopCaseTitle>Directions</DeskTopCaseTitle>
      <div>
        <SubTitle>
          Directional terms in Finnish with their English equivalents.
        </SubTitle>
      </div>

      {/* Desktop Table for Directions */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {directionsData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Directions */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Directions</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {directionsData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>Navigation</DeskTopCaseTitle>
      <div>
        <SubTitle>
          Navigation terms in Finnish with their English equivalents.
        </SubTitle>
      </div>

      {/* Desktop Table for Navigation */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {navigationData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Navigation */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Navigation</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {navigationData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>
    </Container>
  );
};

export default Directions;
