import "../css/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css'

export const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThirdwebProvider>
  )
}

export default MyApp
