import { AppProps } from 'next/app';
import {
  RecoilRoot,
} from 'recoil';
import PageTemplate, { GlobalStyle } from '../components/base/PageTemplate';

interface Props extends AppProps {}

export default function App({ Component, pageProps }: Props) {
  return (
    <RecoilRoot>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
      <GlobalStyle />
    </RecoilRoot>
  );
}