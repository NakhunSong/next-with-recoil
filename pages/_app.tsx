import { AppProps } from 'next/app';
import {
  RecoilRoot,
} from 'recoil';
import Layout, { GlobalStyle } from '../components/base/Layout';

interface Props extends AppProps {}

export default function App({ Component, pageProps }: Props) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </RecoilRoot>
  );
}

App.getInitialProps = async (context) => {
  const { Component, ctx } = context;
  let pageProps = {};
  
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  
  return { pageProps };
}