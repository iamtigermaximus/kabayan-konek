'use client';
import React from 'react';
import styled from 'styled-components';
import { breakpoints as bp } from '@/utils/layout';

const Container = styled.div`
  color: gray;
  padding: 20px 50px;
  text-align: left;
  margin-top: 30px;

  @media (min-width: ${bp.md}) {
    padding: 40px 100px;
  }

  @media (min-width: ${bp.lg}) {
    padding: 40px 200px;
  }

  @media (min-width: ${bp.xl}) {
    padding: 40px 250px;
  }
`;

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: ${bp.md}) {
  }
`;
const TermsAndConditions = () => {
  return (
    <Container>
      <Heading>Terms and Conditions</Heading>
      <p>
        These terms and conditions (“Agreement”) set forth the general terms and
        conditions of your use of the{' '}
        <a href="https://www.kabayankonek.com">kabayankonek.com</a> website
        (“Website” or “Service”) and any of its related products and services
        (collectively, “Services”). This Agreement is legally binding between
        you (“User”, “you” or “your”) and this Website operator (“Operator”,
        “we”, “us” or “our”). If you are entering into this Agreement on behalf
        of a business or other legal entity, you represent that you have the
        authority to bind such entity to this Agreement, in which case the terms
        “User”, “you” or “your” shall refer to such entity. If you do not have
        such authority, or if you do not agree with the terms of this Agreement,
        you must not accept this Agreement and may not access and use the
        Website and Services. By accessing and using the Website and Services,
        you acknowledge that you have read, understood, and agree to be bound by
        the terms of this Agreement. You acknowledge that this Agreement is a
        contract between you and the Operator, even though it is electronic and
        is not physically signed by you, and it governs your use of the Website
        and Services.
      </p>

      <div className="toc">
        <h3>Table of contents</h3>
        <ol className="toc">
          <li>
            <a href="#accounts-and-membership">Accounts and membership</a>
          </li>
          <li>
            <a href="#user-content">User content</a>
          </li>
          <li>
            <a href="#backups">Backups</a>
          </li>
          <li>
            <a href="#links-to-other-resources">Links to other resources</a>
          </li>
          <li>
            <a href="#prohibited-uses">Prohibited uses</a>
          </li>
          <li>
            <a href="#intellectual-property-rights">
              Intellectual property rights
            </a>
          </li>
          <li>
            <a href="#indemnification">Indemnification</a>
          </li>
          <li>
            <a href="#severability">Severability</a>
          </li>
          <li>
            <a href="#dispute-resolution">Dispute resolution</a>
          </li>
          <li>
            <a href="#changes-and-amendments">Changes and amendments</a>
          </li>
          <li>
            <a href="#acceptance-of-these-terms">Acceptance of these terms</a>
          </li>
          <li>
            <a href="#contacting-us">Contacting us</a>
          </li>
        </ol>
      </div>

      <h2 id="accounts-and-membership">Accounts and membership</h2>
      <p>
        You must be at least 13 years of age to use the Website and Services. By
        using the Website and Services and by agreeing to this Agreement you
        warrant and represent that you are at least 13 years of age. If you
        create an account on the Website, you are responsible for maintaining
        the security of your account and you are fully responsible for all
        activities that occur under the account and any other actions taken in
        connection with it. We may, but have no obligation to, monitor and
        review new accounts before you may sign in and start using the Services.
        Providing false contact information of any kind may result in the
        termination of your account. You must immediately notify us of any
        unauthorized uses of your account or any other breaches of security. We
        will not be liable for any acts or omissions by you, including any
        damages of any kind incurred as a result of such acts or omissions. We
        may suspend, disable, or delete your account (or any part thereof) if we
        determine that you have violated any provision of this Agreement or that
        your conduct or content would tend to damage our reputation and
        goodwill. If we delete your account for the foregoing reasons, you may
        not re-register for our Services. We may block your email address and
        Internet protocol address to prevent further registration.
      </p>

      <h2 id="user-content">User content</h2>
      <p>
        We do not own any data, information or material (collectively,
        “Content”) that you submit on the Website in the course of using the
        Service. You shall have sole responsibility for the accuracy, quality,
        integrity, legality, reliability, appropriateness, and intellectual
        property ownership or right to use of all submitted Content. We may
        monitor and review the Content on the Website submitted or created using
        our Services by you. You grant us permission to access, copy,
        distribute, store, transmit, reformat, display and perform the Content
        of your user account solely as required for the purpose of providing the
        Services to you. Without limiting any of those representations or
        warranties, we have the right, though not the obligation, to, in our own
        sole discretion, refuse or remove any Content that, in our reasonable
        opinion, violates any of our policies or is in any way harmful or
        objectionable. Unless specifically permitted by you, your use of the
        Website and Services does not grant us the license to use, reproduce,
        adapt, modify, publish or distribute the Content created by you or
        stored in your user account for commercial, marketing or any similar
        purpose.
      </p>

      <h2 id="backups">Backups</h2>
      <p>
        We are not responsible for the Content residing on the Website. In no
        event shall we be held liable for any loss of any Content. It is your
        sole responsibility to maintain appropriate backup of your Content.
        Notwithstanding the foregoing, on some occasions and in certain
        circumstances, with absolutely no obligation, we may be able to restore
        some or all of your data that has been deleted as of a certain date and
        time when we may have backed up data for our own purposes. We make no
        guarantee that the data you need will be available.
      </p>

      <h2 id="links-to-other-resources">Links to other resources</h2>
      <p>
        Although the Website and Services may link to other resources (such as
        websites, mobile applications, etc.), we are not, directly or
        indirectly, implying any approval, association, sponsorship,
        endorsement, or affiliation with any linked resource, unless
        specifically stated herein. We are not responsible for examining or
        evaluating, and we do not warrant the offerings of, any businesses or
        individuals or the content of their resources. We do not assume any
        responsibility or liability for the actions, products, services, and
        content of any other third parties. You should carefully review the
        legal statements and other conditions of use of any resource which you
        access through a link on the Website. Your linking to any other off-site
        resources is at your own risk.
      </p>

      <h2 id="prohibited-uses">Prohibited uses</h2>
      <p>
        In addition to other terms as set forth in the Agreement, you are
        prohibited from using the Website and Services or Content: (a) for any
        unlawful purpose; (b) to solicit others to perform or participate in any
        unlawful acts; (c) to violate any international, federal, provincial or
        state regulations, rules, laws, or local ordinances; (d) to infringe
        upon or violate our intellectual property rights or the intellectual
        property rights of others; (e) to harass, abuse, insult, harm, defame,
        slander, disparage, intimidate, or discriminate based on gender, sexual
        orientation, religion, ethnicity, race, age, national origin, or
        disability; (f) to submit false or misleading information; (g) to upload
        or transmit viruses or any other type of malicious code that will or may
        be used in any way that will affect the functionality or operation of
        the Website and Services, third party products and services, or the
        Internet; (h) to spam, phish, pharm, pretext, spider, crawl, or scrape;
        (i) for any obscene or immoral purpose; or (j) to interfere with or
        circumvent the security features of the Website and Services, third
        party products and services, or the Internet. We reserve the right to
        terminate your use of the Website and Services for violating any of the
        prohibited uses.
      </p>

      <h2 id="intellectual-property-rights">Intellectual property rights</h2>
      <p>
        “Intellectual Property Rights” means all present and future rights
        conferred by statute, common law or equity in or in relation to any
        copyright and related rights, trademarks, designs, patents, inventions,
        goodwill and the right to sue for passing off, rights to inventions,
        rights to use, and all other intellectual property rights, in each case
        whether registered or unregistered and including all applications and
        rights to apply for and be granted, rights to claim priority from, such
        rights and all similar or equivalent rights or forms of protection and
        any other results of intellectual activity which subsist or will subsist
        now or in the future in any part of the world. This Agreement does not
        transfer to you any intellectual property owned by the Operator or third
        parties, and all rights, titles, and interests in and to such property
        will remain (as between the parties) solely with the Operator. All
        trademarks, service marks, graphics and logos used in connection with
        the Website and Services, are trademarks or registered trademarks of the
        Operator or the Operator’s licensors. Other trademarks, service marks,
        graphics and logos used in connection with the Website and Services may
        be the trademarks of other third parties. Your use of the Website and
        Services grants you no right or license to reproduce or otherwise use
        any of the Operator or third-party trademarks.
      </p>

      <h2 id="indemnification">Indemnification</h2>
      <p>
        You agree to indemnify and hold the Operator and its affiliates,
        directors, officers, employees, agents, contractors, licensors, service
        providers, subcontractors, suppliers, and its successors and assigns,
        harmless from and against any claims, damages, obligations, losses,
        liabilities, costs or debt, and expenses (including but not limited to
        attorney’s fees) arising from: (a) your use and access of the Website
        and Services, by you or any person using your account or password; (b) a
        breach of this Agreement, or (c) content posted on the Website.
      </p>

      <h2 id="severability">Severability</h2>
      <p>
        If any provision of this Agreement is found to be unlawful, void, or
        unenforceable, such provision shall nonetheless be enforceable to the
        fullest extent permitted by applicable law, and the unenforceable
        portion shall be deemed to be severed from this Agreement, such
        determination shall not affect the validity and enforceability of any
        other remaining provisions.
      </p>

      <h2 id="dispute-resolution">Dispute resolution</h2>
      <p>
        In the event of a dispute, the parties agree to resolve the matter
        amicably through direct negotiations. If such efforts do not lead to a
        resolution, either party may opt for mediation or arbitration as a means
        of resolving the dispute. The parties will mutually agree upon a
        mediator or arbitrator to handle the dispute in accordance with the
        rules of the American Arbitration Association.
      </p>

      <h2 id="changes-and-amendments">Changes and amendments</h2>
      <p>
        We reserve the right to modify this Agreement at any time. When we do,
        we will post the revised terms on the Website and update the “Last
        Updated” date at the top of the page. Any changes or amendments will be
        effective immediately upon posting the revised Agreement. We encourage
        you to review this Agreement periodically to stay informed of updates.
        Continued use of the Website and Services after changes or amendments to
        the Agreement constitutes your acceptance of the revised terms.
      </p>

      <h2 id="acceptance-of-these-terms">Acceptance of these terms</h2>
      <p>
        You acknowledge that you have read this Agreement and agree to all its
        terms and conditions. By accessing and using the Website and Services,
        you agree to be bound by this Agreement.
      </p>

      <h2 id="contacting-us">Contacting us</h2>
      <p>
        If you have any questions about this Agreement, please contact us at{' '}
        <a href="mailto:contact@kabayankonek.com">contact@kabayankonek.com</a>.
      </p>
    </Container>
  );
};

export default TermsAndConditions;
