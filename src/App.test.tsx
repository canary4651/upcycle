import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('분리수거 가챠');
  });

  // TODO: uncomment this
  // it('listens pick event', () => {
  //   const { getByText, container } = render(<App />);

  //   expect(container).not.toHaveTextContent('축하합니다!');

  //   fireEvent.click(getByText('pick'));

  //   expect(container).toHaveTextContent('축하합니다!');
  // });
});
