import React from 'react';
import { Header, Banner, Layout, Services, Articles, Footer } from '../components';

const Home: React.FC = () => (
  <Layout>
    <Header />
    <Banner />
    <Services />
    <Articles />
    <Footer />
  </Layout>
);

export default Home;
