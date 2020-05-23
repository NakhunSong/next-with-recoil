import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface ITodo {
  id: number,
  name: string,  
}

interface TodoItemProps {
  todo: ITodo,
  onClick: Function,
}

const Checkbox = styled.div`
margin-left: 10px;
margin-right: 15px;

.squaredThree {
  width: 20px;
  position: relative;
  margin: 10px auto;
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(top, #222 0%, #45484d 100%);
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,.4);
    &:after {
      content: '';
      width: 9px;
      height: 5px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 3px solid #fcfff4;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }
    &:hover::after {
      opacity: 0.3;
    }
  }
  input[type=checkbox] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }    
  }
}
`;

const Text = styled.div`
  margin-right: 10px;
  ${(props) => props.checked && 'text-decoration: line-through'}
`;

const Remove = styled.div`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 2px;
  color: white;
  font-size: 18px;

  & + & {
    margin-top: 5px;
  }
`;

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    const { checked } = e.target;
    setToggle(checked)
  };

  return (
    <TodoItemWrapper>
      <Checkbox>
        <div className="squaredThree">
          <input type="checkbox" value="None" id={`square-${todo.id}`} name="check" checked={toggle} onChange={onChange} />
          <label htmlFor={`square-${todo.id}`}></label>
        </div>
      </Checkbox>
      <Text checked={toggle}>
        {todo.name}
      </Text>
      <Remove onClick={() => onClick(todo.id)}>삭제</Remove>
    </TodoItemWrapper>
  );
}

export default TodoItem;
