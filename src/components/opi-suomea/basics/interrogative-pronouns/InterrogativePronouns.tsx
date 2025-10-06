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
  SubTitle,
  Title,
} from "./InterrogativePronouns.styles";

const kukaData = [
  {
    finnish: "Kuka sinä olet?",
    english: "Who are you?",
    example: "Minä olen Antti. (I am Antti.)",
  },
  {
    finnish: "Kuka se on?",
    english: "Who is it?",
    example: "Se on myyntimies. (It is a salesman.)",
  },
  {
    finnish: "Kuka haluaa pullaa?",
    english: "Who wants a sweet bun?",
    example: "Minä! (Me!)",
  },
];

const ketkaData = [
  {
    finnish: "Ketkä he ovat?",
    english: "Who are they?",
    example:
      "He ovat Antti, Matti ja Heikki. (They are Antti, Matti and Heikki.)",
  },
  {
    finnish: "Ketkä siivoavat autoa?",
    english: "Who are cleaning the car?",
    example: "He ovat Alpo ja Matias. (They are Alpo and Matias.)",
  },
  {
    finnish: "Ketkä teistä lähtevät huomenna Helsinkiin?",
    english: "Who is leaving for Helsinki tomorrow?",
    example: "Me kolme. (The 3 of us are.)",
  },
];

const kenenData = [
  {
    finnish: "Kenen avaimet nämä ovat?",
    english: "Whose keys are these?",
    example: "Ne ovat minun. (They are mine.)",
  },
  {
    finnish: "Kenen synttärit on tänään?",
    english: "Whose birthday is it today?",
    example: "Tänään on Tyynen synttärit. (It is Tyyne's birthday today.)",
  },
  {
    finnish: "Kenen sateenvarjo tämä on?",
    english: "Whose umbrella is this?",
    example: "Se on pomon sateenvarjo. (It is the boss's umbrella.)",
  },
];

const kenelleData = [
  {
    finnish: "Kenelle lahja on?",
    english: "Who is the gift for?",
    example: "Se on äidilleni. (It is for my mother.)",
  },
  {
    finnish: "Kenelle sinä soitat?",
    english: "Who are you calling?",
    example: "Minun ystävälleni. (To my friend.)",
  },
  {
    finnish: "Kenelle Joulupukki antaa lahjoja?",
    english: "Who does Santa Claus give gifts to?",
    example: "Kaikille tytöille ja pojille. (To all the girls and boys.)",
  },
];

const kenellaData = [
  {
    finnish: "Kenellä on ylimääräistä vaihtorahaa?",
    english: "Who has some spare change?",
    example: "Ei minulla. (Not me.)",
  },
  {
    finnish: "Kenellä on iltavuoro tänään?",
    english: "Who has the night shift today?",
    example: "Sannalla on! (Sanna does!)",
  },
  {
    finnish: "Kenellä on ajokortti?",
    english: "Who has their driver's license?",
    example: "Ei minulla, mutta ystävälläni on. (Not me, but my friend does.)",
  },
];

const mikaData = [
  {
    finnish: "Mikä päivä tänään on?",
    english: "What day is it today?",
    example: "Tänään on maanantai. (Today is Monday.)",
  },
  {
    finnish: "Mikä sinun ammattisi on?",
    english: "What is your profession?",
    example: "Minä olen graafinen suunnittelija. (I am a graphic designer.)",
  },
  {
    finnish: "Mitä kello on?",
    english: "What time is it?",
    example: "Kello on kymmenen aamulla. (It is ten in the morning.)",
  },
];

const mitkaData = [
  {
    finnish: "Mitkä ovat Suomen naapurimaat?",
    english: "What are Finland's neighbors?",
    example: "Ruotsi, Norja ja Venäjä. (Sweden, Norway and Russia.)",
  },
  {
    finnish: "Mitkä näistä ovat kypsiä?",
    english: "Which of these are ripe?",
    example: "Nämä 3. (These 3.)",
  },
  {
    finnish: "Mitkä atomit muodostavat veden?",
    english: "What elements make up water?",
    example: "2 vetyä ja 1 happi. (2 hydrogen and 1 oxygen.)",
  },
];

