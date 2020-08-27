import React from 'react';
import Layout from '../components/layout';
import Avatar from '../components/avatar';
import Activity from '../components/activity';
import About from '../components/about';
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
    <About />
  </Layout>
);

export default IndexPage;
