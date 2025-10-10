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
} from "./Housing.styles";

const roomParts = [
  { english: "Floor", finnish: "Lattia" },
  { english: "Roof, interior roof", finnish: "Katto, sisäkatto" },
  { english: "Wall", finnish: "Seinä" },
  { english: "Window", finnish: "Ikkuna" },
  { english: "Door", finnish: "Ovi" },
];

const interiorSpaces = [
  { english: "Room", finnish: "Huone", abbreviation: "h" },
  { english: "Living room", finnish: "Olohuone, olkkari", abbreviation: "oh" },
  { english: "Bedroom", finnish: "Makuuhuone, makkari", abbreviation: "mh" },
  { english: "Office, study", finnish: "Työhuone", abbreviation: "työh" },
  { english: "Loft", finnish: "Parvi", abbreviation: "‐" },
  {
    english: "Room with a fireplace",
    finnish: "Takkahuone",
    abbreviation: "tyk",
  },
  { english: "Basement, cellar", finnish: "Kellari", abbreviation: "‐" },
  { english: "Attic", finnish: "Ullakko", abbreviation: "‐" },
];

const foodSpaces = [
  { english: "Kitchen, kyökki", finnish: "Keittiö", abbreviation: "k" },
  { english: "Kitchenette", finnish: "Keittokomero", abbreviation: "kk, kt" },
  { english: "Dining room", finnish: "Ruokailuhuone", abbreviation: "rh" },
];

const washingSpaces = [
  { english: "Bathroom", finnish: "Kylpyhuone, kylppäri", abbreviation: "kph" },
  { english: "Sauna", finnish: "Sauna", abbreviation: "s" },
  { english: "Washing room", finnish: "Pesuhuone", abbreviation: "ph" },
  { english: "Shower room", finnish: "Suihkuhuone", abbreviation: "sh" },
  { english: "Dressing room", finnish: "Pukuhuone", abbreviation: "pkh" },
];

const miscellaneousSpaces = [
  { english: "Hallway", finnish: "Eteinen", abbreviation: "et" },
  { english: "Toilet", finnish: "Vessa", abbreviation: "wc" },
  { english: "Closet", finnish: "Kaappi", abbreviation: "‐" },
  { english: "Walk-in closet", finnish: "Vaatehuone", abbreviation: "vh" },
  {
    english: "Cleaning closet",
    finnish: "Siivouskomero",
    abbreviation: "sk, siiv",
  },
  { english: "Pantry", finnish: "Ruokakomero", abbreviation: "‐" },
  { english: "Storage room", finnish: "Varasto", abbreviation: "var" },
];

const exteriorSpaces = [
  { english: "Balcony", finnish: "Parveke, partsi", abbreviation: "pvk, p" },
  { english: "Porch", finnish: "Kuisti", abbreviation: "‐" },
  { english: "Veranda", finnish: "Veranta", abbreviation: "‐" },
  { english: "Terrace, deck", finnish: "Terassi", abbreviation: "ter" },
  { english: "Garage", finnish: "Autotalli", abbreviation: "at" },
  { english: "Car shelter", finnish: "Autokatos", abbreviation: "ak" },
  { english: "Shed", finnish: "Vaja", abbreviation: "‐" },
];

const apartmentSpaces = [
  { english: "Laundry room", finnish: "Pyykkitupa, pesutupa" },
  { english: "Drying room", finnish: "Kuivaushuone" },
  { english: "Storage area", finnish: "Varasto" },
  { english: "Outdoor storage area", finnish: "Ulkovarasto" },
  { english: "Attic storage area", finnish: "Vinttikomero" },
  { english: "Basement storage area", finnish: "Kellarikomero" },
  { english: "Storage cage", finnish: "Häkkivarasto" },
  { english: "Bicycle storage area", finnish: "Pyörävarasto" },
  {
    english: "Carriage, pram and stroller storage area",
    finnish: "Lastenvaunuvarasto",
  },
  {
    english: "Sporting equipment storage area",
    finnish: "Urheiluvälinevarasto",
  },
  {
    english: "Outdoor equipment storage area",
    finnish: "Ulkoiluvälinevarasto",
  },
  { english: "Civil protection shelter", finnish: "Väestönsuoja" },
];

const livingRoomItems = [
  { english: "Sofa, couch", finnish: "Sohva" },
  { english: "Table, desk", finnish: "Pöytä" },
  { english: "Computer desk", finnish: "Tietokonepöytä" },
  { english: "Coffee table", finnish: "Kahvipöytä" },
  { english: "Chair, stool", finnish: "Tuoli" },
  { english: "Bookshelf", finnish: "Kirjahylly" },
  { english: "Lamp", finnish: "Lamppu" },
  { english: "Computer", finnish: "Tietokone" },
  { english: "Laptop", finnish: "Kannettava tietokone, läppäri" },
  { english: "Television", finnish: "Televisio, telkkari" },
  { english: "Telephone, cellphone", finnish: "Puhelin, matkapuhelin" },
  { english: "Smartphone", finnish: "Puhelin, älypuhelin, kännykkä" },
  { english: "CD player", finnish: "CD-soitin" },
  { english: "Cassette player", finnish: "Kasettisoitin" },
  { english: "Record player", finnish: "Levysoitin" },
  { english: "Video game console", finnish: "Pelikonsoli" },
];

