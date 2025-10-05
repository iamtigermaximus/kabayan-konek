"use client";
// import React from 'react';
// import {
//   CaseTitle,
//   Container,
//   MobileCaseSection,
//   MobileTable,
//   MobileTableCell,
//   MobileTableContainer,
//   MobileTableHeader,
//   StyledTable,
//   StyledTableCell,
//   StyledTableHeader,
// } from './Time.styles';

// const timeData = [
//   {
//     category: 'Parts of the Day',
//     english: 'Morning, during the morning',
//     finnish: 'Aamu, aamulla',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Before midday, during the time before midday',
//     finnish: 'Aamupäivä, aamupäivällä',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Day, during the day',
//     finnish: 'Päivä, päivällä',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Afternoon, during the afternoon',
//     finnish: 'Iltapäivä, iltapäivällä',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Evening, during the evening',
//     finnish: 'Ilta, illalla',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Night, during the night',
//     finnish: 'Yö, yöllä',
//   },
//   {
//     category: 'Parts of the Day',
//     english: 'Before morning, during the time before morning',
//     finnish: 'Aamuyö, aamuyöllä',
//   },
//   {
//     category: 'What time is it',
//     english: '2.00 (2.00 AM)',
//     finnish: 'Kello on kaksi',
//   },
//   {
//     category: 'What time is it',
//     english: '13.00 (1.00 PM)',
//     finnish: 'Kello on yksitoista',
//   },
//   {
//     category: 'What time is it',
//     english: '15.15 (3.15 PM)',
//     finnish: 'Kello on varttia yli kolme',
//   },
//   {
//     category: 'What time is it',
//     english: '15.30 (3.30 PM)',
//     finnish: 'Kello on puoli neljä',
//   },
//   {
//     category: 'What time is it',
//     english: '15.45 (3.45 PM)',
//     finnish: 'Kello on varttia vaille neljä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 1.00',
//     finnish: 'Kello yksi, Yhdeltä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 2.00',
//     finnish: 'Kello kaksi, Kahdeltä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 3.00',
//     finnish: 'Kello kolme, Kolmelta',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 4.00',
//     finnish: 'Kello neljä, Neljältä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 5.00',
//     finnish: 'Kello viisi, Viideltä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 6.00',
//     finnish: 'Kello kuusi, Kuudelta',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 7.00',
//     finnish: 'Kello seitsemän, Seitsemältä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 8.00',
//     finnish: 'Kello kahdeksan, Kahdeksalta',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 9.00',
//     finnish: 'Kello yhdeksän, Yhdeksältä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 10.00',
//     finnish: 'Kello kymmenen, Kymmeneltä',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 11.00',
//     finnish: 'Kello yksitoista, Yhdeltätoista',
//   },
//   {
//     category: 'At what time something occurs',
//     english: 'At 12.00',
//     finnish: 'Kello kaksitoista, Kahdeltatoista',
//   },
//   {
//     category: 'By day relative to today',
//     english: 'Today',
//     finnish: 'Tänään',
//   },
//   {
//     category: 'By day relative to today',
//     english: 'Yesterday',
//     finnish: 'Eilen',
//   },
//   {
//     category: 'By day relative to today',
//     english: 'The day before yesterday',
//     finnish: 'Toissapäivänä',
//   },
//   {
//     category: 'By day relative to today',
//     english: 'Tomorrow',
//     finnish: 'Huomenna',
//   },
//   {
//     category: 'By day relative to today',
//     english: 'The day after tomorrow',
//     finnish: 'Ylihuomenna',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'Now',
//     finnish: 'Nyt',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'Nowadays',
//     finnish: 'Nykyään',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'At present',
//     finnish: 'Nykyisessä',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'At this time, at this moment',
//     finnish: 'Tällä hetkellä',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'These days',
//     finnish: 'Näinä päivinä',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'As I speak, as we speak',
//     finnish: 'Kuten minä puhun, kuten me puhumme',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'For now, for the time being',
//     finnish: 'Toistaiseksi',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'During this week',
//     finnish: 'Tämän viikon aikana',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'During this month',
//     finnish: 'Tämän kuun aikana',
//   },
//   {
//     category: 'Referencing the present',
//     english: 'During this year',
//     finnish: 'Tämän vuoden aikana',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'Before',
//     finnish: 'Ennen',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'A long time ago',
//     finnish: 'Kauan sitten',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'In the past',
//     finnish: 'Menneisyydessä',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'Once upon a time',
//     finnish: 'Olipa kerran',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'Those days',
//     finnish: 'Niinä päivinä',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'During last week',
//     finnish: 'Viime viikon aikana',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'During last month',
//     finnish: 'Viime kuun aikana',
//   },
//   {
//     category: 'Referencing the past',
//     english: 'During last year',
//     finnish: 'Viime vuoden aikana',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'Soon',
//     finnish: 'Pian, kohta',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'In the future',
//     finnish: 'Tulevaisuudessa',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'Later',
//     finnish: 'Myöhemmin',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'In a few minutes',
//     finnish: 'Muutaman minuutin kuluttua',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'In an hour',
//     finnish: 'Tunnissa',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'Later today',
//     finnish: 'Myöhemmin tänään',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'Later this week',
//     finnish: 'Myöhemmin tällä viikolla',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'Eventually',
//     finnish: 'Lopulta',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'During next week',
//     finnish: 'Ensi viikon aikana',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'During next month',
//     finnish: 'Ensi kuun aikana',
//   },
//   {
//     category: 'Referencing the future',
//     english: 'During next year',
//     finnish: 'Ensi vuoden aikana',
//   },
// ];

