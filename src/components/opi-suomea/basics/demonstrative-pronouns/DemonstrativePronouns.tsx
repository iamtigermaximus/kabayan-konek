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
} from "./DemonstrativePronouns.styles";

interface Example {
  finnish: string;
  english: string;
}

interface PronounEntry {
  form: string;
  examples: Example[];
}

interface CaseRow {
  case: string;
  pronouns: {
    this: PronounEntry;
    that: PronounEntry;
    it: PronounEntry;
    these: PronounEntry;
    those: PronounEntry;
    they: PronounEntry;
  };
}

const tableData: CaseRow[] = [
  {
    case: "Nominative",
    pronouns: {
      this: {
        form: "Tämä",
        examples: [{ finnish: "Tämä on talo.", english: "This is a house." }],
      },
      that: {
        form: "Tuo",
        examples: [{ finnish: "Tuo on puu.", english: "That is a tree." }],
      },
      it: {
        form: "Se",
        examples: [{ finnish: "Se on auto.", english: "It is a car." }],
      },
      these: {
        form: "Nämä",
        examples: [
          { finnish: "Nämä ovat ystäviä.", english: "These are friends." },
        ],
      },
      those: {
        form: "Nuo",
        examples: [
          { finnish: "Nuo ovat kirjoja.", english: "Those are books." },
        ],
      },
      they: {
        form: "Ne",
        examples: [{ finnish: "Ne ovat hyviä.", english: "They are good." }],
      },
    },
  },
  {
    case: "Stem",
    pronouns: {
      this: {
        form: "Tä-",
        examples: [
          {
            finnish: "Tästä alkaa matka.",
            english: "From this begins the journey.",
          },
        ],
      },
      that: {
        form: "Tuo-",
        examples: [
          {
            finnish: "Tuosta syystä lähdin.",
            english: "For that reason I left.",
          },
        ],
      },
      it: {
        form: "Si-",
        examples: [
          {
            finnish: "Siihen liittyy ongelma.",
            english: "It relates to the problem.",
          },
        ],
      },
      these: {
        form: "Näi-",
        examples: [
          {
            finnish: "Näistä syistä opin.",
            english: "For these reasons I learned.",
          },
        ],
      },
      those: {
        form: "Noi-",
        examples: [
          {
            finnish: "Noista kirjoista pidän.",
            english: "I like those books.",
          },
        ],
      },
      they: {
        form: "Nii-",
        examples: [
          {
            finnish: "Niihin asioihin keskityn.",
            english: "I focus on those things.",
          },
        ],
      },
    },
  },
  {
    case: "Partitive",
    pronouns: {
      this: {
        form: "Tätä",
        examples: [{ finnish: "Haluan tätä.", english: "I want this." }],
      },
      that: {
        form: "Tuota",
        examples: [{ finnish: "Katso tuota.", english: "Look at that." }],
      },
      it: {
        form: "Sitä",
        examples: [{ finnish: "Tarvitsen sitä.", english: "I need it." }],
      },
      these: {
        form: "Näitä",
        examples: [{ finnish: "Ostan näitä.", english: "I am buying these." }],
      },
      those: {
        form: "Noita",
        examples: [{ finnish: "Muistan noita.", english: "I remember those." }],
      },
      they: {
        form: "Niitä",
        examples: [{ finnish: "Rakastan niitä.", english: "I love them." }],
      },
    },
  },
  {
    case: "Genitive",
    pronouns: {
      this: {
        form: "Tämän",
        examples: [
          { finnish: "Tämän kirjan luin.", english: "I read this book." },
        ],
      },
      that: {
        form: "Tuon",
        examples: [
          { finnish: "Tuon oven suljin.", english: "I closed that door." },
        ],
      },
      it: {
        form: "Sen",
        examples: [
          { finnish: "Sen nimen tiedän.", english: "I know its name." },
        ],
      },
      these: {
        form: "Näiden",
        examples: [
          {
            finnish: "Näiden lasten kanssa leikin.",
            english: "I play with these children.",
          },
        ],
      },
      those: {
        form: "Noiden",
        examples: [
          {
            finnish: "Noiden talojen väri on kaunis.",
            english: "The color of those houses is beautiful.",
          },
        ],
      },
      they: {
        form: "Niiden",
        examples: [
          {
            finnish: "Niiden koirien nimet ovat hauskoja.",
            english: "The names of those dogs are funny.",
          },
        ],
      },
    },
  },
  {
    case: "Illative",
    pronouns: {
      this: {
        form: "Tähän",
        examples: [
          { finnish: "Menen tähän taloon.", english: "I go into this house." },
        ],
      },
      that: {
        form: "Tuohon",
        examples: [
          { finnish: "Istun tuohon tuoliin.", english: "I sit on that chair." },
        ],
      },
      it: {
        form: "Siihen",
        examples: [
          {
            finnish: "Jään siihen paikkaan.",
            english: "I stay in that place.",
          },
        ],
      },
      these: {
        form: "Näihin",
        examples: [
          {
            finnish: "Laitan kirjat näihin hyllyihin.",
            english: "I put books into these shelves.",
          },
        ],
      },
      those: {
        form: "Noihin",
        examples: [
          {
            finnish: "Juoksen noihin metsiin.",
            english: "I run into those forests.",
          },
        ],
      },
      they: {
        form: "Niihin",
        examples: [
          {
            finnish: "Luotan niihin ystäviin.",
            english: "I trust those friends.",
          },
        ],
      },
    },
  },
  {
    case: "Inessive",
    pronouns: {
      this: {
        form: "Tässä",
        examples: [
          { finnish: "Asun tässä talossa.", english: "I live in this house." },
        ],
      },
      that: {
        form: "Tuossa",
        examples: [
          {
            finnish: "Auto on tuossa pihassa.",
            english: "The car is in that yard.",
          },
        ],
      },
      it: {
        form: "Siinä",
        examples: [
          {
            finnish: "Siinä kirjassa on kuvia.",
            english: "That book has pictures.",
          },
        ],
      },
      these: {
        form: "Näissä",
        examples: [
          {
            finnish: "Näissä huoneissa on valot.",
            english: "These rooms have lights.",
          },
        ],
      },
      those: {
        form: "Noissa",
        examples: [
          {
            finnish: "Lapset leikkivät noissa taloissa.",
            english: "Children play in those houses.",
          },
        ],
      },
      they: {
        form: "Niissä",
        examples: [
          {
            finnish: "Niissä laukuissa on tavaroita.",
            english: "Those bags have things.",
          },
        ],
      },
    },
  },
  {
    case: "Elative",
    pronouns: {
      this: {
        form: "Tästä",
        examples: [
          { finnish: "Pidän tästä kirjasta.", english: "I like this book." },
        ],
      },
      that: {
        form: "Tuosta",
        examples: [
          {
            finnish: "Kerro tuosta asiasta.",
            english: "Tell me about that matter.",
          },
        ],
      },
      it: {
        form: "Siitä",
        examples: [{ finnish: "Puhuin siitä.", english: "I talked about it." }],
      },
      these: {
        form: "Näistä",
        examples: [
          {
            finnish: "Näistä kuvista pidän.",
            english: "I like these pictures.",
          },
        ],
      },
      those: {
        form: "Noista",
        examples: [
          {
            finnish: "Opin noista kirjoista.",
            english: "I learned from those books.",
          },
        ],
      },
      they: {
        form: "Niistä",
        examples: [
          {
            finnish: "Kuulin niistä uutisista.",
            english: "I heard about those news.",
          },
        ],
      },
    },
  },
  {
    case: "Allative",
    pronouns: {
      this: {
        form: "Tälle",
        examples: [
          {
            finnish: "Annoin tämän lahjan tälle lapselle.",
            english: "I gave this gift to this child.",
          },
        ],
      },
      that: {
        form: "Tuolle",
        examples: [
          {
            finnish: "Kirjoita tuolle paperille.",
            english: "Write on that paper.",
          },
        ],
      },
      it: {
        form: "Sille",
        examples: [
          {
            finnish: "Annoin sille koiralle ruokaa.",
            english: "I gave food to that dog.",
          },
        ],
      },
      these: {
        form: "Näille",
        examples: [
          {
            finnish: "Opetan näille lapsille.",
            english: "I teach these children.",
          },
        ],
      },
      those: {
        form: "Noille",
        examples: [
          {
            finnish: "Lahjat kuuluvat noille opiskelijoille.",
            english: "The gifts belong to those students.",
          },
        ],
      },
      they: {
        form: "Niille",
        examples: [
          {
            finnish: "Kerroin niille ihmisille.",
            english: "I told those people.",
          },
        ],
      },
    },
  },
  {
    case: "Adessive",
    pronouns: {
      this: {
        form: "Tällä",
        examples: [
          { finnish: "Olen tällä kadulla.", english: "I am on this street." },
        ],
      },
      that: {
        form: "Tuolla",
        examples: [
          {
            finnish: "Tapaamme tuolla torilla.",
            english: "We meet at that market.",
          },
        ],
      },
      it: {
        form: "Sillä",
        examples: [
          {
            finnish: "Hän matkustaa sillä bussilla.",
            english: "He travels on that bus.",
          },
        ],
      },
      these: {
        form: "Näillä",
        examples: [
          {
            finnish: "Soitan näillä soittimilla.",
            english: "I play with these instruments.",
          },
        ],
      },
      those: {
        form: "Noilla",
        examples: [
          {
            finnish: "Työskentelen noilla koneilla.",
            english: "I work with those machines.",
          },
        ],
      },
      they: {
        form: "Niillä",
        examples: [
          {
            finnish: "Heillä on niillä oikeus.",
            english: "They have the right with those.",
          },
        ],
      },
    },
  },
  {
    case: "Ablative",
    pronouns: {
      this: {
        form: "Tältä",
        examples: [
          { finnish: "Kysyn tältä ihmiseltä.", english: "I ask this person." },
        ],
      },
      that: {
        form: "Tuolta",
        examples: [
          {
            finnish: "Otan tuolta pöydältä.",
            english: "I take from that table.",
          },
        ],
      },
      it: {
        form: "Siltä",
        examples: [
          {
            finnish: "Kuulin siltä ystävältä.",
            english: "I heard from that friend.",
          },
        ],
      },
      these: {
        form: "Näiltä",
        examples: [
          {
            finnish: "Opin näiltä opettajilta.",
            english: "I learned from these teachers.",
          },
        ],
      },
      those: {
        form: "Noilta",
        examples: [
          {
            finnish: "Pyydän noilta ihmisiltä apua.",
            english: "I ask those people for help.",
          },
        ],
      },
      they: {
        form: "Niiltä",
        examples: [
          {
            finnish: "Sain niiltä lahjoja.",
            english: "I got gifts from them.",
          },
        ],
      },
    },
  },
];

