import tw from "tailwind-styled-components";
import Minting from "./Minting";

const Main = () => {
  return (
    <Container>
      <VideoContainer>
        <Video src="./H2F.mp4" muted={true} autoPlay={true} loop={true} />
      </VideoContainer>
      <Minting />
    </Container>
  )
}

export default Main

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