const bedroomItems = [
  { english: "Bed", finnish: "Sänky" },
  { english: "Mattress", finnish: "Patja" },
  { english: "Night table, bedside table", finnish: "Yöpöytä" },
  { english: "Dresser", finnish: "Lipasto" },
  { english: "Wardrobe closet", finnish: "Vaatekaappi" },
];

const kitchenItems = [
  { english: "Stove", finnish: "Liesi, hella" },
  { english: "Oven", finnish: "Uuni" },
  { english: "Stove hood", finnish: "Liesituuletin" },
  { english: "Microwave", finnish: "Mikroaaltouuni, mikro" },
  { english: "Coffee maker", finnish: "Kahvinkeitin" },
  { english: "Refrigerator, fridge", finnish: "Jääkaappi" },
  { english: "Freezer", finnish: "Pakastin" },
  { english: "Dishwasher", finnish: "Tiskikone" },
  { english: "Blender", finnish: "Tehosekoitin" },
  { english: "Grill", finnish: "Grilli" },
  { english: "Hand-held mixer", finnish: "Sauvasekoitin" },
  { english: "Kitchen scale", finnish: "Keittiövaaka" },
  { english: "Tea maker", finnish: "Teekeitin" },
  { english: "Toaster", finnish: "Leivänpaahdin" },
  { english: "Cupboard", finnish: "Kaappi" },
  { english: "Drying cabinet", finnish: "Kuivauskaappi" },
  { english: "Counter, counters", finnish: "Taso, tasot" },
  { english: "Drawer, drawers", finnish: "Laatikko, laatikot" },
  { english: "Sink", finnish: "Pesuallas" },
  { english: "Faucet", finnish: "Hana" },
];

const bathroomItems = [
  { english: "Toilet", finnish: "Vessa" },
  { english: "Shower", finnish: "Suihku" },
  { english: "Bathtub", finnish: "Kylpyamme" },
  { english: "Mirror", finnish: "Peili" },
  { english: "Sink", finnish: "Pesuallas, lavuaari" },
  { english: "Washing machine", finnish: "Pesukone" },
  { english: "Drying rack", finnish: "Kuivausteline, pyykkiteline" },
  {
    english: "Toothbrush, electric toothbrush",
    finnish: "Hammasharja, sähköhammasharja",
  },
  { english: "Hair dryer", finnish: "Hiustenkuivaaja" },
  {
    english: "Razor, electric razor",
    finnish: "Partaveitsi, sähköpartaveitsi",
  },
];

// const kitchenAppliances = [
//   { english: "Blender", finnish: "Tehosekoitin" },
//   { english: "Dishwasher", finnish: "Astianpesukone" },
//   { english: "Coffee maker", finnish: "Kahvinkeitin" },
//   { english: "Cooker hood", finnish: "Liesituuletin" },
//   { english: "Freezer", finnish: "Pakastin" },
//   { english: "Grill", finnish: "Grilli" },
//   { english: "Hand-held mixer", finnish: "Sauvasekoitin" },
//   { english: "Kitchen scale", finnish: "Keittiövaaka" },
//   { english: "Microwave", finnish: "Mikroaaltouuni, mikro" },
//   { english: "Oven", finnish: "Uuni" },
//   { english: "Refrigerator", finnish: "Jääkaappi" },
//   { english: "Stove", finnish: "Liesi" },
//   { english: "Tea maker", finnish: "Teekeitin" },
//   { english: "Toaster", finnish: "Leivänpaahdin" },
// ];

