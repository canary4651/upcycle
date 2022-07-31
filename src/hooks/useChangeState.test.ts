import { renderHook } from '@testing-library/react';

import { act } from 'react-dom/test-utils';

import useChageState from './useChangeState';

describe('useChangeState', () => {
  describe('change state', () => {
    it('changes current state', () => {
      const { result } = renderHook(() => useChageState());

      act(() => {
        result.current.changeState();
      });

      expect(result.current.state).toBe('START');
    });
  });
});
