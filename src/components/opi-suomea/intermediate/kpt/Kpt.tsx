"use client";
import React from "react";
import {
  // CaseTitle,
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
} from "./Kpt.styles";

const consonantGradationData = [
  {
    strong: "KK",
    weak: "K",
    example: "Pakkaus",
    result: "Pakasta",
  },
  {
    strong: "PP",
    weak: "P",
    example: "Kauppa",
    result: "Kaupassa",
  },
  {
    strong: "TT",
    weak: "T",
    example: "Mittari",
    result: "Mitalla",
  },
  {
    strong: "K",
    weak: "-",
    example: "Joki",
    result: "Joessa",
  },
  {
    strong: "P",
    weak: "V",
    example: "Lepinkäinen",
    result: "Levingästä",
  },
  {
    strong: "T",
    weak: "D",
    example: "Koti",
    result: "Kodissa",
  },
  {
    strong: "NK",
    weak: "NG",
    example: "Kenkä",
    result: "Kengän",
  },
  {
    strong: "NT",
    weak: "NN",
    example: "Lentokone",
    result: "Lennon",
  },
  {
    strong: "MP",
    weak: "MM",
    example: "Kampi",
    result: "Kammion",
  },
  {
    strong: "LT",
    weak: "LL",
    example: "Kulta",
    result: "Kullan",
  },
  {
    strong: "RT",
    weak: "RR",
    example: "Parta",
    result: "Parran",
  },
  {
    strong: "HT",
    weak: "HD",
    example: "Lahti",
    result: "Lahden",
  },
  {
    strong: "LKI",
    weak: "LJE",
    example: "Jälki",
    result: "Jäljen",
  },
  {
    strong: "RKI",
    weak: "RJE",
    example: "Järki",
    result: "Järjen",
  },
  {
    strong: "LJE",
    weak: "LKE",
    example: "Hylje",
    result: "Hylkeen",
  },
  {
    strong: "HJE",
    weak: "HKE",
    example: "Lahje",
    result: "Lahkeen",
  },
  {
    strong: "UKU",
    weak: "UVU",
    example: "Luku",
    result: "Luvun",
  },
  {
    strong: "YKY",
    weak: "YVY",
    example: "Kyky",
    result: "Kyvyn",
  },
];

const exceptionData = [
  {
    word: "Kioski",
    inflected: "Kioskin",
    explanation: "No gradation with -sk cluster",
  },
  {
    word: "Kasvi",
    inflected: "Kasvin",
    explanation: "No gradation with -sv cluster",
  },
  {
    word: "Neste",
    inflected: "Nesteen",
    explanation: "No gradation with -st cluster",
  },
  {
    word: "Matka",
    inflected: "Matkan",
    explanation: "No gradation with -tk cluster",
  },
];

const Kpt = () => {
  return (
    <Container>
      <Title>KPT Consonant Gradation</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          In Finnish, words often change their spelling slightly when you add
          endings to them. This is called <strong>consonant gradation</strong>,
          and it mostly affects the letters K, P, and T.
        </p>
        <p style={{ padding: "10px 0" }}>
          Think of it like the words are putting on different outfits for
          different occasions! The &quot;strong&quot; form is for everyday use,
          and the &quot;weak&quot; form is for when we add endings.
        </p>
      </div>

      <SectionTitle>How Letters Change</SectionTitle>

      {/* Desktop Table for Consonant Gradation */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Strong Form</StyledTableHeader>
            <StyledTableHeader>Weak Form</StyledTableHeader>
            <StyledTableHeader>Example Word</StyledTableHeader>
            <StyledTableHeader>With Ending</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {consonantGradationData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.strong}</StyledTableCell>
              <StyledTableCell>{row.weak}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
              <StyledTableCell>{row.result}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Consonant Gradation */}
      <MobileTableContainer>
        {consonantGradationData.map((row, index) => (
          <MobileCaseSection key={index}>
            <MobileTable>
              <thead>
                <tr>
                  <MobileTableHeader>
                    {row.strong} → {row.weak}
                  </MobileTableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <MobileTableCell>Word</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>With Ending</MobileTableCell>
                  <MobileTableCell>{row.result}</MobileTableCell>
                </tr>
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>

      <SectionTitle>Special Cases That Don&apos;t Change</SectionTitle>
      <p style={{ padding: "10px 0" }}>
        Some words are special and don&apos;t change their letters, even when
        you add endings. These usually have -sk, -sp, -st, or -tk in them.
      </p>

      {/* Desktop Table for Exceptions */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Word</StyledTableHeader>
            <StyledTableHeader>With Ending</StyledTableHeader>
            <StyledTableHeader>Reason</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {exceptionData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.word}</StyledTableCell>
              <StyledTableCell>{row.inflected}</StyledTableCell>
              <StyledTableCell>{row.explanation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Exceptions */}
      <MobileTableContainer>
        {exceptionData.map((row, index) => (
          <MobileCaseSection key={index}>
            <MobileTable>
              <thead>
                <tr>
                  <MobileTableHeader>Exception: {row.word}</MobileTableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <MobileTableCell>With Ending</MobileTableCell>
                  <MobileTableCell>{row.inflected}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>Reason</MobileTableCell>
                  <MobileTableCell>{row.explanation}</MobileTableCell>
                </tr>
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
        }}
      >
        <h3>Remember This!</h3>
        <p>
          Consonant gradation might seem tricky at first, but with practice,
          you&apos;ll start to notice the patterns. Try to listen for these
          changes when you hear Finnish people speak!
        </p>
      </div>
    </Container>
  );
};

export default Kpt;
