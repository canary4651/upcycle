import { useState } from 'react';

import users from '../../data/users';

import random from '../../utils/random';

export enum State {
  IDLE = 'IDLE',
  START = 'START',
  COUNTING = 'COUNTING',
  END = 'END',
}

type User = {
  id: number;
  name: string;
}

export default function useChageState() {
  const [state, setState] = useState<State>(State.IDLE);

  const [winners, pick] = useState<User[]>([]);

  const changeState = () => {
    if (state === State.IDLE) {
      setState(State.START);

      return;
    }

    if (state === State.START) {
      setState(State.COUNTING);

      const chosenUsers = random({
        start: 0,
        end: users.length,
        count: 2,
      }).map((i) => users[i]);

      pick(chosenUsers);

      return;
    }

    if (state === State.COUNTING) {
      setState(State.END);

      return;
    }

    if (state === State.END) {
      setState(State.IDLE);
    }
  };

  return {
    winners,
    state,
    changeState,
  };
}
