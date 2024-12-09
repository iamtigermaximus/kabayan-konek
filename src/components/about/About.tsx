'use client';

import React from 'react';
import {
  Container,
  DividerContainer,
  DividerLabel,
  DividerLine,
  List,
  Paragraph,
  Section,
  SectionContainer,
  Subtitle,
} from './About.styles';

const About = () => {
  return (
    <Container>
      <DividerContainer>
        <DividerLine />
        <DividerLabel>ABOUT US</DividerLabel>
        <DividerLine />
      </DividerContainer>
      <SectionContainer>
        <Section>
          <Subtitle>Welcome to the Filipino Community in Finland!</Subtitle>
          <Paragraph>
            Welcome to <strong style={{ color: 'tomato' }}>kabayankonek</strong>{' '}
            , the premier platform for Filipinos living in Finland to connect,
            share, and celebrate their unique culture, lifestyle, and
            experiences. Whether you are a newcomer or have been living in
            Finland for years, this website is designed to help you stay
            connected with the Filipino community, access important information,
            and find services and products relevant to your needs.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Mission</Subtitle>
          <Paragraph>
            Our mission is to foster a sense of community among Filipinos in
            Finland by providing a space where we can connect, engage, and
            support each other. From sharing stories to celebrating Filipino
            culture and offering useful resources, our website aims to serve as
            a bridge that connects Filipinos across the country, making Finland
            feel more like home.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>What We Offer</Subtitle>
          <Paragraph>
            At <strong style={{ color: 'tomato' }}>kabayankonek</strong>, we
            provide a range of pages and features designed to serve the needs
            and interests of Filipinos living in Finland:
          </Paragraph>
          <List>
            <li>
              <strong>Kabayan Spotlight</strong> – A place to highlight Filipino
              success stories, profiles, and community leaders, celebrating the
              contributions of Filipinos in Finland.
            </li>
            <li>
              <strong>Lifestyle</strong> – A page dedicated to Filipino culture,
              traditions, food, and lifestyle in Finland, providing tips,
              insights, and experiences from fellow kababayans.
            </li>
            <li>
              <strong>Marketplace</strong> – A platform to buy and sell Filipino
              products, services, and goods, connecting Filipinos in Finland to
              the things they need or want.
            </li>
            <li>
              <strong>Events</strong> – Stay up-to-date on Filipino events,
              festivals, gatherings, and community activities happening
              throughout Finland.
            </li>
            <li>
              <strong>News</strong> – A hub for the latest news and updates
              about the Filipino community, both in Finland and from the
              Philippines, keeping kababayans informed and connected.
            </li>
            <li>
              <strong>Advertisement</strong> – A space where Filipinos can
              promote services, businesses, or events within the community,
              helping others discover what’s available in their area.
            </li>
          </List>
        </Section>

        <Section>
          <Subtitle>Get in Touch</Subtitle>
          <Paragraph>
            If you have any questions or would like to learn more about our
            website or the Filipino community in Finland, please feel free to
            reach out to us. We’re here to help and connect with you!
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@kabayankonek.com?subject=Inquiry%20from%20About%20Page&body=Hello,%20I%20have%20a%20question...">
              contact@kabayankonek.com
            </a>
            <br />
            {/* Phone: (123) 456-7890 */}
          </Paragraph>
        </Section>
      </SectionContainer>
    </Container>
  );
};

export default About;
