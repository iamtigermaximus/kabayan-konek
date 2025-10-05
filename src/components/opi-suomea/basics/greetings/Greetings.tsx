"use client";
import React from "react";
import {
  Container,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./Greeting.styles";

const tableData = [
  {
    english: "Hi!",
    finnish: "Moi!",
  },
  {
    english: "Hi!",
    finnish: "Hei!",
  },
  {
    english: "Hello!",
    finnish: "Terve!",
  },
  {
    english: "Good day!",
    finnish: "Päivää!",
  },
  {
    english: "Good day!",
    finnish: "Hyvää päivää!",
  },
  {
    english: "Good morning!",
    finnish: "Huomenta!",
  },
  {
    english: "Good evening!",
    finnish: "Hyvää iltaa!",
  },
  {
    english: "Good night!",
    finnish: "Hyvää yötä!",
  },
  {
    english: "Bye!",
    finnish: "Moi moi!/Hei hei!",
  },
  {
    english: "Goodbye!",
    finnish: "Näkemiin!",
  },
  {
    english: "See you!",
    finnish: "Nähdään!",
  },
  {
    english: "See you later!",
    finnish: "Nähdään myöhemmin!",
  },
  {
    english: "See you soon!",
    finnish: "Nähdään pian!",
  },
  {
    english: "See you tomorrow!",
    finnish: "Nähdään huomenna!",
  },
  {
    english: "Welcome",
    finnish: "Tervetuloa",
  },
  {
    english: "Thank you",
    finnish: "Kiitos",
  },
  {
    english: "You're welcome/There you go",
    finnish: "Ole hyvä",
  },
  {
    english: "No problem",
    finnish: "Ei se mitään",
  },
  {
    english: "How are you?",
    finnish: "Mitä kuuluu?",
  },
  {
    english: "Fine thanks",
    finnish: "Hyvää kiitos",
  },
  {
    english: "How's it going?",
    finnish: "Miten menee?",
  },
  {
    english: "Fine / going well",
    finnish: "Hyvin/hyvin menee",
  },
  {
    english: "Nice to meet you",
    finnish: "Hauska tutustua",
  },
  {
    english: "Nice to meet you",
    finnish: "Hauska tavata",
  },
  {
    english: "Thanks, the same",
    finnish: "Kiitos samoin",
  },
  {
    english: "Happy Birthday!",
    finnish: "Hyvää syntymäpäivää!",
  },
  {
    english: "Happy Christmas",
    finnish: "Hyvää Joulua!",
  },
  {
    english: "Congratulations / good luck",
    finnish: "Onnea!",
  },
  {
    english: "Congratulations",
    finnish: "Onneksi olkoon!",
  },
  {
    english: "Lot's of luck / many congratulations",
    finnish: "Paljon onnea!",
  },
];

const Greetings = () => {
  return (
    <Container>
      <Title>Greetings -Tervehdykset</Title>

      {/* Desktop Table (7 columns) - shows on larger screens */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Tables (2 columns) - Each case separated */}
      <MobileTableContainer>
        <MobileTable>
          <thead>
            <tr>
              <MobileTableHeader>Finnish</MobileTableHeader>
              <MobileTableHeader>English</MobileTableHeader>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <MobileTableCell>{row.finnish}</MobileTableCell>
                <MobileTableCell>{row.english}</MobileTableCell>
              </tr>
            ))}
          </tbody>
        </MobileTable>
      </MobileTableContainer>
    </Container>
  );
};

export default Greetings;
