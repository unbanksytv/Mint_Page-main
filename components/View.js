import tw from "tailwind-styled-components";
import Minting from "./Minting";

const View = () => {
  return (
    <Container>
      <VideoContainer>
        <Video src="./Odyssey_gift.mp4" muted={true} autoPlay={true} loop={true} />
      </VideoContainer>
      <TitleContainer>
        <Title>DD and LTL are <br /> Offering You<br /> A Special NFT</Title>
      </TitleContainer>
    </Container>
  )
}

export default View

const Video = tw.video`
 
`

const VideoContainer = tw.div`
 max-w-screen-lg
 
`

const Container = tw.div`
 flex
 flex-col
 items-center
`

const TitleContainer = tw.div`
 text-white
 flex
`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`
