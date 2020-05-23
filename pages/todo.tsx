import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { state } from '../recoil/todo';
import PageTemplate from '../components/base/PageTemplate';
import Todo from '../components/todo/Todo';

export default function TodoPage() {
  return <Todo />;
}