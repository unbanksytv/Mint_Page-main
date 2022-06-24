import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        Dimitri Daniloff and LiveTheLifeTV are sending you Good Vibes OHMly. Exclusive Free NFT for all Odyssey Genesis Holders.
      </FooterContainer>
    </Container>
  )
}

export default Footer

const FooterContainer = tw.div`
 max-w-screen-lg
 w-full
`

const Container = tw.div`
 flex
 justify-center
 my-5
 text-center
`