// const Time = () => {
//   const categories = [
//     'Parts of the Day',
//     'What time is it',
//     'At what time something occurs',
//     'By day relative to today',
//     'Referencing the present',
//     'Referencing the past',
//     'Referencing the future',
//   ];

//   return (
//     <Container>
//       <h2>Time References</h2>
//       <div>
//         <p style={{ padding: '10px 0' }}>
//           Finnish time references with their English equivalents.
//         </p>
//       </div>

//       {/* Desktop Tables for each category */}
//       {categories.map((category) => {
//         const categoryData = timeData.filter(
//           (item) => item.category === category
//         );

//         return (
//           <div key={category}>
//             <h3>{category}</h3>
//             <StyledTable>
//               <thead>
//                 <tr>
//                   <StyledTableHeader>Finnish</StyledTableHeader>
//                   <StyledTableHeader>English</StyledTableHeader>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categoryData.map((row, index) => (
//                   <tr key={index}>
//                     <StyledTableCell>{row.finnish}</StyledTableCell>
//                     <StyledTableCell>{row.english}</StyledTableCell>
//                   </tr>
//                 ))}
//               </tbody>
//             </StyledTable>
//           </div>
//         );
//       })}

//       {/* Mobile Tables for each category */}
//       <MobileTableContainer>
//         {categories.map((category) => {
//           const categoryData = timeData.filter(
//             (item) => item.category === category
//           );

//           return (
//             <MobileCaseSection key={category}>
//               <CaseTitle>{category}</CaseTitle>
//               <MobileTable>
//                 <thead>
//                   <tr>
//                     <MobileTableHeader>Finnish</MobileTableHeader>
//                     <MobileTableHeader>English</MobileTableHeader>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categoryData.map((row, index) => (
//                     <tr key={index}>
//                       <MobileTableCell>{row.finnish}</MobileTableCell>
//                       <MobileTableCell>{row.english}</MobileTableCell>
//                     </tr>
//                   ))}
//                 </tbody>
//               </MobileTable>
//             </MobileCaseSection>
//           );
//         })}
//       </MobileTableContainer>
//     </Container>
//   );
// };

// export default Time;
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
} from "./Time.styles";

