import { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import users from '../data/users';

import random from '../utils/random';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 200px;
  overflow: hidden;
`;

type ListProps = {
  isMoving: boolean;
}

const List = styled.ul<ListProps>`
  padding: 0;
  list-style-type: none;
  ${({ isMoving }) => (isMoving ? css`
    animation: 1.5s linear infinite movedown;
  ` : '')}

  @keyframes movedown {
    from {
      transform: translateY(-50%);
    }

    to {
      transform: translateY(0%);
    }
  }
`;

const Item = styled.li`
  margin-block: .5em; 
  padding: .5em 5em;
  text-align: center;
  border-top: 1px solid #DDD;
`;

const Button = styled.button`
  margin: 2em auto;
  padding: 1em;
  width: 100%;
  border: 0px solid;
  border-radius: 3px;
  color: white;
  background-color: #1B64DA;
`;

type User = {
  id: number;
  name: string;
}

function Winners({ winners }: {
  winners: any[];
}) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [count]);

  if (count > 0) {
    return <div>{count}</div>;
  }

  return (winners.length ? (
    <p>
      축하합니다!
      {' '}
      {winners.map((winner) => winner.name).join(', ')}
      {' '}
      당첨입니다!
      😜
    </p>
  ) : null);
}

function Panel({
  moving, picked, winners,
  handleClickPick, handleClickAgain, handleClickStart,
}: {
  moving: boolean;
  picked: boolean;
  winners: unknown[];
  handleClickPick: () => void;
  handleClickAgain: () => void;
  handleClickStart: () => void;
}) {
  if (moving && !picked) {
    return (
      <Button type="button" onClick={handleClickPick}>
        PICK ME UP 🎰
      </Button>
    );
  }

  if (moving && picked) {
    return (
      <>
        <Button type="button" onClick={handleClickAgain}>
          TRY AGAIN 😆
        </Button>
        <Winners winners={winners} />
      </>
    );
  }

  return (
    <Button type="button" onClick={handleClickStart}>
      START 🎮
    </Button>
  );
}

export default function App() {
  const [winners, pick] = useState<User[]>([]);

  const [moving, setMoving] = useState(false);

  const [picked, setPicked] = useState(false);

  const handleClickStart = () => {
    setMoving(true);
  };

  const handleClickPick = () => {
    const chosenUsers = random({
      start: 0,
      end: users.length,
      count: 2,
    }).map((i) => users[i]);

    pick(chosenUsers);

    setPicked(true);
  };

  const handleClickAgain = () => {
    setMoving(false);
    setPicked(false);
  };

  return (
    <Container>
      <h1>분리수거 가챠 🎱</h1>
      <Wrapper>
        <List isMoving={moving}>
          {[...users, ...users].map((user) => (
            <Item key={user.id}>
              {user.name}
            </Item>
          ))}
        </List>
      </Wrapper>
      <Panel
        winners={winners}
        moving={moving}
        picked={picked}
        handleClickStart={handleClickStart}
        handleClickPick={handleClickPick}
        handleClickAgain={handleClickAgain}
      />
    </Container>
  );
}
