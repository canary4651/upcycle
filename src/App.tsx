import { useRef } from 'react';

import styled, { css } from 'styled-components';

import { ulid } from 'ulid';

import Panel from './components/Panel';

import { colors } from './designSystem';

import useChageState, { State } from './hooks/useChangeState';

import users from '../data/users';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 500;
  margin-block: 1em;
`;

const Wrapper = styled.div`
  margin-block: 1em;
  padding: 1em;
  height: 200px;
  border: 1px solid ${colors.border};
  border-radius: 3px;
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

export default function App() {
  const { winners, state, changeState } = useChageState();

  const handleClick = () => {
    changeState();
  };

  const moving = state === State.START || state === State.END;

  const usersForDisplay = useRef([
    ...users, ...users,
  ].map((u) => ({ ...u, key: ulid() })));

  return (
    <Container>
      <Title>분리수거 가챠 🎱</Title>
      <Wrapper>
        <List isMoving={moving}>
          {usersForDisplay.current.map((user) => (
            <Item key={ulid()}>
              {user.name}
            </Item>
          ))}
        </List>
      </Wrapper>
      <Panel
        winners={winners}
        state={state}
        onClick={handleClick}
      />
    </Container>
  );
}
