"use client";
import React from "react";
import {
  // CaseTitle,
  Container,
  // MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./BasicVerbs.styles";

const basicVerbsData = [
  {
    finnish: "olla",
    english: "to be",
    example: "Minä olen opettaja. (I am a teacher.)",
  },
  {
    finnish: "tulla",
    english: "to become/to come",
    example: "Hän tulee lääkäriksi. (He becomes a doctor.)",
  },
  {
    finnish: "mennä",
    english: "to go",
    example: "Me menemme kauppaan. (We go to the store.)",
  },
  {
    finnish: "tehdä",
    english: "to do/make",
    example: "Sinä teet kotiläksyt. (You do homework.)",
  },
  {
    finnish: "sanoa",
    english: "to say",
    example: 'Hän sanoo "kiitos". (He says "thank you".)',
  },
  {
    finnish: "nähdä",
    english: "to see",
    example: "Näen ystäväni. (I see my friend.)",
  },
  {
    finnish: "antaa",
    english: "to give",
    example: "Äiti antaa lahjan. (Mother gives a gift.)",
  },
  {
    finnish: "ottaa",
    english: "to take",
    example: "Otan lääkkeen. (I take medicine.)",
  },
  {
    finnish: "käydä",
    english: "to visit/go (to places)",
    example: "Käyn Suomessa kesällä. (I visit Finland in summer.)",
  },
  {
    finnish: "tietää",
    english: "to know",
    example: "Tiedätkö vastauksen? (Do you know the answer?)",
  },
  {
    finnish: "ajatella",
    english: "to think",
    example: "Ajattelen sinua. (I think about you.)",
  },
  {
    finnish: "kysyä",
    english: "to ask",
    example: "Kysyn opettajalta. (I ask the teacher.)",
  },
  {
    finnish: "ymmärtää",
    english: "to understand",
    example: "Ymmärrän suomea. (I understand Finnish.)",
  },
  {
    finnish: "puhua",
    english: "to speak",
    example: "Puhun englantia. (I speak English.)",
  },
  {
    finnish: "katsoa",
    english: "to watch/look",
    example: "Katson televisiota. (I watch television.)",
  },
  {
    finnish: "rakastaa",
    english: "to love",
    example: "Rakastan perhettäni. (I love my family.)",
  },
  {
    finnish: "tykätä",
    english: "to like",
    example: "Tykkään kahvista. (I like coffee.)",
  },
  {
    finnish: "asua",
    english: "to live/reside",
    example: "Asun Helsingissä. (I live in Helsinki.)",
  },
  {
    finnish: "opiskella",
    english: "to study",
    example: "Opiskelen suomea. (I study Finnish.)",
  },
  {
    finnish: "lukea",
    english: "to read",
    example: "Luen kirjaa. (I read a book.)",
  },
  {
    finnish: "kirjoittaa",
    english: "to write",
    example: "Kirjoitan kirjeen. (I write a letter.)",
  },
  {
    finnish: "kuunnella",
    english: "to listen",
    example: "Kuuntelen musiikkia. (I listen to music.)",
  },
  {
    finnish: "laulaa",
    english: "to sing",
    example: "Laulan laulun. (I sing a song.)",
  },
  {
    finnish: "tanssia",
    english: "to dance",
    example: "Tanssimme yhdessä. (We dance together.)",
  },
  {
    finnish: "juosta",
    english: "to run",
    example: "Juocemme puistossa. (We run in the park.)",
  },
  {
    finnish: "kävellä",
    english: "to walk",
    example: "Kävelemme kotiin. (We walk home.)",
  },
  {
    finnish: "istua",
    english: "to sit",
    example: "Istumme penkillä. (We sit on a bench.)",
  },
  {
    finnish: "seisoa",
    english: "to stand",
    example: "Seisomme jonossa. (We stand in line.)",
  },
  {
    finnish: "nukkua",
    english: "to sleep",
    example: "Nukumme yössä. (We sleep at night.)",
  },
  {
    finnish: "herätä",
    english: "to wake up",
    example: "Herään aamulla. (I wake up in the morning.)",
  },
  {
    finnish: "syödä",
    english: "to eat",
    example: "Syömme aamiaista. (We eat breakfast.)",
  },
  {
    finnish: "juoda",
    english: "to drink",
    example: "Juon vettä. (I drink water.)",
  },
  {
    finnish: "ostaa",
    english: "to buy",
    example: "Ostan leipää. (I buy bread.)",
  },
  {
    finnish: "maksaa",
    english: "to pay/cost",
    example: "Maksan laskun. (I pay the bill.)",
  },
  {
    finnish: "auttaa",
    english: "to help",
    example: "Autan ystävää. (I help a friend.)",
  },
  {
    finnish: "odottaa",
    english: "to wait",
    example: "Odotan bussia. (I wait for the bus.)",
  },
  {
    finnish: "lähteä",
    english: "to leave",
    example: "Lähdemme kotoa. (We leave home.)",
  },
  {
    finnish: "saapua",
    english: "to arrive",
    example: "Saavumme asemalle. (We arrive at the station.)",
  },
  {
    finnish: "aloittaa",
    english: "to start/begin",
    example: "Aloitamme työn. (We start the work.)",
  },
  {
    finnish: "lopettaa",
    english: "to stop/finish",
    example: "Lopetamme työn. (We finish the work.)",
  },
];

const BasicVerbs = () => {
  return (
    <Container>
      <Title>Basic Verbs - Perusverbit</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          Verbs are action words that describe what someone or something is
          doing. Learning these basic Finnish verbs will help you form essential
          sentences and express everyday actions. Try using them in different
          contexts to improve your language skills!
        </p>
      </div>

      {/* Desktop Table */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            {/* <StyledTableHeader>Example</StyledTableHeader> */}
          </tr>
        </thead>
        <tbody>
          {basicVerbsData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              {/* <StyledTableCell>{row.example}</StyledTableCell> */}
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table */}
      <MobileTableContainer>
        <MobileTable>
          <thead>
            <tr>
              <MobileTableHeader>Finnish</MobileTableHeader>
              <MobileTableHeader>English</MobileTableHeader>
            </tr>
          </thead>
          <tbody>
            {basicVerbsData.map((row, index) => (
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

export default BasicVerbs;
