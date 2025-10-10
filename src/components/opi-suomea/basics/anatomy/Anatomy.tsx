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
} from "./Anatomy.styles";

const headAnatomy = [
  { english: "Head", finnish: "Pää" },
  { english: "Skull", finnish: "Kallo" },
  { english: "Forehead", finnish: "Otsa" },
  { english: "Eye, eyes", finnish: "Silmä, silmät" },
  { english: "Eyelid, eyelids", finnish: "Silmäluomi, silmäluomet" },
  { english: "Eyelash, eyelashes", finnish: "Silmäripsi, silmäripset" },
  { english: "Eyebrow, eyebrows", finnish: "Kulmakarva, kulmakarvat" },
  { english: "Ear, ears", finnish: "Korva, korvat" },
  { english: "Nose", finnish: "Nenä" },
  { english: "Nostril, nostrils", finnish: "Sierain, sieraimet" },
  { english: "Cheek, cheeks", finnish: "Poski, posket" },
  { english: "Jaw", finnish: "Leuka" },
  { english: "Mouth", finnish: "Suu" },
  { english: "Lip, lips", finnish: "Huuli, huulet" },
  { english: "Tooth, teeth", finnish: "Hammas, hampaat" },
  { english: "Tongue", finnish: "Kieli" },
  { english: "Throat", finnish: "Kurkku" },
  { english: "Neck (front)", finnish: "Kaula" },
  { english: "Neck (back)", finnish: "Niska" },
];

const upperBodyAnatomy = [
  { english: "Clavicle", finnish: "Solisluu" },
  { english: "Chest", finnish: "Rinta" },
  { english: "Shoulder, shoulders", finnish: "Olka, olkapäät" },
  { english: "Arm, arms", finnish: "Käsivarsi, käsivarret" },
  { english: "Elbow, elbows", finnish: "Kyynärpää, kyynärpäät" },
  { english: "Hand, hands", finnish: "Käsi, kädet" },
  { english: "Palm, palms", finnish: "Kämmen, kämmenet" },
  { english: "Wrist, wrists", finnish: "Ranne, ranteet" },
  { english: "Finger, fingers", finnish: "Sormi, sormet" },
  { english: "Thumb, thumbs", finnish: "Peukalo, peukalot" },
  { english: "Stomach", finnish: "Vatsa, maha, masu" },
  { english: "Bellybutton", finnish: "Napa" },
  { english: "Rib, ribs", finnish: "Kylkiluu, kylkiluut" },
  { english: "Spine", finnish: "Selkäranka" },
];

const lowerBodyAnatomy = [
  { english: "Waist", finnish: "Vyötärö" },
  { english: "Hipbone, hipbones", finnish: "Lonkkaluu, lonkkaluut" },
  { english: "Pelvis", finnish: "Lantio" },
  { english: "Buttocks", finnish: "Takapuoli, pakarat, peppu" },
  { english: "Leg, legs", finnish: "Jalka, jalat" },
  { english: "Knee, knees", finnish: "Polvi, polvet" },
  { english: "Kneecap, kneecaps", finnish: "Polvilumpio, polvilumpiot" },
  { english: "Calf, calves", finnish: "Pohje, pohkeet" },
  { english: "Foot, feet", finnish: "Jalkaterä, jalkaterät" },
  { english: "Ankle, ankles", finnish: "Nilkka, nilkat" },
  { english: "Toe, toes", finnish: "Varvas, varpaat" },
];

const organAnatomy = [
  { english: "Brain", finnish: "Aivot" },
  { english: "Heart", finnish: "Sydän" },
  { english: "Intestine, intestines", finnish: "Suoli, suolet, suolisto" },
  { english: "Kidney, kidneys", finnish: "Munuainen, munuaiset" },
  { english: "Liver", finnish: "Maksa" },
  { english: "Lung, lungs", finnish: "Keuhko, keuhkot" },
  { english: "Pancreas", finnish: "Haima" },
  { english: "Stomach", finnish: "Mahalaukku" },
];

const Anatomy = () => {
  return (
    <Container>
      <Title>Finnish Anatomy Terms</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          Anatomical terms in Finnish for different parts of the body and
          organs.
        </p>
      </div>

      {/* Head Anatomy */}
      <SectionTitle>Anatomical Terms for the Head</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {headAnatomy.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Anatomical Terms for the Head</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {headAnatomy.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Upper Body Anatomy */}
      <SectionTitle>Anatomical Terms for the Upper Body</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {upperBodyAnatomy.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Anatomical Terms for the Upper Body</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {upperBodyAnatomy.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Lower Body Anatomy */}
      <SectionTitle>Anatomical Terms for the Lower Body</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {lowerBodyAnatomy.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Anatomical Terms for the Lower Body</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {lowerBodyAnatomy.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Organ Anatomy */}
      <SectionTitle>Anatomical Terms for Organs</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {organAnatomy.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Anatomical Terms for Organs</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {organAnatomy.map((row, index) => (
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

export default Anatomy;
