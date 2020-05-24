import React, { FC } from 'react';
import styled from 'styled-components';

interface TodoTemplate {
  children: React.ReactNode,
}

const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  background: #34558b;
  // min-height: 100vh;
  margin-top: 20px;
`;

const PageTemplate: FC<TodoTemplate> = ({ children }) => {
  return (
    <PageTemplateWrapper>
      {children}
    </PageTemplateWrapper>
  );
}

export default PageTemplate;