const partsOfDayData = [
  {
    english: "Morning, during the morning",
    finnish: "Aamu, aamulla",
  },
  {
    english: "Before midday, during the time before midday",
    finnish: "Aamupäivä, aamupäivällä",
  },
  {
    english: "Day, during the day",
    finnish: "Päivä, päivällä",
  },
  {
    english: "Afternoon, during the afternoon",
    finnish: "Iltapäivä, iltapäivällä",
  },
  {
    english: "Evening, during the evening",
    finnish: "Ilta, illalla",
  },
  {
    english: "Night, during the night",
    finnish: "Yö, yöllä",
  },
  {
    english: "Before morning, during the time before morning",
    finnish: "Aamuyö, aamuyöllä",
  },
];

const whatTimeData = [
  {
    english: "2.00 (2.00 AM)",
    finnish: "Kello on kaksi",
  },
  {
    english: "13.00 (1.00 PM)",
    finnish: "Kello on yksitoista",
  },
  {
    english: "15.15 (3.15 PM)",
    finnish: "Kello on varttia yli kolme",
  },
  {
    english: "15.30 (3.30 PM)",
    finnish: "Kello on puoli neljä",
  },
  {
    english: "15.45 (3.45 PM)",
    finnish: "Kello on varttia vaille neljä",
  },
];

const atWhatTimeData = [
  {
    english: "At 1.00",
    finnish: "Kello yksi, Yhdeltä",
  },
  {
    english: "At 2.00",
    finnish: "Kello kaksi, Kahdeltä",
  },
  {
    english: "At 3.00",
    finnish: "Kello kolme, Kolmelta",
  },
  {
    english: "At 4.00",
    finnish: "Kello neljä, Neljältä",
  },
  {
    english: "At 5.00",
    finnish: "Kello viisi, Viideltä",
  },
  {
    english: "At 6.00",
    finnish: "Kello kuusi, Kuudelta",
  },
  {
    english: "At 7.00",
    finnish: "Kello seitsemän, Seitsemältä",
  },
  {
    english: "At 8.00",
    finnish: "Kello kahdeksan, Kahdeksalta",
  },
  {
    english: "At 9.00",
    finnish: "Kello yhdeksän, Yhdeksältä",
  },
  {
    english: "At 10.00",
    finnish: "Kello kymmenen, Kymmeneltä",
  },
  {
    english: "At 11.00",
    finnish: "Kello yksitoista, Yhdeltätoista",
  },
  {
    english: "At 12.00",
    finnish: "Kello kaksitoista, Kahdeltatoista",
  },
];

const dayRelativeData = [
  {
    english: "Today",
    finnish: "Tänään",
  },
  {
    english: "Yesterday",
    finnish: "Eilen",
  },
  {
    english: "The day before yesterday",
    finnish: "Toissapäivänä",
  },
  {
    english: "Tomorrow",
    finnish: "Huomenna",
  },
  {
    english: "The day after tomorrow",
    finnish: "Ylihuomenna",
  },
];

const presentRefData = [
  {
    english: "Now",
    finnish: "Nyt",
  },
  {
    english: "Nowadays",
    finnish: "Nykyään",
  },
  {
    english: "At present",
    finnish: "Nykyisessä",
  },
  {
    english: "At this time, at this moment",
    finnish: "Tällä hetkellä",
  },
  {
    english: "These days",
    finnish: "Näinä päivinä",
  },
  {
    english: "As I speak, as we speak",
    finnish: "Kuten minä puhun, kuten me puhumme",
  },
  {
    english: "For now, for the time being",
    finnish: "Toistaiseksi",
  },
  {
    english: "During this week",
    finnish: "Tämän viikon aikana",
  },
  {
    english: "During this month",
    finnish: "Tämän kuun aikana",
  },
  {
    english: "During this year",
    finnish: "Tämän vuoden aikana",
  },
];

