import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import FormatHtml from 'components/utils/FormatHtml';

const Interests = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "interests section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "interests" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              icon
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const interests = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Interests>
        {interests.map((item) => {
          const {
            id,
            html,
            frontmatter: { title, icon }
          } = item.node;

          return (
            <Styled.Interest key={id}>
              <InfoBlock icon={icon} title={title} content={<FormatHtml content={html} />} />
            </Styled.Interest>
          );
        })}
      </Styled.Interests>
    </Container>
  );
};

export default Interests;
