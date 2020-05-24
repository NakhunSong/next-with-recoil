import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import { state } from '../../recoil/asynchronous';

const AsynchronousWrapper = styled.div`
`;

const Title = styled.div`
  color: white;
  font-size: 28px;
`;

const Loading = styled.div`
  color: white;
`;

const List = styled.div`
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  flex-basis: 30%;
  .category-name {
    color: white;
    font-size: 20px;
  }

  .category-img {
    width: auto;
  }
`;


const AsynchronousComponent = () => {
  let response = useRecoilValueLoadable(state.mealCategoriesState);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (response.state) {
      case 'loading':
        setLoading(true);
      case 'hasValue':
        const { contents } = response;
        if (contents.categories && contents.categories.length !== 0) {
          setList(contents.categories);
        }
        setLoading(false);
      case 'hasError':
        console.log('data loading: false');
    }
  }, [response]);
  
  return (
    <AsynchronousWrapper>
      <Title>비동기 작업</Title>
      <div>
        비동기 컴포넌트
      </div>
      {loading
        ? <Loading>Loading...</Loading>
        : (
          <div>
            {list.length !== 0 && list.map(item => (
              <List>
                <Item>
                  <span className="category-name">{item.strCategory}</span>
                  <img className="category-img" src={item.strCategoryThumb} alt="img" />
                </Item>
              </List>)
            )
            }
          </div>
        )
      }
      <div>
        <Link href="/"><a>To Home</a></Link>
      </div>
    </AsynchronousWrapper>
  );
}

export default AsynchronousComponent;
