import Head from "next/head";
import styles from "../css/Home.module.css";
import tw from "tailwind-styled-components";
import Script from "next/script";

// Components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Good Vibes Ohmly</title>
        <meta name="description" content="Made with love by LiveTheLifeTV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script 
        id="tailwind"
        src="https://cdn.tailwindcss.com"
      />
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

const Container = tw.div`
 w-screen
 h-screen
 bg-black
 text-white
 px-7
`