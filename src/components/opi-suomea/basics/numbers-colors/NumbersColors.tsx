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
} from "./NumbersColors.styles";

// Numbers data
const numbersData = [
  {
    english: "0, zero",
    finnish: "Nolla",
    alternatives: "",
  },
  {
    english: "1, one",
    finnish: "Yksi",
    alternatives: "yks",
  },
  {
    english: "2, two",
    finnish: "Kaksi",
    alternatives: "kaks",
  },
  {
    english: "3, three",
    finnish: "Kolme",
    alternatives: "kol",
  },
  {
    english: "4, four",
    finnish: "Neljä",
    alternatives: "nel",
  },
  {
    english: "5, five",
    finnish: "Viisi",
    alternatives: "viis",
  },
  {
    english: "6, six",
    finnish: "Kuusi",
    alternatives: "kuus",
  },
  {
    english: "7, seven",
    finnish: "Seitsemän",
    alternatives: "seittemän",
  },
  {
    english: "8, eight",
    finnish: "Kahdeksan",
    alternatives: "kaheksan",
  },
  {
    english: "9, nine",
    finnish: "Yhdeksän",
    alternatives: "yheksän",
  },
  {
    english: "10, ten",
    finnish: "Kymmenen",
    alternatives: "kymppi, kybä",
  },
  {
    english: "11, eleven",
    finnish: "Yksitoista",
    alternatives: "yytoo",
  },
  {
    english: "12, twelve",
    finnish: "Kaksitoista",
    alternatives: "kaatoo",
  },
  {
    english: "13, thirteen",
    finnish: "Kolmetoista",
    alternatives: "kootoo",
  },
  {
    english: "14, fourteen",
    finnish: "Neljätoista",
    alternatives: "neetoo",
  },
  {
    english: "15, fifteen",
    finnish: "Viisitoista",
    alternatives: "viitoo",
  },
  {
    english: "16, sixteen",
    finnish: "Kuusitoista",
    alternatives: "kuutoo",
  },
  {
    english: "17, seventeen",
    finnish: "Seitsemäntoista",
    alternatives: "seetoo",
  },
  {
    english: "18, eighteen",
    finnish: "Kahdeksantoista",
    alternatives: "kasitoo",
  },
  {
    english: "19, nineteen",
    finnish: "Yhdeksäntoista",
    alternatives: "ysitoo",
  },
  {
    english: "20, twenty",
    finnish: "Kaksikymmentä",
    alternatives: "kakskyt",
  },
  {
    english: "100, one hundred",
    finnish: "Sata",
    alternatives: "",
  },
  {
    english: "200, two hundred",
    finnish: "Kaksisataa",
    alternatives: "kakssataa",
  },
  {
    english: "1000, one thousand",
    finnish: "Tuhat",
    alternatives: "",
  },
  {
    english: "2000, two thousand",
    finnish: "Kaksituhatta",
    alternatives: "kakstuhatta",
  },
  {
    english: "10,000, ten thousand",
    finnish: "Kymmenentuhatta",
    alternatives: "",
  },
  {
    english: "20,000, twenty thousand",
    finnish: "Kaksikymmentätuhatta",
    alternatives: "",
  },
  {
    english: "100,000, one hundred thousand",
    finnish: "Satatuhatta",
    alternatives: "",
  },
  {
    english: "200,000, two hundred thousand",
    finnish: "Kaksisataatuhatta",
    alternatives: "",
  },
  {
    english: "1,000,000, one million",
    finnish: "Miljoona",
    alternatives: "",
  },
  {
    english: "2,000,000, two million",
    finnish: "Kaksimiljoonaa",
    alternatives: "",
  },
  {
    english: "1,000,000,000, one billion",
    finnish: "Miljardi",
    alternatives: "",
  },
  {
    english: "2,000,000,000, two billion",
    finnish: "Kaksimiljardi",
    alternatives: "",
  },
];

