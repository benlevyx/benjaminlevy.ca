import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import { motion } from 'framer-motion';

const Projects = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { fields: fileAbsolutePath, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              link
              background
              tools
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const projects = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Projects>
        {projects.map((item) => {
          const {
            id,
            frontmatter: { title, description, link, background, tools }
          } = item.node;

          return (
            <Styled.Project key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card style={{ backgroundColor: background }}>
                    <Styled.Content>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tools.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </a>
            </Styled.Project>
          );
        })}
      </Styled.Projects>
    </Container>
  );
};

export default Projects;