const mitaData = [
  {
    finnish: "Mitä kieliä sinä puhut?",
    english: "What languages do you speak?",
    example:
      "Minä puhun englantia ja vähän suomea. (I speak English and a little Finnish.)",
  },
  {
    finnish: "Mitä instrumenttia hän soittaa?",
    english: "What instrument does he play?",
    example: "Hän soittaa huuliharppua. (He plays harmonica.)",
  },
  {
    finnish: "Mitä maanviljelijä ajaa?",
    english: "What does the farmer drive?",
    example: "Hän ajaa traktoria. (He drives a tractor.)",
  },
];

const minkaData = [
  {
    finnish: "Minkä värinen se on?",
    english: "What color is it?",
    example: "Se on vaaleansininen. (It is light blue.)",
  },
  {
    finnish: "Minkä kokoinen puutarha sinulla on?",
    english: "What size garden do you have?",
    example: "Se on neljäkymmentä neliömetriä. (It is 40 meters squared.)",
  },
  {
    finnish: "Minkä maalainen sinä olet?",
    english: "Which country are you from?",
    example: "Minä olen Kanadasta. (I am from Canada.)",
  },
];

const milloinData = [
  {
    finnish: "Milloin kurssi on?",
    english: "When is the course?",
    example:
      "Kurssi on tiistaina ja torstaina. (It is on Tuesday and Thursday.)",
  },
  {
    finnish: "Milloin sinä lopetat työt?",
    english: "When do you finish working?",
    example: "Minä lopetan työt kello 16. (I finish working at 4pm.)",
  },
  {
    finnish: "Milloin lentokoneemme laskeutuu?",
    english: "When does our airplane land?",
    example: "Noin 1 tunnissa. (In about 1 hour.)",
  },
];

const missaData = [
  {
    finnish: "Missä sinä olet?",
    english: "Where are you?",
    example: "Minä olen kotona. (I'm at home.)",
  },
  {
    finnish: "Missä kissa on?",
    english: "Where is the cat?",
    example: "Kissa on laatikossa. (The cat is in the box.)",
  },
  {
    finnish: "Missä te asutte?",
    english: "Where do you live?",
    example: "Me asumme Suomessa. (We live in Finland.)",
  },
];

const mihinData = [
  {
    finnish: "Mihin sinä menet?",
    english: "Where are you going?",
    example: "Minä menen kauppaan. (I am going to the store.)",
  },
  {
    finnish: "Mihin hän matkustaa?",
    english: "Where is s/he traveling?",
    example:
      "Hän matkustaa lautalla Ruotsiin. (S/he is traveling by ferry to Sweden.)",
  },
  {
    finnish: "Mihin sinä laitoit maidon?",
    english: "Where did you put the milk?",
    example:
      "Minä laitoin maidon jääkaappiin. (I put the milk in the refrigerator.)",
  },
];

const mistaData = [
  {
    finnish: "Mistä sinä olet matkalla?",
    english: "Where are you traveling from?",
    example: "Minä juuri saavuin Kanadasta. (I just arrived from Canada.)",
  },
  {
    finnish: "Mistä sinä pidät enemmän: Kahvista vai teestä?",
    english: "What do you like more: Coffee or tea?",
    example: "Minä pidän eniten kahvista. (I like coffee the most.)",
  },
  {
    finnish: "Mistä sinä tulet ja mihin sinä menet?",
    english: "Where did you come from and where are you going?",
    example: "",
  },
];

const miksiData = [
  {
    finnish: "Miksi et osta jälkiruokaa?",
    english: "Why didn't you buy dessert?",
    example: "Koska minä säästän rahaa. (Because I'm saving money.)",
  },
  {
    finnish: "Miksi ulkona on pimeää?",
    english: "Why is it dark outside?",
    example: "On vielä talvi. (It is still winter.)",
  },
  {
    finnish: "Miksi kana meni tien toiselle puolelle?",
    english: "Why did the chicken cross the road?",
    example: "Koska miksei? (Because why not?)",
  },
];

const kuinkaMitenData = [
  {
    finnish: "Miten menee?",
    english: "How's it going?",
    example: "Ihan hyvin, kiitos. (Pretty well, thanks.)",
  },
  {
    finnish: "Miten sinulla menee?",
    english: "How are you doing?",
    example: "Kaikki on hyvin. (All is well.)",
  },
  {
    finnish: "Kuinka vanha sinä olet?",
    english: "How old are you?",
    example: "Minä olen 23 vuotta vanha. (I am 23 years old.)",
  },
  {
    finnish: "Kuinka paljon tämä maksaa?",
    english: "How much does this cost?",
    example: "Se maksaa 17 euroa. (It costs 17 euros.)",
  },
];

