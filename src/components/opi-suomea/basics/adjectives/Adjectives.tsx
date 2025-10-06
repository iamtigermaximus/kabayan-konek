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
} from "./Adjectives.styles";

const basicAdjectives1 = [
  { finnish: "Iso / Suuri", english: "Big" },
  { finnish: "Pieni", english: "Small" },
  { finnish: "Pitkä", english: "Long / Tall" },
  { finnish: "Lyhyt", english: "Short" },
  { finnish: "Leveä", english: "Wide" },
  { finnish: "Kapea", english: "Narrow" },
  { finnish: "Paksu", english: "Thick" },
  { finnish: "Ohut", english: "Thin" },
  { finnish: "Hyvä", english: "Good" },
  { finnish: "Huono", english: "Bad" },
  { finnish: "Hyvä", english: "Good" },
  { finnish: "Paha", english: "Evil" },
  { finnish: "Nopea", english: "Fast" },
  { finnish: "Hidas", english: "Slow" },
  { finnish: "Lihava", english: "Fat" },
  { finnish: "Laiha", english: "Skinny" },
];

const basicAdjectives2 = [
  { finnish: "Kova", english: "Hard" },
  { finnish: "Pehmeä", english: "Soft" },
  { finnish: "Kuiva", english: "Dry" },
  { finnish: "Märkä", english: "Wet" },
  { finnish: "Terävä", english: "Sharp" },
  { finnish: "Tylsä", english: "Blunt" },
  { finnish: "Hauska", english: "Fun" },
  { finnish: "Tylsä", english: "Boring" },
  { finnish: "Uusi", english: "New" },
  { finnish: "Vanha", english: "Old" },
  { finnish: "Nuori", english: "Young" },
  { finnish: "Vanha", english: "Old" },
  { finnish: "Täysi", english: "Full" },
  { finnish: "Tyhjä", english: "Empty" },
  { finnish: "Painava", english: "Heavy" },
  { finnish: "Kevyt", english: "Light" },
];

const basicAdjectives3 = [
  { finnish: "Kallis", english: "Expensive" },
  { finnish: "Halpa", english: "Cheap" },
  { finnish: "Rikas", english: "Rich" },
  { finnish: "Köyhä", english: "Poor" },
  { finnish: "Kaunis", english: "Beautiful" },
  { finnish: "Ruma", english: "Ugly" },
  { finnish: "Vaikea", english: "Difficult" },
  { finnish: "Helppo", english: "Easy" },
  { finnish: "Korkea", english: "High" },
  { finnish: "Matala", english: "Low" },
  { finnish: "Valoisa", english: "Light" },
  { finnish: "Pimeä", english: "Dark" },
  { finnish: "Kuuma", english: "Hot" },
  { finnish: "Kylmä", english: "Cold" },
  { finnish: "Lämmin", english: "Warm" },
  { finnish: "Viileä", english: "Cool" },
];

const personalityAdjectives1 = [
  { finnish: "Ystävällinen", english: "Friendly" },
  { finnish: "Rehellinen", english: "Honest" },
  { finnish: "Mukava", english: "Nice" },
  { finnish: "Luotettava", english: "Trustworthy / Reliable" },
  { finnish: "Kiltti", english: "Kind" },
  { finnish: "Fiksu", english: "Smart" },
  { finnish: "Älykäs", english: "Intelligent" },
  { finnish: "Antelias", english: "Generous" },
  { finnish: "Avulias", english: "Helpful" },
];

const personalityAdjectives2 = [
  { finnish: "Puhelias", english: "Talkative" },
  { finnish: "Sosiaalinen", english: "Social" },
  { finnish: "Ujo", english: "Shy" },
  { finnish: "Rohkea", english: "Brave" },
  { finnish: "Huolehtiva", english: "Caring" },
  { finnish: "Ahkera", english: "Hard working" },
  { finnish: "Laiska", english: "Lazy" },
  { finnish: "Täsmällinen", english: "Precise / Punctual" },
  { finnish: "Aktiivinen", english: "Active" },
];

const colorAdjectives1 = [
  { finnish: "Musta", english: "Black" },
  { finnish: "Valkoinen", english: "White" },
  { finnish: "Harmaa", english: "Grey" },
  { finnish: "Ruskea", english: "Brown" },
  { finnish: "Punainen", english: "Red" },
  { finnish: "Sininen", english: "Blue" },
];

const colorAdjectives2 = [
  { finnish: "Keltainen", english: "Yellow" },
  { finnish: "Vihreä", english: "Green" },
  { finnish: "Oranssi", english: "Orange" },
  { finnish: "Violetti", english: "Purple" },
  { finnish: "Liila", english: "Lilac" },
  { finnish: "Vaaleanpunainen", english: "Pink" },
];

const Adjectives = () => {
  return (
    <Container>
      <Title>Finnish Adjectives</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          An adjective is a word that describes a noun. Here are some basic
          useful adjectives in Finnish.
        </p>
      </div>

      {/* Basic Adjectives Part 1 */}
      <SectionTitle>Basic Adjectives (Part 1) </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {basicAdjectives1.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Basic Adjectives (Part 1)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {basicAdjectives1.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Basic Adjectives Part 2 */}
      <SectionTitle>Basic Adjectives (Part 2) </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {basicAdjectives2.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Basic Adjectives (Part 2) </CaseTitle>

          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {basicAdjectives2.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Basic Adjectives Part 3 */}
      <SectionTitle>Basic Adjectives (Part 3) </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {basicAdjectives3.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Basic Adjectives (Part 3) </CaseTitle>

          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {basicAdjectives3.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Personality Adjectives Part 1 */}
      <SectionTitle>Personality Adjectives</SectionTitle>
      <div>
        <p style={{ padding: "10px 0" }}>
          Useful adjectives for describing what kind of person someone is.
        </p>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {personalityAdjectives1.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle> Personality Adjectives (Part 1)</CaseTitle>

          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {personalityAdjectives1.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Personality Adjectives Part 2 */}
      <SectionTitle>Personality Adjectives</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {personalityAdjectives2.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle> Personality Adjectives (Part 2)</CaseTitle>

          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {personalityAdjectives2.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Color Adjectives Part 1 */}
      <SectionTitle>Color Adjectives </SectionTitle>
      <div>
        <p style={{ padding: "10px 0" }}>
          Colors are also adjectives. Here are the most basic colors.
        </p>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {colorAdjectives1.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle> Color Adjectives (Part 1)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {colorAdjectives1.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Color Adjectives Part 2 */}
      <SectionTitle>Color Adjectives</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {colorAdjectives2.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle> Color Adjectives (Part 2)</CaseTitle>

          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {colorAdjectives2.map((row, index) => (
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

export default Adjectives;
