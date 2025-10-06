import React from "react";
import {
  CaseTitle,
  Container,
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
} from "./PersonalPronouns.styles";

const tableData = [
  {
    case: "Nominative",
    i: "minä",
    you: "sinä",
    heShe: "hän",
    we: "me",
    youPlural: "te",
    they: "he",
  },
  {
    case: "Stem",
    i: "minu",
    you: "sinu",
    heShe: "häne",
    we: "mei",
    youPlural: "tei",
    they: "hei",
  },
  {
    case: "Partitive",
    i: "minua",
    you: "sinua",
    heShe: "häntä",
    we: "meitä",
    youPlural: "teitä",
    they: "heitä",
  },
  {
    case: "Genitive",
    i: "minun",
    you: "sinun",
    heShe: "hänen",
    we: "meidän",
    youPlural: "teidän",
    they: "heidän",
  },
  {
    case: "Accusative",
    i: "minut",
    you: "sinut",
    heShe: "hänet",
    we: "meidät",
    youPlural: "teidät",
    they: "heidät",
  },
  {
    case: "Illative",
    i: "minuun",
    you: "sinuun",
    heShe: "häneen",
    we: "meihin",
    youPlural: "teihin",
    they: "heihin",
  },
  {
    case: "Inessive",
    i: "minussa",
    you: "sinussa",
    heShe: "hänessä",
    we: "meissä",
    youPlural: "teissä",
    they: "heissä",
  },
  {
    case: "Elative",
    i: "minusta",
    you: "sinusta",
    heShe: "hänestä",
    we: "meistä",
    youPlural: "teistä",
    they: "heistä",
  },
  {
    case: "Allative",
    i: "minulle",
    you: "sinulle",
    heShe: "hänelle",
    we: "meille",
    youPlural: "teille",
    they: "heille",
  },
  {
    case: "Adessive",
    i: "minulla",
    you: "sinulla",
    heShe: "hänellä",
    we: "meillä",
    youPlural: "teillä",
    they: "heillä",
  },
  {
    case: "Ablative",
    i: "minulta",
    you: "sinulta",
    heShe: "häneltä",
    we: "meiltä",
    youPlural: "teiltä",
    they: "heiltä",
  },
];

const PersonalPronouns = () => {
  return (
    <Container>
      <Title>Personal Pronouns</Title>
      <div>
        <SubTitle>
          Personal pronouns are small words like I, you, he, she, we, and they.
          They are among the most common words in any language, and Finnish is
          no exception. In Finnish, pronouns work a little differently than in
          English. There is no difference between he and she, since the word hän
          can mean both. In everyday spoken Finnish, people often use se, which
          normally means “it,” to refer to people instead of hän.{" "}
        </SubTitle>
        <SubTitle>
          Another important difference is that Finnish pronouns change their
          form depending on their role in the sentence. For example, minä means
          “I,” minut means “me” as the object of a sentence, and minulle means
          “to me.” This may feel unusual at first, but the good news is that
          these changes follow regular patterns.
        </SubTitle>
        <SubTitle>
          Learning Finnish personal pronouns is not only about memorizing words
          but also about understanding how they behave in sentences. Once you
          get used to them, you will find it much easier to talk about yourself,
          the person you are speaking to, and other people or things in a
          natural way. This page will guide you through the basic pronouns, show
          you how they change in different cases, and explain the difference
          between formal written Finnish and everyday spoken Finnish.
        </SubTitle>
      </div>
      {/* Desktop Table (7 columns) - shows on larger screens */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Case</StyledTableHeader>
            <StyledTableHeader>I</StyledTableHeader>
            <StyledTableHeader>You</StyledTableHeader>
            <StyledTableHeader>He/She</StyledTableHeader>
            <StyledTableHeader>We</StyledTableHeader>
            <StyledTableHeader>You (pl.)</StyledTableHeader>
            <StyledTableHeader>They</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.case}</StyledTableCell>
              <StyledTableCell>{row.i}</StyledTableCell>
              <StyledTableCell>{row.you}</StyledTableCell>
              <StyledTableCell>{row.heShe}</StyledTableCell>
              <StyledTableCell>{row.we}</StyledTableCell>
              <StyledTableCell>{row.youPlural}</StyledTableCell>
              <StyledTableCell>{row.they}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Tables (2 columns) - Each case separated */}
      <MobileTableContainer>
        {tableData.map((row, index) => (
          <MobileCaseSection key={index}>
            <CaseTitle>{row.case} Case</CaseTitle>
            <MobileTable>
              <thead>
                <tr>
                  <MobileTableHeader>Pronoun</MobileTableHeader>
                  <MobileTableHeader>Finnish</MobileTableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <MobileTableCell>I</MobileTableCell>
                  <MobileTableCell>{row.i}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>You</MobileTableCell>
                  <MobileTableCell>{row.you}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>He/She</MobileTableCell>
                  <MobileTableCell>{row.heShe}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>We</MobileTableCell>
                  <MobileTableCell>{row.we}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>You (pl.)</MobileTableCell>
                  <MobileTableCell>{row.youPlural}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>They</MobileTableCell>
                  <MobileTableCell>{row.they}</MobileTableCell>
                </tr>
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>
    </Container>
  );
};

export default PersonalPronouns;
