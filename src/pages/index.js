import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import Activity from '../components/activity';
import SEO from '../components/seo';
import { code, camera, right, bulb } from '../icons';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-container">
      <Avatar />
      <h1 className="hero-text hero-designation">Co-Founder & CTO</h1>
      <h1 className="hero-text">Firstbyte Digital Solutions</h1>
    </div>
    <div className="activities-container">
      <p>What am I doing?</p>
      <Activity icon={code} label="Running Firstbyte" />
      <Activity icon={camera} label="Amateur photography" />
      <Activity icon={right} label="Occassional cycling" />
      <Activity icon={bulb} label="Ideological pondering" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
