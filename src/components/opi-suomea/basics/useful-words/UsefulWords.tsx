"use client";
import React from "react";
import {
  CaseTitle,
  Container,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  // MobileTableHeader,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./UsefulWords.styles";

const usefulWordsData = [
  {
    finnish: "Aina",
    english: "Always",
    example: "Miksi olet aina myöhässä? (Why are you always late?)",
  },
  {
    finnish: "Että",
    english: "That",
    example:
      "Uskon, että Suomi on mahtava maa. (I believe that Finland is a great country.)",
  },
  {
    finnish: "Harvoin",
    english: "Rarely",
    example:
      "Käyn kaupungilla todella harvoin. (I go to the city very rarely.)",
  },
  {
    finnish: "Ja",
    english: "And",
    example: "Minulla on kissa ja koira. (I have a cat and a dog.)",
  },
  {
    finnish: "Ja Sitten",
    english: "And then",
    example:
      "Syön aamiaisen ja sitten luen sanomalehden. (I eat breakfast and then read the newspaper.)",
  },
  {
    finnish: "Joskus",
    english: "Sometimes",
    example:
      "Käymme ulkona syömässä joskus viikonloppuna. (We sometimes eat out on weekends.)",
  },
  {
    finnish: "Kanssa(+gen.)",
    english: "With",
    example:
      "Nainen kävelee ystävänsä kanssa. (The woman is walking with her friend.)",
  },
  {
    finnish: "Koska",
    english: "Because",
    example:
      "En mene kouluun koska olen kipeä. (I'm not going to school because I'm sick.)",
  },
  {
    finnish: "Kun",
    english: "When",
    example:
      "Kun heräsin, aurinko paistoi. (When I woke up, the sun was shining.)",
  },
  {
    finnish: "Kuin",
    english: "Than / Aa / Like",
    example: "Hän on nopeampi kuin minä. (He is faster than me.)",
  },
  {
    finnish: "Melko",
    english: "Quite",
    example:
      "Tämä kirja on melko mielenkiintoinen. (This book is quite interesting.)",
  },
  {
    finnish: "Mutta",
    english: "But",
    example:
      "Puhun suomea mutta en ruotsia. (I speak Finnish but not Swedish.)",
  },
  {
    finnish: "Siksi",
    english: "Therefore",
    example:
      "Sää on huono, siksi jäämme kotiin. (The weather is bad, therefore we're staying home.)",
  },
  {
    finnish: "Siksi, Että",
    english: "Because",
    example:
      "Jäämme kotiin siksi, että sää on huono. (We're staying home because the weather is bad.)",
  },
  {
    finnish: "Tosi",
    english: "Very",
    example:
      "Helsinki on tosi kaunis kaupunki kesällä. (Helsinki is a very beautiful city in summer.)",
  },
  {
    finnish: "Usein",
    english: "Often",
    example: "Käymme uimassa usein kesällä. (We often go swimming in summer.)",
  },
  {
    finnish: "Vaan",
    english: "But / Rather",
    example:
      "En ole ruotsalainen vaan suomalainen. (I'm not Swedish but Finnish.)",
  },
  {
    finnish: "Vaikka",
    english: "Even though",
    example:
      "Hän tuli juhliin vaikka oli väsynyt. (He came to the party even though he was tired.)",
  },
  {
    finnish: "Vain",
    english: "Only",
    example: "Minulla on vain yksi sisko. (I have only one sister.)",
  },
  {
    finnish: "Vähän",
    english: "A little / Some",
    example:
      "Otan vähän sokeria kahviini. (I take a little sugar in my coffee.)",
  },
  {
    finnish: "Yleensä",
    english: "Usually",
    example:
      "Herään yleensä kello 7 aamulla. (I usually wake up at 7 in the morning.)",
  },
];

const UsefulWords = () => {
  return (
    <Container>
      <Title>Useful Words - Hyödylliset sanat</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          When learning a new language, people often master basic verbs, nouns,
          and pronouns but struggle with small conjunctions and adverbs like
          &quot;but&quot; or &quot;sometimes&quot;. These connecting words are
          essential for forming complete sentences. The best way to learn them
          is through reading and repetition. Try creating your own sentences
          with each word!
        </p>
      </div>

      {/* Desktop Table */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {usefulWordsData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table */}
      <MobileTableContainer>
        {usefulWordsData.map((row, index) => (
          <MobileCaseSection key={index}>
            <CaseTitle>
              {row.finnish} - {row.english}
            </CaseTitle>
            <MobileTable>
              <thead></thead>
              <tbody>
                <tr>
                  {/* <MobileTableCell>Example</MobileTableCell> */}
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>
    </Container>
  );
};

export default UsefulWords;
