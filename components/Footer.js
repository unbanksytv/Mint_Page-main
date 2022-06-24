import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        Dimitri Daniloff and LiveTheLifeTV are sending you Good Vibes OHMly. Exclusive NFT for all Wave One Odyssey Genesis Minters.
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
