import { useState } from 'react';

import styled from 'styled-components';

import { colors } from './designSystem';

import users from '../data/users';

import random from '../utils/random';

type User = {
    id: number;
    name: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 500;
  margin: 1em 0;
`;

const List = styled.ul`
`;

const Item = styled.li`
  margin-block: .5em; 
  padding: .5em 5em;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.1em;
  text-align: center;
  margin: 2em;
  padding: 1em;
  width: 70%;
  border: 0px solid;
  border-radius: 3px;
  color: ${colors.white};
  background-color: ${colors.primary};
`;

export default function App() {
  const [winners, pick] = useState<User[]>([]);

  const handleClick = () => {
    const chosenUsers = random({
      start: 0,
      end: users.length,
      count: 2,
    }).map((i) => users[i]);

    pick(chosenUsers);
  };

  return (
    <Container>
      <Title>분리수거 가챠 🎱</Title>
      <List>
        {users.map((user) => (
          <Item key={user.id}>
            {user.name}
          </Item>
        ))}
      </List>
      <Button type="button" onClick={handleClick}>
        PICK ME UP 🎰
      </Button>
      {winners.length ? (
        <p>
          축하합니다!
          {' '}
          {winners.map((winner) => winner.name).join(', ')}
          {' '}
          당첨입니다!
          😜
        </p>
      ) : null}
    </Container>
  );
}
