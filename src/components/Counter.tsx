import { useEffect, useState } from 'react';

export default function Counter({ onCountEnd } : {
  onCountEnd: () => void;
}) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [count]);

  if (count <= 0) {
    onCountEnd();

    return null;
  }

  return <div>{count}</div>;
}
