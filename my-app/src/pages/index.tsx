import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Background from '@/components/background';

import React, {useState} from 'react';

export default function Home() {
  return (
    <Background>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.popIt}>Full Stack Web Developer</p>
        <p>
          {/* (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) */}
          Certified full-stack web developer with a background in sales.
Proficient in HTML, CSS, JavaScript and other web development
technologies.
        </p>
      </section>
      
    </Layout>
    </Background>
  );
}
