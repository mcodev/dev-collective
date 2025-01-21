import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

import StyledComponentsRegistry from '@/contexts/StyledComponentsRegistry';
import Layout from '@/components/Layout/Layout';
import { LanguageProvider } from '@/contexts/LanguageProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="colored"
          />
        </Layout>
      </LanguageProvider>
    </StyledComponentsRegistry>
  );
}