// Colors data
const colorsData = [
  // Basic Colors
  {
    category: "Basic Colors",
    english: "Black",
    finnish: "Musta",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Blue",
    finnish: "Sininen",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Brown",
    finnish: "Ruskea",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Grey",
    finnish: "Harmaa",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Green",
    finnish: "Vihreä",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Orange",
    finnish: "Oranssi",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Pink",
    finnish: "Pinkki",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Purple",
    finnish: "Violetti",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Red",
    finnish: "Punainen",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "White",
    finnish: "Valkoinen",
    alternatives: "",
  },
  {
    category: "Basic Colors",
    english: "Yellow",
    finnish: "Keltainen",
    alternatives: "",
  },
  // Light Colors
  {
    category: "Light Colors",
    english: "Light blue",
    finnish: "Vaaleansininen",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light brown",
    finnish: "Vaaleanruskea",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light grey",
    finnish: "Vaaleanharmaa",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light green",
    finnish: "Vaaleanvihreä",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light orange",
    finnish: "Vaaleanoranssi",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light pink",
    finnish: "Vaaleanpunainen",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light purple",
    finnish: "Vaaleanvioletti",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light red",
    finnish: "Vaaleanpunainen",
    alternatives: "",
  },
  {
    category: "Light Colors",
    english: "Light yellow",
    finnish: "Vaaleankeltainen",
    alternatives: "",
  },
  // Dark Colors
  {
    category: "Dark Colors",
    english: "Dark blue",
    finnish: "Tummansininen",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark brown",
    finnish: "Tummanruskea",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark grey",
    finnish: "Tummanharmaa",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark green",
    finnish: "Tummanvihreä",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark orange",
    finnish: "Tummanoranssi",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark pink",
    finnish: "Tummanpunainen",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark purple",
    finnish: "Tummanvioletti",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark red",
    finnish: "Tummanpunainen",
    alternatives: "",
  },
  {
    category: "Dark Colors",
    english: "Dark yellow",
    finnish: "Tummankeltainen",
    alternatives: "",
  },
  // Ish Colors
  {
    category: "Ish Colors",
    english: "Blackish",
    finnish: "Mustahko",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Bluish",
    finnish: "Sinertävä",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Brownish",
    finnish: "Ruskehtava",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Greyish",
    finnish: "Harmahtava",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Greenish",
    finnish: "Vihertävä",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Reddish",
    finnish: "Punertava",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Whitish",
    finnish: "Valkeahko",
    alternatives: "",
  },
  {
    category: "Ish Colors",
    english: "Yellowish",
    finnish: "Kellertävä",
    alternatives: "",
  },
];

const NumberColors = () => {
  return (
    <Container>
      <Title>Numbers - Numerot</Title>
      <div>
        <SubTitle>Finnish numbers with their English equivalents</SubTitle>
      </div>

      {/* Desktop Table for Numbers */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {numbersData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Numbers - Single table for all numbers */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Numbers - Numerot</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {numbersData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <Title>Colors - Värit</Title>
      <div>
        <SubTitle>Finnish color names with their English equivalents.</SubTitle>
      </div>

      {/* Group colors by category for desktop */}
      {["Basic Colors", "Light Colors", "Dark Colors", "Ish Colors"].map(
        (category) => {
          const categoryColors = colorsData.filter(
            (color) => color.category === category
          );

          return (
            <div key={category}>
              <DeskTopCaseTitle>{category}</DeskTopCaseTitle>
              {/* Desktop Table for Colors */}
              <StyledTable>
                <thead>
                  <tr>
                    <StyledTableHeader>Finnish</StyledTableHeader>

                    <StyledTableHeader>English</StyledTableHeader>
                  </tr>
                </thead>
                <tbody>
                  {categoryColors.map((row, index) => (
                    <tr key={index}>
                      <StyledTableCell>{row.finnish}</StyledTableCell>

                      <StyledTableCell>{row.english}</StyledTableCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>

              {/* Mobile Table for Colors */}
              <MobileTableContainer>
                <MobileCaseSection>
                  <CaseTitle>{category}</CaseTitle>
                  <MobileTable>
                    <thead>
                      <tr>
                        <MobileTableHeader>Finnish</MobileTableHeader>
                        <MobileTableHeader>English</MobileTableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryColors.map((row, index) => (
                        <tr key={index}>
                          <MobileTableCell>{row.finnish}</MobileTableCell>
                          <MobileTableCell>{row.english}</MobileTableCell>
                        </tr>
                      ))}
                    </tbody>
                  </MobileTable>
                </MobileCaseSection>
              </MobileTableContainer>
            </div>
          );
        }
      )}
    </Container>
  );
};

export default NumberColors;
