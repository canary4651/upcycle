import styled from 'styled-components';

import { State } from '../hooks/useChangeState';

import { colors } from '../designSystem';

import Counter from './Counter';
import Winners from './Winners';

const Button = styled.button`
  margin: 2em auto;
  padding: 1em;
  width: 43%;
  border: 0px solid;
  border-radius: 3px;
  color: ${colors.white};
  background-color: ${colors.primary};
`;

export default function Panel({
  state, winners, onClick,
}: {
  state: string;
  winners: unknown[];
  onClick: () => void;
}) {
  if (state === State.START) {
    return (
      <Button type="button" onClick={onClick}>
        PICK ME UP 🎰
      </Button>
    );
  }

  if (state === State.COUNTING) {
    return <Counter onCountEnd={onClick} />;
  }

  if (state === State.END) {
    return (
      <>
        <Button type="button" onClick={onClick}>
          TRY AGAIN 😆
        </Button>
        <Winners winners={winners} />
      </>
    );
  }

  return (
    <Button type="button" onClick={onClick}>
      START 🎮
    </Button>
  );
}
