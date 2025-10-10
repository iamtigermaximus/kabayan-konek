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
} from "./FamilyRelationships.styles";

const immediateFamily = [
  { english: "Parent, parents", finnish: "Vanhempi, vanhemmat", spoken: "‐" },
  { english: "Father, dad", finnish: "Isä", spoken: "Isi, iskä, pappa, faija" },
  {
    english: "Mother, mom",
    finnish: "Äiti",
    spoken: "Mutsi, äiskä, äitykkä, äitikki, äityli, mami",
  },
  { english: "Child, children", finnish: "Lapsi, lapset", spoken: "‐" },
  { english: "Brother, brothers", finnish: "Veli, veljet", spoken: "Broidi" },
  { english: "Sister", finnish: "Sisko, siskot", spoken: "Systeri" },
  { english: "Son, sons", finnish: "Poika, pojat", spoken: "‐" },
  { english: "Daughter, daughters", finnish: "Tytär, tyttäret", spoken: "‐" },
];

const extendedFamily = [
  {
    english: "Grandparent, grandparents",
    finnish: "Isovanhempi, isovanhemmat",
    spoken: "‐",
  },
  {
    english: "Grandfather",
    finnish: "Isoisä",
    spoken: "Vaari, ukko, ukki, pappa, äijä, fafa",
  },
  {
    english: "Grandmother",
    finnish: "Isoäiti",
    spoken: "Mummo, mummi, mummu, mumma, muori, ämmi, mufa",
  },
  { english: "Uncle", finnish: "Setä, eno", spoken: "‐" },
  { english: "Aunt", finnish: "Täti", spoken: "‐" },
  { english: "Cousin, cousins", finnish: "Serkku, serkut", spoken: "‐" },
  { english: "Nephew", finnish: "Veljenpoika", spoken: "‐" },
  { english: "Niece", finnish: "Veljentytär", spoken: "‐" },
];

const stepfamily = [
  { english: "Stepfather", finnish: "Isäpuoli" },
  { english: "Stepmother", finnish: "Äitipuoli" },
  { english: "Stepson", finnish: "Poikapuoli" },
  { english: "Stepdaughter", finnish: "Tytärpuoli" },
];

const inLaws = [
  { english: "Father-in-law", finnish: "Appiukko" },
  { english: "Mother-in-law", finnish: "Anoppi" },
  { english: "Son-in-law", finnish: "Vävy" },
  { english: "Daughter-in-law", finnish: "Miniä" },
  { english: "Brother-in-law", finnish: "Lanko" },
  { english: "Sister-in-law", finnish: "Käly" },
];

const socialRelationships = [
  { english: "Friend", finnish: "Ystävä" },
  { english: "Boyfriend, adult boyfriend", finnish: "Poikaystävä, miesystävä" },
  {
    english: "Girlfriend, adult girlfriend",
    finnish: "Tyttöystävä, naisystävä",
  },
  { english: "Sibling", finnish: "Sisarus" },
  { english: "Parent", finnish: "Vanhempi" },
  { english: "Grandparent", finnish: "Isovanhempi" },
  { english: "Godparent", finnish: "Kummi" },
];

const relationshipStatuses = [
  { english: "Single", finnish: "Sinkku" },
  { english: "Dating", finnish: "Tapailla" },
  { english: "Engaged", finnish: "Kihloissa" },
  { english: "Married", finnish: "Naimisissa" },
  { english: "Unmarried", finnish: "Naimaton" },
  { english: "Cohabitation, common-law", finnish: "Avoliitto" },
  { english: "Divorced", finnish: "Eronnut" },
  { english: "Widow", finnish: "Leski" },
];

const FamilyRelationships = () => {
  return (
    <Container>
      <Title>Family and Relationships </Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          Family and relationship terms in Finnish. Learn how to refer to
          different family members and relationships.
        </p>
      </div>

      {/* Immediate Family */}
      <SectionTitle>Immediate Family</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Spoken</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {immediateFamily.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.spoken}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Immediate Family</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Spoken</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {immediateFamily.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.spoken}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Extended Family */}
      <SectionTitle>Extended Family</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Spoken</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {extendedFamily.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.spoken}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Extended Family</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Spoken</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {extendedFamily.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.spoken}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Stepfamily */}
      <SectionTitle>Stepfamily</SectionTitle>
      <div>
        <p style={{ padding: "10px 0" }}>
          Step relations are easily indicated by adding <strong>-puoli</strong>{" "}
          to the end of the normal relationship term.
        </p>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {stepfamily.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Stepfamily</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {stepfamily.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* In-laws */}
      <SectionTitle>In-laws</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {inLaws.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>In-laws</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {inLaws.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Social Relationships */}
      <SectionTitle>Social Relationships</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {socialRelationships.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Social Relationships</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {socialRelationships.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Relationship Statuses */}
      <SectionTitle>Relationship Statuses</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {relationshipStatuses.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Relationship Statuses</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {relationshipStatuses.map((row, index) => (
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

export default FamilyRelationships;
