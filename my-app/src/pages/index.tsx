import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Background from '@/components/background';

import React, { useState } from 'react';
import ScrollButtons from '@/components/scrollButton';
import Project from '@/components/projects';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrls: [
      "/images/CarteBlanche.png",
      "https://picsum.photos/id/1020/300/200",
      "https://picsum.photos/id/1021/300/200"
    ]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrls: [
      "https://picsum.photos/id/1022/300/200",
      "https://picsum.photos/id/1023/300/200",
      "https://picsum.photos/id/1024/300/200"
    ]
  }
];

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
            Certified full-stack web developer with a background in sales.
            Proficient in HTML, CSS, JavaScript, C# and other web development
            technologies.
          </p>
        </section>
        <hr></hr>
        <div>
      <ScrollButtons />

      <div id="section1">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      </div>
      <div id="section2">Skillsets</div>
      <div id="section3">About</div>
    </div>
      </Layout>
    </Background>
  );
}
