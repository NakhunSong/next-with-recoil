import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface TodoTemplate {
  children: React.ReactNode,
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  min-height: 100vh;
  background: #34558b;
`;

const PageTemplate: FC<TodoTemplate> = ({ children }) => {
  return (
    <PageTemplateWrapper>
      {children}
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