const kitchenUtensils = [
  { english: "Apron", finnish: "Esiliina" },
  { english: "Baking tray", finnish: "Uunipelti" },
  { english: "Bottle opener", finnish: "Pullonavaaja" },
  { english: "Bowl", finnish: "Kulho" },
  { english: "Casserole dish", finnish: "Vuoka" },
  { english: "Chopsticks", finnish: "Syömäpuikot" },
  { english: "Cleaver", finnish: "Lihakirves" },
  { english: "Coffee pot", finnish: "Kahvipannu" },
  { english: "Coffee filter", finnish: "Suodatinpussi" },
  { english: "Colander", finnish: "Lävikkö" },
  { english: "Corkscrew", finnish: "Korkkiruuvi" },
  { english: "Cup", finnish: "Kuppi" },
  { english: "Cutlery", finnish: "Ruokailuvälineet" },
  { english: "Cutting board", finnish: "Leikkuulauta" },
  { english: "Fork", finnish: "Haarukka" },
  { english: "Frying pan", finnish: "Paistinpannu" },
  { english: "Funnel", finnish: "Suppilo" },
  { english: "Garlic press", finnish: "Valkosipulipuristin" },
  { english: "Grater, cheese grater", finnish: "Raastin, juustorastin" },
  { english: "Knife", finnish: "Veitsi" },
  { english: "Ladle", finnish: "Kauha" },
  { english: "Measuring cup", finnish: "Mittakuppi" },
  { english: "Measuring spoon", finnish: "Mittalusikka" },
  { english: "Mug", finnish: "Muki" },
  { english: "Napkin", finnish: "Lautasliina" },
  { english: "Oven glove", finnish: "Uunikinnas" },
  { english: "Pizza cutter", finnish: "Pizzaleikkuri" },
  { english: "Plate", finnish: "Lautanen" },
  { english: "Rolling pin", finnish: "Kaulin" },
  { english: "Salad spinner", finnish: "Salaattilinko" },
  { english: "Spatula", finnish: "Lasta" },
  { english: "Spoon", finnish: "Lusikka" },
  { english: "Strainer", finnish: "Siivilä" },
  { english: "Tablespoon", finnish: "Ruokalusikka" },
  { english: "Teapot", finnish: "Teekannu" },
  { english: "Teaspoon", finnish: "Teelusikka" },
  { english: "Timer", finnish: "Ajastin" },
  { english: "Toothpick", finnish: "Hammastikku" },
  { english: "Water glass", finnish: "Vesilasi" },
  { english: "Wine glass", finnish: "Viinilasi" },
  { english: "Whisk", finnish: "Vispilä" },
];

const Housing = () => {
  return (
    <Container>
      <Title>Finnish Housing Terms</Title>
      <div>
        <p style={{ padding: "10px 0" }}>
          The various terms used in housing, including the acronyms used in
          floor plans for when renting or buying a home.
        </p>
      </div>

      {/* Parts of a Room */}
      <SectionTitle>Parts of a Room</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {roomParts.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Parts of a Room</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {roomParts.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Interior Spaces */}
      <SectionTitle>Interior Spaces of a Home</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Abbr.</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {interiorSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.abbreviation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Interior Spaces of a Home</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Abbr.</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {interiorSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.abbreviation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Food Preparation and Eating Spaces */}
      <SectionTitle>Food Preparation and Eating Spaces</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Abbr.</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {foodSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.abbreviation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Food Preparation and Eating Spaces</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Abbr.</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {foodSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.abbreviation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Washing and Cleaning Spaces */}
      <SectionTitle>Washing and Cleaning Spaces</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Abbr.</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {washingSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.abbreviation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Washing and Cleaning Spaces</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Abbr.</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {washingSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.abbreviation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Miscellaneous Spaces */}
      <SectionTitle>Miscellaneous Spaces</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Abbr.</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {miscellaneousSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.abbreviation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Miscellaneous Spaces</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Abbr.</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {miscellaneousSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.abbreviation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Exterior Spaces */}
      <SectionTitle>Exterior Spaces of a Home</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>Abbr.</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {exteriorSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
              <StyledTableCell>{row.abbreviation}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Exterior Spaces of a Home</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>Abbr.</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {exteriorSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                  <MobileTableCell>{row.abbreviation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Apartment Spaces */}
      <SectionTitle>Apartment Spaces and Parts</SectionTitle>
      <div>
        <p style={{ padding: "10px 0" }}>
          The various terms used when living in an apartment and sharing common
          spaces with others.
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
          {apartmentSpaces.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Apartment Spaces and Parts</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {apartmentSpaces.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Appliances and Furniture */}
      <SectionTitle>Appliances and Furniture</SectionTitle>
      <div>
        <p style={{ padding: "10px 0" }}>
          A collection of appliances and furniture often found in the home.
        </p>
      </div>

      {/* Living Room Items */}
      <SectionTitle>Living Room Appliances and Furniture</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {livingRoomItems.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Living Room Appliances and Furniture</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {livingRoomItems.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Bedroom Items */}
      <SectionTitle>Bedroom Appliances and Furniture</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {bedroomItems.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Bedroom Appliances and Furniture</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {bedroomItems.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Bathroom Items */}
      <SectionTitle>Bathroom Appliances and Furniture</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {bathroomItems.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Bathroom Appliances and Furniture</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {bathroomItems.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>
      {/* Kitchen Items */}
      <SectionTitle>Kitchen Appliances and Furniture</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kitchenItems.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kitchen Appliances and Furniture</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kitchenItems.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Kitchen Utensils */}
      <SectionTitle>Kitchen Utensils</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {kitchenUtensils.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Kitchen Utensils</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {kitchenUtensils.map((row, index) => (
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
export default Housing;
