export default function Winners({ winners }: {
  winners: any[];
}) {
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
