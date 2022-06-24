import tw from "tailwind-styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { CONFETTI_CONFIG } from "../common/constants";
import { useRouter } from "next/router";

const SuccessfulMint = () => {
  const router = useRouter()

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Container>
      <Heading>
        Mint Successful
      </Heading>
      <FilledButton
        onClick={() => router.push('/view')}
      >
        View NFT
      </FilledButton>
      <Particles id="tsparticles" options={CONFETTI_CONFIG} init={particlesInit} />
    </Container>
  )
}

export default SuccessfulMint

const Container = tw.div`
 flex
 flex-col
 items-center
 h-5/6
 justify-center
 content-center
`

const Heading = tw.h1`
  text-6xl
  font-bold
  italic
`

const FilledButton = tw.button`
 flex
 justify-center
 items-center
 bg-[#bfc500]
 hover:bg-white
 transition-all
 text-black
 font-bold
 py-2
 px-4
 rounded
 uppercase
 h-14
 mt-8
`
