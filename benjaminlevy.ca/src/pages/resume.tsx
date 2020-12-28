import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Interests from 'components/Interests';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
    <hr />
    <Interests />
  </Layout>
);

export default ResumePage;
