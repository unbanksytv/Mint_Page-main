import Head from "next/head";
import tw from "tailwind-styled-components";
import Script from "next/script";

// Components
import Header from "../components/Header";
import View from "../components/View";
import Footer from "../components/Footer";

export default function ViewNFT() {
  return (
    <Container>
      <Head>
        <title>Good Vibes Ohmly - Your NFT</title>
        <meta name="description" content="Made with love by LiveTheLifeTV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script 
        id="tailwind"
        src="https://cdn.tailwindcss.com"
      />
      <Header />
      <View />
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