const pastRefData = [
  {
    english: "Before",
    finnish: "Ennen",
  },
  {
    english: "A long time ago",
    finnish: "Kauan sitten",
  },
  {
    english: "In the past",
    finnish: "Menneisyydessä",
  },
  {
    english: "Once upon a time",
    finnish: "Olipa kerran",
  },
  {
    english: "Those days",
    finnish: "Niinä päivinä",
  },
  {
    english: "During last week",
    finnish: "Viime viikon aikana",
  },
  {
    english: "During last month",
    finnish: "Viime kuun aikana",
  },
  {
    english: "During last year",
    finnish: "Viime vuoden aikana",
  },
];

const futureRefData = [
  {
    english: "Soon",
    finnish: "Pian, kohta",
  },
  {
    english: "In the future",
    finnish: "Tulevaisuudessa",
  },
  {
    english: "Later",
    finnish: "Myöhemmin",
  },
  {
    english: "In a few minutes",
    finnish: "Muutaman minuutin kuluttua",
  },
  {
    english: "In an hour",
    finnish: "Tunnissa",
  },
  {
    english: "Later today",
    finnish: "Myöhemmin tänään",
  },
  {
    english: "Later this week",
    finnish: "Myöhemmin tällä viikolla",
  },
  {
    english: "Eventually",
    finnish: "Lopulta",
  },
  {
    english: "During next week",
    finnish: "Ensi viikon aikana",
  },
  {
    english: "During next month",
    finnish: "Ensi kuun aikana",
  },
  {
    english: "During next year",
    finnish: "Ensi vuoden aikana",
  },
];

const Time = () => {
  return (
    <Container>
      <Title>Time</Title>
      <DeskTopCaseTitle>Parts of the Day</DeskTopCaseTitle>
      <div>
        <SubTitle>Referenceable parts of the day in Finnish.</SubTitle>
      </div>

      {/* Desktop Table for Parts of Day */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {partsOfDayData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Parts of Day */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Parts of the Day</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {partsOfDayData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>What Time Is It</DeskTopCaseTitle>
      <div>
        <SubTitle style={{ padding: "10px 0" }}>
          Examples for telling what time it is in Finnish.
        </SubTitle>
      </div>

      {/* Desktop Table for What Time */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {whatTimeData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for What Time */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>What Time Is It</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {whatTimeData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>At What Time Something Occurs</DeskTopCaseTitle>
      <div>
        <SubTitle>
          Examples to describe at what time something occurs in Finnish.
        </SubTitle>
      </div>

      {/* Desktop Table for At What Time */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {atWhatTimeData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for At What Time */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>At What Time Something Occurs</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {atWhatTimeData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>By Day Relative to Today</DeskTopCaseTitle>
      <div>
        <SubTitle>Terms by day relative to today in Finnish.</SubTitle>
      </div>

      {/* Desktop Table for Day Relative */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {dayRelativeData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Day Relative */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>By Day Relative to Today</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {dayRelativeData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>Referencing the Present</DeskTopCaseTitle>
      <div>
        <SubTitle>Terms that reference the present in Finnish.</SubTitle>
      </div>

      {/* Desktop Table for Present Reference */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {presentRefData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Present Reference */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Referencing the Present</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {presentRefData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>Referencing the Past</DeskTopCaseTitle>
      <div>
        <SubTitle>Terms that reference the past in Finnish.</SubTitle>
      </div>

      {/* Desktop Table for Past Reference */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {pastRefData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Past Reference */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Referencing the Past</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {pastRefData.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.finnish}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <DeskTopCaseTitle>Referencing the Future</DeskTopCaseTitle>
      <div>
        <SubTitle>Terms that reference the future in Finnish.</SubTitle>
      </div>

      {/* Desktop Table for Future Reference */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Finnish</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {futureRefData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.finnish}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Table for Future Reference */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Referencing the Future</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Finnish</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {futureRefData.map((row, index) => (
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

export default Time;
