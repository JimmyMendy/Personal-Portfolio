import Head from "next/head";
import About from "../components/About/About";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jimmy Mendy | Front End Developer</title>
        {/* <link rel="icon" href="/favicon.ico"></link> */}
        <meta
          name='description'
          content='Hi, I am Jimmy Mendy a Front End Developer proficient in HTML, CSS, JavaScript, React. This is my portfolio'
        />
        <meta name='og:title' content='Jimmy Mendy | Front End Developer' />
        <meta
          name='og:description'
          content='Hi, I am Jimmy Mendy a Front End Developer proficient in HTML, CSS, JavaScript, React. This is my portfolio'
        />
        <meta property='og:url' content='https://www.jimmymendy.com/' />
        <meta property='og:type' content='website' />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        {/* <Timeline /> */}
        {/* <Technologies /> */}
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