const millainenData = [
  {
    finnish: "Millainen auto se on?",
    english: "What kind of car is that?",
    example: "Se on audi. (It is an audi.)",
  },
  {
    finnish: "Millainen maa Suomi on?",
    english: "What kind of country is Finland?",
    example: "Suomi on kylmä mutta kaunis. (Finland is cold but beautiful.)",
  },
  {
    finnish: "Millainen bändi oli?",
    english: "How was the band?",
    example: "Ne olivat hienoja! (They were great!)",
  },
];

const mihinAikaanData = [
  {
    finnish: "Mihin aikaan kurssi alkaa?",
    english: "At what time does the course start?",
    example: "Kello 9 aamulla. (At 9am.)",
  },
  {
    finnish: "Mihin aikaan juna lähtee?",
    english: "At what time does the train leave?",
    example:
      "Juna lähtee puoli 7 illalla. (The train leaves at half 7 in the evening.)",
  },
  {
    finnish: "Mihin aikaan sinä heräät?",
    english: "At what time do you wake up?",
    example: "Minä herään kello 6. (I wake up at 6.)",
  },
];

const InterrogativePronouns = () => {
  return (
    <Container>
      <Title>Interrogative Pronouns (Question Words)</Title>
      <div>
        <SubTitle>
          Question words are used to ask questions to find out more information.
          These include &quot;who&quot;, &quot;what&quot;, &quot;when&quot;,
          &quot;where&quot;, &quot;why&quot; and &quot;how&quot; in Finnish.
        </SubTitle>
      </div>

      {/* Kuka - Who (Singular) */}
      <SectionTitle>Kuka - Who (Singular)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kukaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kuka - Who (Singular)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kukaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Ketkä - Who (Plural) */}
      <SectionTitle>Ketkä - Who (Plural)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {ketkaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Ketkä - Who (Plural)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {ketkaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Kenen - Whose */}
      <SectionTitle>Kenen - Whose</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kenenData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kenen - Whose</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kenenData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Kenelle - To whom, for whom */}
      <SectionTitle>Kenelle - To whom, for whom</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kenelleData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kenelle - To whom, for whom</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kenelleData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Kenellä - Who has */}
      <SectionTitle>Kenellä - Who has</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kenellaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kenellä - Who has</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kenellaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mikä - What (Singular) */}
      <SectionTitle>Mikä - What (Singular)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mikaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mikä - What (Singular)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mikaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mitkä - What (Plural) */}
      <SectionTitle>Mitkä - What (Plural)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mitkaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mitkä - What (Plural)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mitkaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mitä - What (Plural) */}
      <SectionTitle>Mitä - What (Plural)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mitaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mitä - What (Plural)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mitaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Minkä - What, which */}
      <SectionTitle>Minkä - What, which</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {minkaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Minkä - What, which</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {minkaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Milloin - When */}
      <SectionTitle>Milloin - When</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {milloinData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Milloin - When</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {milloinData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Missä - Where */}
      <SectionTitle>Missä - Where</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {missaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Missä - Where</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {missaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mihin - To where, to what */}
      <SectionTitle>Mihin - To where, to what</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mihinData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mihin - To where, to what</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mihinData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mistä - From where, from what */}
      <SectionTitle>Mistä - From where, from what</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mistaData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mistä - From where, from what</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mistaData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Miksi - Why */}
      <SectionTitle>Miksi - Why</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {miksiData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Miksi - Why</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {miksiData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Kuinka & Miten - How */}
      <SectionTitle>Kuinka & Miten - How</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kuinkaMitenData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kuinka & Miten - How</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kuinkaMitenData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Millainen - What kind, how is */}
      <SectionTitle>Millainen - What kind, how is</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {millainenData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Millainen - What kind, how is</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {millainenData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Mihin aikaan - At what time */}
      <SectionTitle>Mihin aikaan - At what time</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Example</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {mihinAikaanData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.example}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Mihin aikaan - At what time</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Example</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {mihinAikaanData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.example}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>
    </Container>
  );
};

export default InterrogativePronouns;
