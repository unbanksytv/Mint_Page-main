import tw from "tailwind-styled-components";
import { useEditionDrop, MediaRenderer, useNFT } from "@thirdweb-dev/react";

const View = () => {
  const nftCollection = useEditionDrop('0xC7801dB88D4cCdFD8deAF53aeD8A546f2016Fda1');
  const {
    data: nft,
    isLoading,
    error,
  } = useNFT(nftCollection, 0)

  return (
    !isLoading && 
    <Container>
      <VideoContainer>
        <MediaRenderer
          src={nft?.metadata.animation_url}
          alt={nft?.metadata.name}
        />
      </VideoContainer>
      <TitleContainer>
        <Title>
          {nft?.metadata.name}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        {nft?.metadata.description}
      </DescriptionContainer>
    </Container>
  )
}

export default View

const VideoContainer = tw.div`
 mt-12
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

const DescriptionContainer = tw.div`

`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`