const DemonstrativePronouns = () => {
  return (
    <Container>
      <Title>Demonstrative Pronouns</Title>
      <SubTitle>
        Demonstrative pronouns are words used to point out specific people,
        objects, or places. In Finnish, they indicate proximity (near or far)
        and number (singular or plural).
      </SubTitle>

      {/* Desktop Table */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Case</StyledTableHeader>
            <StyledTableHeader>This</StyledTableHeader>
            <StyledTableHeader>That</StyledTableHeader>
            <StyledTableHeader>It</StyledTableHeader>
            <StyledTableHeader>These</StyledTableHeader>
            <StyledTableHeader>Those</StyledTableHeader>
            <StyledTableHeader>They</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.case}</StyledTableCell>
              <StyledTableCell>
                {row.pronouns.this.form}
                <br />
                <small>{row.pronouns.this.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.this.examples[0].english}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.pronouns.that.form}
                <br />
                <small>{row.pronouns.that.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.that.examples[0].english}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.pronouns.it.form}
                <br />
                <small>{row.pronouns.it.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.it.examples[0].english}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.pronouns.these.form}
                <br />
                <small>{row.pronouns.these.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.these.examples[0].english}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.pronouns.those.form}
                <br />
                <small>{row.pronouns.those.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.those.examples[0].english}</small>
              </StyledTableCell>
              <StyledTableCell>
                {row.pronouns.they.form}
                <br />
                <small>{row.pronouns.they.examples[0].finnish}</small>
                <br />
                <small>{row.pronouns.they.examples[0].english}</small>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile View */}
      <MobileTableContainer>
        {tableData.map((row, index) => (
          <MobileCaseSection key={index}>
            <CaseTitle>{row.case} Case</CaseTitle>
            <MobileTable>
              <thead>
                <tr>
                  <MobileTableHeader>Pronoun</MobileTableHeader>
                  <MobileTableHeader>Form & Example</MobileTableHeader>
                </tr>
              </thead>
              <tbody>
                {Object.entries(row.pronouns).map(([label, entry], idx) => (
                  <tr key={idx}>
                    <MobileTableCell>{label}</MobileTableCell>
                    <MobileTableCell>
                      {entry.form}
                      <br />
                      <em>{entry.examples[0].finnish}</em>
                      <br />
                      <em>{entry.examples[0].english}</em>
                    </MobileTableCell>
                  </tr>
                ))}
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>
    </Container>
  );
};

export default DemonstrativePronouns;
