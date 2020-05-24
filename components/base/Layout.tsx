import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PageTemplate from '../base/PageTemplate';

interface LayoutProps {
  children: React.ReactNode,
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  min-height: 100vh;
  background: #34558b;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <PageTemplate>
        {children}
      </PageTemplate>
    </LayoutWrapper>
  );
}

export default Layout;