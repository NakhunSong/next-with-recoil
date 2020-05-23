import React, { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { state } from '../../recoil/todo';
import TodoItem from './TodoItem';
import Button from '../common/Button';

interface TodoListProps {}

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 550px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  margin-right: 6px;
  width: 400px;
  padding: 16px 10px;
`;

const TodoListWrapper = styled.div`
  margin-top: 20px;
  max-width: 550px;
  width: 100%;
`;

const TodoComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px auto 0;
  max-width: 1000px;
  width: 100%;
`;


const TodoComponent: FC<TodoListProps> = () => {
  const todoList = useRecoilValue(state.todoListState);
  const [todo, setTodo] = useRecoilState(state.todoState);
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);
  const onClick = useCallback(() => {
    const lastTodoId = todoList.length !== 0 ? todoList[todoList.length - 1].id : 0;
    const newTodo = { id: lastTodoId + 1, name: text };
    const newArray = todoList.concat(newTodo);
    setTodo(newArray);
    setText('');
  }, [text]);
  const onPressEnter = (e) => {
    if (e.key === 'Enter') onClick();
  };
  const handleRemove = (id) => {
    const newArray = todoList.filter(item => item.id !== id);
    setTodo(newArray);
  }
  
  return (
    <TodoComponentWrapper>
      <Title>TODO LIST</Title>
      <InputWrapper>
        <Input type="text" value={text} onChange={onChange} onKeyDown={onPressEnter} />
        <Button onClick={onClick}>추가</Button>
      </InputWrapper>
      <TodoListWrapper>
        {todoList.map(item => <TodoItem key={item.id} todo={item} onClick={handleRemove} />)}
      </TodoListWrapper>
      <Link href="/"><a>To Home</a></Link>
    </TodoComponentWrapper>
  );
}

export default TodoComponent;
