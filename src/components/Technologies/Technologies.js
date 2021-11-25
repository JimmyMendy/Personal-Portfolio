import React from "react";
import { DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id='tech' mid>
    <SectionDivider />
    <SectionTitle main >Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web developement world. HTML, CSS, JavaScript, React, Next.js, REST, GRAPHQL, Node.js, Figma.
      <br />
      I also like e-commerce development and JamStack concept
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, SASS/SCSS, <br/> JavaScript, React, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Sql and NoSql Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
