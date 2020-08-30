import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import About from '../components/about';
import Help from '../components/help';
import Tech from '../components/tech';
import Form from '../components/form';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Help />
    <Tech />
    <Form />
  </Layout>
);

export default IndexPage;
