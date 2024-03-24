import '@/styles/globals.css'
import ReactPixel from 'react-facebook-pixel';
import {ChakraProvider} from '@chakra-ui/provider'
import type {AppProps} from 'next/app'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({Component, pageProps}: AppProps) {


    ReactPixel.init('2134368583563440');
    ReactPixel.pageView();
    
    return (
        <ChakraProvider>
            <ToastContainer
            />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
