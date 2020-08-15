import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-container">
      <Avatar />
      <h1 className="hero-text hero-designation">Co-Founder & CTO</h1>
      <h1 className="hero-text">Firstbyte Digital Solutions</h1>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
