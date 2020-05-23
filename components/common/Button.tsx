import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode,
  onClick: Function,
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid white;
  background: white;
  color: #34558b;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
