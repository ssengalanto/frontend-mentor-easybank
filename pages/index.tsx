import React from 'react';
import { Header, Banner, Layout, Services, Articles } from '../components';

const Home: React.FC = () => (
  <Layout>
    <Header />
    <Banner />
    <Services />
    <Articles />
  </Layout>
);

export default Home;
